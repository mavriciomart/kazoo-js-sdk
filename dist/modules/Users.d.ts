import { ApiService } from "./../services/api";
declare class Users {
    endpoint: string;
    api: ApiService;
    call: Promise<unknown> | null;
    constructor(api: ApiService);
    get(): Promise<unknown>;
}
export default Users;
