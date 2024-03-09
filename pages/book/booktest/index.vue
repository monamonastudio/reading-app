<template>
  <div class="px-10 max-w-[440px] mx-auto">
    <img class="mx-auto rounded-lg aspect-square w-full object-cover" :src="book.imageRef.value!" alt="" />
    <h1 class="text-2xl my-4">{{ book.title }}</h1>
    <p class="my-4">by {{ book.author }}</p>
    <button class="w-full text-center p-2 bg-indigo-600 text-xl rounded-full font-semibold tracking-wide" @click="navigateTo(`/book/booktest/chapter/1`)">READ THE
      BOOK</button>
    <div class="my-4 p-4 ">
      <p class="h-24 overflow-hidden bg-gradient-to-b from-neutral-200 via-white to-black bg-clip-text text-transparent mb-6">
        {{ book.synopsis }}
      </p>
      <button class="text-indigo-400 font-semibold">Show more</button>
    </div>
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
  title: "The Procrastination Guide: Answers You Seek",
  author: "John Doe",
  synopsis: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis reprehenderit eius est facere, eum rerum at! Enim nostrum quod ad cupiditate ex expedita quas necessitatibus, ducimus maxime dignissimos aut odio."
}
</script>