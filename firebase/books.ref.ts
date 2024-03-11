import { collection, doc } from "firebase/firestore";
import { db } from ".";
import type { Book } from "./books.types";

export const allBooksColRef = collection(db, "books");
export const bookDocRef = (id: Book["id"]) => doc(allBooksColRef, id);