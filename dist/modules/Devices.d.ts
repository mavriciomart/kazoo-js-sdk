import { ApiService } from "../services/api";
import BaseModule from "./Base";
declare type Device = {
    application: {
        id: string;
        name: string;
    };
    call_restriction: {};
    contact_list: {};
    device_type: string;
    enabled: boolean;
    exclude_from_queues: boolean;
    id: string;
    media: {};
    music_on_hold: {};
    name: string;
    owner_id: string;
    sip: {
        invite_format: string;
        method: "password";
        username: string;
        password: string;
        expire_seconds: number;
    };
};
declare class Devices extends BaseModule {
    constructor(api: ApiService);
    get(): Promise<{
        data: Device[];
    }>;
    getById(id: string): Promise<{
        data: Device;
    }>;
}
export default Devices;
