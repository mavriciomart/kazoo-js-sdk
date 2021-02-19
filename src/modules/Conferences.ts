import { ApiService } from "./../services/api";

class Conferences {
  endpoint: string;
  api: ApiService;
  // TODO: Add type
  call: Promise<unknown> | null;

  constructor(api: ApiService) {
    this.endpoint = "conferences";
    this.api = api;
  }

  // TODO: add type
  get() {
    this.call = this.api.sendRequest(this.endpoint, "GET");
    return this.call;
  }
}

export default Conferences;
