export interface WorkSpaceI {
  id: string;
  channels: Record<string, string> | undefined;
  title: string;
  users: Record<string, string> | undefined;
  premium: boolean;
  premium_date?: {
    day: number;
    month: number;
  };
  url: string;
}

export const monthNames = [
  "Ocak",
  "Şubat",
  "Mart",
  "Nisan",
  "Mayıs",
  "Haziran",
  "Temmuz",
  "Ağustos",
  "Eylül",
  "Ekim",
  "Kasım",
  "Aralık",
];