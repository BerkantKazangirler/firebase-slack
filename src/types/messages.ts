export interface MessagesI {
  id: string;
  content: string;
  date: DateI[];
  sender_by: string;
}

interface DateI {
  date: string;
  time: string;
}