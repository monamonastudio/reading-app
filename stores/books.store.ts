import { useCollection } from "vuefire";
import { allBooksColRef } from "~/firebase/books.ref";

export const useBooksStore = defineStore("books-store", () => {
  const allBooks = useCollection(allBooksColRef);

  return { allBooks }
})