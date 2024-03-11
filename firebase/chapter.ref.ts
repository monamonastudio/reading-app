import { doc } from "firebase/firestore";
import type { Book } from "./books.types";
import { db } from ".";

export const chapterDocRef = (
  bookId: Book["id"], 
  volumeId: string, 
  chapterId: string
) => doc(
  db, 
  "books", 
  bookId, 
  "volume", 
  volumeId, 
  "chapter", 
  chapterId
);