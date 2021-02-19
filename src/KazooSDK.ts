import { ApiService } from "~services/api";
import Config from "~services/config";
// modules
import Conferences from "~modules/Conferences";
import Users from "~modules/Users";
// types
import { ConfigOptions } from "~types/config";

class KazooSDK {
  config: ConfigOptions;
  api: ApiService;
  Conferences: Conferences;
  Users: Users;

  constructor(config: ConfigOptions) {
    this.config = config;
    this.api = new ApiService(config);

    // SDK modules / endpoints
    this.Conferences = new Conferences(this.api);
    this.Users = new Users(this.api);
  }

  /**
   *
   * @param username Username/email used to log in
   * @param password Password used to log in
   * @param accountName Account name
   * @param credentials You can skip both username and password and provide a md5 hash of both e.g. md5(usernema:password)
   */
  authenticate(
    username: string,
    password: string,
    accountName: string,
    credentials?: string
  ) {
    return this.api.authenticate(username, password, accountName, credentials);
  }
}

export const sdk = (config: ConfigOptions) => new KazooSDK(new Config(config));
