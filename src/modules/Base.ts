import { ApiService } from "./../services/api";
import { buildRequestUrl } from "../utils/url";
import { URLParams } from "./../types/request";

class BaseModule {
  endpoint: string;
  api: ApiService;
  // TODO: Add type
  call: Promise<unknown> | null;

  // shared ApiServive === shared Storage === happiness
  constructor(api: ApiService) {
    this.api = api;
  }

  get(options?: URLParams) {
    this.call = this.api.sendRequest(
      buildRequestUrl(this.endpoint, options),
      "GET"
    );
    return this.call;
  }

  getById(id: string) {
    this.call = this.api.sendRequest(`${this.endpoint}/${id}`, "GET");
    return this.call;
  }

  update(id: string, data: unknown) {
    this.call = this.api.sendRequest(`${this.endpoint}/${id}`, "PATCH", data);
    return this.call;
  }
}

export default BaseModule;
