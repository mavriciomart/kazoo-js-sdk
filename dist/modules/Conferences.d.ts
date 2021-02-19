import { ApiService } from "./../services/api";
declare class Conferences {
    endpoint: string;
    api: ApiService;
    call: Promise<unknown> | null;
    constructor(api: ApiService);
    get(): Promise<unknown>;
}
export default Conferences;
