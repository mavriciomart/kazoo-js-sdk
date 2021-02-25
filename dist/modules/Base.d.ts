import { ApiService } from "./../services/api";
declare class BaseModule {
    endpoint: string;
    api: ApiService;
    call: Promise<unknown> | null;
    constructor(api: ApiService);
}
export default BaseModule;
