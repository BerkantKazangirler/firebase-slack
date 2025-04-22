export interface WorkSpaceI {
  id: string;
  channels: ChannelsI[];
  title: string;
  users: UsersI[];
}

interface ChannelsI {
  id: string;
}

interface UsersI {
  id: string;
}