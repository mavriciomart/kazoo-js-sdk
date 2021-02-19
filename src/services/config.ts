import { ConfigOptions } from "~types/config";

class Config {
  host: string;
  authEndpoint: string;

  constructor(config: ConfigOptions) {
    const { host, authEndpoint } = config;

    this.host = host;
    this.authEndpoint = authEndpoint ?? "desktop_auth";
  }
}

export default Config;
