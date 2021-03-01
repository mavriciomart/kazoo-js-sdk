import { ApiService } from "./../services/api";
import BaseModule from "./Base";

type MemberConfig = {
  pins: string[];
  numbers: string[];
  join_muted: boolean;
  join_deaf: boolean;
};

interface Conference {
  id: string;
  name: string;
  features: [];
  flags: [];
  conference_numbers: string[];
  member: MemberConfig;
  moderator: MemberConfig;
}
class Conferences extends BaseModule {
  call: Promise<unknown> | null;

  constructor(api: ApiService) {
    super(api);
    this.endpoint = "conferences";
  }

  get() {
    this.call = this.api.sendRequest(this.endpoint, "GET");
    return this.call as Promise<{ data: Conference[] }>;
  }
}

export default Conferences;
