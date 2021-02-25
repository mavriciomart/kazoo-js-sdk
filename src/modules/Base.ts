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
}

export default BaseModule;
