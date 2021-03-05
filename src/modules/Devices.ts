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

type DeviceUpdate = {
  do_not_disturb?: {
    enabled: boolean;
  };
};

class Devices extends BaseModule {
  get: () => Promise<{ data: Device[] }>;
  getById: (id: string) => Promise<{ data: Device }>;
  update: (id: string, data: DeviceUpdate) => Promise<{ data: Device }>;

  constructor(api: ApiService) {
    super(api);
    this.endpoint = "devices";
  }
}

export default Devices;
