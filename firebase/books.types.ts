export type Book = {
  id: string;
  author: string;
  genre: string[];
  publish_date: Date;
  rating: number;
  schedule: {
    days: WeekDayNames[];
    time: number;
  },
  synopsis: string;
  themes: string[];
  title: string;
  update_date: Date;
}

type WeekDayNames = "mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun";