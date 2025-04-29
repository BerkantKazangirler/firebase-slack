export interface WorkSpaceI {
  id: string;
  channels: string[];
  title: string;
  users: string[];
  premium: boolean;
  premium_date?: {
    day: number;
    month: number;
  };
  photo: string | undefined;
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