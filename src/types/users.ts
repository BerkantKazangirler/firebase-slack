export interface UsersI {
  id: string;
  contact_info: {
    email: string;
    phone: string;
  } | null;
  display_name: string;
  email: string;
  local_time: string | null;
  name: string;
  photo?: string;
  status: "ONLINE" | "AWAY" | "OFFLINE"
  title: string | null;
}