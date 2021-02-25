import { ApiService } from "../services/api";
import BaseModule from "./Base";
declare class Devices extends BaseModule {
    constructor(api: ApiService);
    get(): Promise<{
        data: any[];
    }>;
    getById(id: string): Promise<{
        data: any[];
    }>;
}
export default Devices;
