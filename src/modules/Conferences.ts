import { ApiService } from "./../services/api";

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
class Conferences {
  endpoint: string;
  api: ApiService;
  // TODO: Add type
  call: Promise<unknown> | null;

  // shared ApiServive === shared Storage === happiness
  constructor(api: ApiService) {
    this.endpoint = "conferences";
    this.api = api;
  }

  get() {
    this.call = this.api.sendRequest(this.endpoint, "GET");
    return this.call as Promise<{ data: Conference[] }>;
  }
}

export default Conferences;
