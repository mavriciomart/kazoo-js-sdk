import { ApiService } from "./../services/api";
import { URLParams } from "../types/request";
import BaseModule from "./Base";
declare type User = {
    id: string;
    email: string;
    enabled: boolean;
    features: string[];
    first_name: string;
    last_name: string;
    presence_id: string;
    priv_level: string;
    username: string;
};
declare class Users extends BaseModule {
    get: (options?: URLParams) => Promise<{
        data: User[];
    }>;
    getById: (id: string) => Promise<{
        data: User;
    }>;
    constructor(api: ApiService);
}
export default Users;
