import { ApiService } from "./../services/api";
declare class BaseModule {
    endpoint: string;
    api: ApiService;
    call: Promise<unknown> | null;
    constructor(api: ApiService);
    get(): Promise<unknown>;
    getById(id: string): Promise<unknown>;
    update(id: string, data: unknown): Promise<unknown>;
}
export default BaseModule;
