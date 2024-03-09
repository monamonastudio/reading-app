<template>
  <div class="px-10">
    <img class="mx-auto rounded-lg aspect-square w-full max-w-[440px] object-cover" :src="book.imageRef.value!" alt="" />
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "layout-book"
})

import { ref as storageRef } from "firebase/storage";
import { useFirebaseStorage, useStorageFile } from "vuefire";

const storage = useFirebaseStorage();
const bookRef = storageRef(storage, "images/books/self-improvement-guide.webp")
const bookImageFile = useStorageFile(bookRef) 

const book = {
  id: "booktest",
  imageRef: bookImageFile.url,
  title: "Worlds Apart",
}

</script>