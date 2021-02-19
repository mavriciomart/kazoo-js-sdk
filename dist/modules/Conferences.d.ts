import { ApiService } from "./../services/api";
declare type MemberConfig = {
    pins: string[];
    numbers: string[];
    join_muted: boolean;
    join_deaf: boolean;
};
interface Conference {
    id: string;
    name: string;
    features: [];
    flags: [];
    conference_numbers: string[];
    member: MemberConfig;
    moderator: MemberConfig;
}
declare class Conferences {
    endpoint: string;
    api: ApiService;
    call: Promise<unknown> | null;
    constructor(api: ApiService);
    get(): Promise<{
        data: Conference[];
    }>;
}
export default Conferences;
