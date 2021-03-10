import { ApiService } from "./../services/api";
import { URLParams } from "../types/request";
import BaseModule from "./Base";

type User = { id: string; name: string; presenceId: string };

class Users extends BaseModule {
  get: (options: URLParams) => Promise<{ data: User[] }>;
  getById: (id: string) => Promise<{ data: User }>;

  constructor(api: ApiService) {
    super(api);
    this.endpoint = "users";
  }
}

export default Users;
