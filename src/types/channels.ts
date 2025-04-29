export interface ChannelsI {
  id: string;
  created_by: {
    date: string;
    owner: string;
  };
  description: string;
  members: string[];
  name: string;
  public: boolean;
}