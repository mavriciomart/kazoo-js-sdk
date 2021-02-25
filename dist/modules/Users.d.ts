import { ApiService } from "./../services/api";
import BaseModule from "./Base";
declare class Users extends BaseModule {
    constructor(api: ApiService);
    get(): Promise<unknown>;
}
export default Users;
