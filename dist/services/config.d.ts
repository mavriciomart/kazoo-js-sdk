import { ConfigOptions } from "./../types/config";
declare class Config {
    host: string;
    authEndpoint: string;
    constructor(config: ConfigOptions);
}
export default Config;
