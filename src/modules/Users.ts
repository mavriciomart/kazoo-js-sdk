import { ApiService } from "~services/api";

class Users {
  endpoint: string;
  api: ApiService;
  // TODO: Add type
  call: Promise<unknown> | null;

  constructor(api: ApiService) {
    this.endpoint = "users";
    this.api = api;
  }

  // TODO: add type
  get() {
    this.call = this.api.sendRequest(this.endpoint, "GET");
    return this.call;
  }
}

export default Users;
