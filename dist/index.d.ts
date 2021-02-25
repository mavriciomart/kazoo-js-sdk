import { ApiService } from "./services/api";
import Conferences from "./modules/Conferences";
import Devices from "./modules/Devices";
import Users from "./modules/Users";
import { ConfigOptions } from "./types/config";
declare class KazooSDK {
    config: ConfigOptions;
    api: ApiService;
    Conferences: Conferences;
    Devices: Devices;
    Users: Users;
    constructor(config: ConfigOptions);
    /**
     *
     * @param username Username/email used to log in
     * @param password Password used to log in
     * @param accountName Account name
     * @param credentials You can skip both username and password and provide a md5 hash of both e.g. md5(usernema:password)
     */
    authenticate(username: string, password: string, accountName: string, credentials?: string): Promise<unknown>;
}
export declare const sdk: (config: ConfigOptions) => KazooSDK;
export {};
