import { ApiService } from "../services/api";
import BaseModule from "./Base";

class Devices extends BaseModule {
  constructor(api: ApiService) {
    super(api);
    this.endpoint = "devices";
  }

  get() {
    this.call = this.api.sendRequest(this.endpoint, "GET");
    // TODO: Add correct types
    return this.call as Promise<{ data: any[] }>;
  }

  getById(id: string) {
    this.call = this.api.sendRequest(`${this.endpoint}/${id}`, "GET");
    // TODO: Add correct types
    return this.call as Promise<{ data: any[] }>;
  }
}

export default Devices;
