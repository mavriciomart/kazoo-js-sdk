import StorageService from "./storage";
import { ConfigOptions } from "./../types/config";
import { RequestMethods } from "./../types/request";
export declare class ApiService {
    config: ConfigOptions;
    storage: StorageService;
    constructor(config: ConfigOptions);
    /**
     *
     * @param username Username/email used to log in
     * @param password Password used to log in
     * @param accountName Account name
     * @param credentials You can skip both username and password and provide a md5 hash of both e.g. md5(usernema:password)
     */
    authenticate(username: string | null, password: string | null, accountName: string, credentials?: string): Promise<unknown>;
    sendRequest(endpoint: string, method: RequestMethods, body?: any): Promise<unknown>;
    /**
     *
     * @param accountId ID of the account you want to masquerade
     */
    masquerade(accountId: string): void;
    /**
     * Stops masquerading and uses original account ID
     */
    stopMasquerading(): void;
}
