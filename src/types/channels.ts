export interface ChannelsI {
  id: string;
  created_by: {
    date: string;
    owner: string;
  };
  description: string;
  members: Record<string, string>;
  name: string;
  public: boolean;
}