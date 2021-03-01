import { ApiService } from "../services/api";
import BaseModule from "./Base";

type Device = {
  application: { id: string; name: string };
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

class Devices extends BaseModule {
  constructor(api: ApiService) {
    super(api);
    this.endpoint = "devices";
  }

  get() {
    this.call = this.api.sendRequest(this.endpoint, "GET");
    return this.call as Promise<{ data: Device[] }>;
  }

  getById(id: string) {
    this.call = this.api.sendRequest(`${this.endpoint}/${id}`, "GET");
    return this.call as Promise<{ data: Device }>;
  }
}

export default Devices;
