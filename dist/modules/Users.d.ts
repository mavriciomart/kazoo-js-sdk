import { ApiService } from "./../services/api";
import { URLParams } from "../types/request";
import BaseModule from "./Base";
declare type User = {
    id: string;
    name: string;
    presenceId: string;
};
declare class Users extends BaseModule {
    get: (options: URLParams) => Promise<{
        data: User[];
    }>;
    getById: (id: string) => Promise<{
        data: User;
    }>;
    constructor(api: ApiService);
}
export default Users;
