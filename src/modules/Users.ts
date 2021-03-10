import { ApiService } from "./../services/api";
import BaseModule from "./Base";

class Users extends BaseModule {
  constructor(api: ApiService) {
    super(api);
    this.endpoint = "users";
  }

  // TODO: add type
  get() {
    this.call = this.api.sendRequest(this.endpoint, "GET");
    return this.call;
  }
}

export default Users;
