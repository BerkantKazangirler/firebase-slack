export interface UsersI {
  id: string;
  contact_info: Contact_InfoI[] | null;
  display_name: string;
  email: string;
  local_time: string | null;
  name: string;
  photo?: string;
  status: "ONLINE" | "AWAY" | "OFFLINE"
  title: string | null;
}

interface Contact_InfoI {
  email: string;
  phone: string;
}