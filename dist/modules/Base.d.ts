import { ApiService } from "./../services/api";
import { URLParams } from "./../types/request";
declare class BaseModule {
    endpoint: string;
    api: ApiService;
    call: Promise<unknown> | null;
    constructor(api: ApiService);
    get(options: URLParams): Promise<unknown>;
    getById(id: string): Promise<unknown>;
    update(id: string, data: unknown): Promise<unknown>;
}
export default BaseModule;
