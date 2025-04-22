export interface ChannelsI {
  id: string;
  created_by: Created_ByI[];
  description: string;
  members: MembersI[];
  name: string;
  public: boolean;
}

interface Created_ByI {
  date: string;
  owner: string;
}

interface MembersI {
  id: string;
}