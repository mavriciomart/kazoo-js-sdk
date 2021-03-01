import md5 from "md5";
import StorageService from "./storage";
import { ConfigOptions } from "./../types/config";
import { RequestMethods } from "./../types/request";
import { parseResponse, isTokenInvalid } from "./../utils/api";

interface Credentials {
  authToken: string;
  credentials: string;
  // Account ID used to log in
  accountId: string;
  accountName: string;
  // Account ID used for request
  currentAccountId: string;
}

const createAuthRequest = (
  config: ConfigOptions,
  credentials: string,
  accountName: string
) => {
  if (!config.host) {
    throw new Error("You have not specifiend an API host");
  }

  return new Promise((resolve, reject) => {
    fetch(`${config.host}/${config.authEndpoint}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: {
          credentials,
          account_name: accountName,
        },
      }),
    })
      .then(parseResponse)
      .then((response) => {
        if (response.ok) {
          resolve(response.json);
        }

        reject(response.json);
      })
      .catch((error) => reject(error));
  });
};

export class ApiService {
  config: ConfigOptions;
  storage: StorageService;

  constructor(config: ConfigOptions) {
    this.config = config;
    this.storage = new StorageService();
  }

  /**
   *
   * @param username Username/email used to log in
   * @param password Password used to log in
   * @param accountName Account name
   * @param credentials You can skip both username and password and provide a md5 hash of both e.g. md5(usernema:password)
   */
  authenticate(
    username: string | null,
    password: string | null,
    accountName: string,
    credentials?: string
  ) {
    const { config } = this;

    const authCredentials = credentials
      ? credentials
      : md5(`${username}:${password}`);

    const authPromise = createAuthRequest(config, authCredentials, accountName);

    authPromise
      .then((response) => {
        const credentials = {
          // @ts-ignore
          authToken: response.auth_token,
          credentials: authCredentials,
          // @ts-ignore
          accountId: response.data.account_id,
          // @ts-ignore
          currentAccountId: response.data.account_id,
          accountName: accountName,
        };
        this.storage.set("credentials", credentials);
      })
      .catch(() => {});
    return authPromise;
  }

  sendRequest(endpoint: string, method: RequestMethods) {
    const { config } = this;

    const requestPromise = new Promise((resolve, reject) => {
      const credentials = this.storage.get("credentials") || {};

      const request = (credentials: Credentials) => {
        const { authToken, currentAccountId } = credentials;

        if (!authToken || !currentAccountId) {
          reject("User has not been authorized");
        }

        // TODO: Add option to extend headers
        const headers = {
          "X-Auth-Token": authToken,
          "Content-Type": "application/json",
        };

        fetch(`${config.host}/accounts/${currentAccountId}/${endpoint}`, {
          method,
          headers,
        })
          .then(parseResponse)
          .then((response) => {
            if (response.ok) {
              resolve(response.json);
            }

            reject(response.json);
          })
          .catch((error) => reject(error));
      };

      if (isTokenInvalid(credentials.authToken)) {
        // re authenticate and run request with new credentials
        return this.authenticate(
          "",
          "",
          credentials.accountName,
          credentials.credentials
        )
          .then(() => request(this.storage.get("credentials")))
          .catch((error) => reject(error));
      }

      return request(credentials);
    });

    return requestPromise;
  }

  /**
   *
   * @param accountId ID of the account you want to masquerade
   */
  masquerade(accountId: string) {
    const credentials = this.storage.get("credentials") as Credentials;
    this.storage.set("credentials", {
      ...credentials,
      currentAccountId: accountId,
    });
  }

  /**
   * Stops masquerading and uses original account ID
   */
  stopMasquerading() {
    const credentials = this.storage.get("credentials") as Credentials;
    this.storage.set("credentials", {
      ...credentials,
      currentAccountId: credentials.accountId,
    });
  }
}
