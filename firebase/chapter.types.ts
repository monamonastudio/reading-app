import { doc } from "firebase/firestore";
import { db } from ".";
import type { Book } from "./books.types";

export const chapterDocRef = (
  bookId: Book["id"], 
  seasonId: string, 
  chapterId: string
) => doc(db, "books", bookId, seasonId, chapterId);