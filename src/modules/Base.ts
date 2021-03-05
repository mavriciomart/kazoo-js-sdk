import { ApiService } from "./../services/api";

class BaseModule {
  endpoint: string;
  api: ApiService;
  // TODO: Add type
  call: Promise<unknown> | null;

  // shared ApiServive === shared Storage === happiness
  constructor(api: ApiService) {
    this.api = api;
  }

  get() {
    this.call = this.api.sendRequest(this.endpoint, "GET");
    return this.call;
  }

  getById(id: string) {
    this.call = this.api.sendRequest(`${this.endpoint}/${id}`, "GET");
    return this.call;
  }

  update(id: string, data: unknown) {
    this.call = this.api.sendRequest(`${this.endpoint}/${id}`, "PATCH", data);
  }
}

export default BaseModule;
