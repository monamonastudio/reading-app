<template>
  <!-- Componentize: Home Section Header -->
  <div class="p-4 flex justify-between">
    <h2 class="text-2xl font-bold">Get Started</h2>
    <NuxtLink class=" text-indigo-400 font-bold tracking-wide" @click="signOutAndReload">View All</NuxtLink>
  </div>
  <!-- Componentize: Home Book Card Grid or Home Mini Book Card Grid -->
  <div class="grid grid-flow-col overflow-auto p-4 gap-4">
    <!-- Componentize: Home Book Card Item -->
    <div class="w-[280px] h-[350px] relative rounded-xl overflow-hidden select-none" @click="navigateTo(`/book/${book.id}`)" v-for="book in allBooks">
      <!-- <img class="absolute w-[280px] h-[350px]" :src="book.imageRef.value!" alt="" /> -->
      <div class="h-full w-full object-cover bg-yellow-300 z-0 absolute rounded-xl">
      </div>
      <div class="w-[280px] h-[350px] absolute z-10 bg-gradient-to-t from-slate-950 via-transparent">
        <div class="border-t-4 border-indigo-300 bg-black/25 absolute bottom-0 h-32 py-2 px-4">
          <h2 class="text-xl font-semibold">{{ book.title }}</h2>
          <p class="my-2">by {{ book.author }}</p>
        </div>
      </div>
    </div>
  </div>
    <!-- Componentize: Home Section Header -->
    <div class="p-4 flex justify-between">
    <h2 class="text-2xl font-bold">Promotions</h2>
  </div>
  <div class="grid grid-flow-col overflow-auto p-4 gap-4">
    <div class="w-[360px] h-[180px] relative rounded-xl overflow-hidden" v-for="i in 3">
      <img class="absolute w-[360px] h-[180px] object-cover" :src="book.imageRef.value!" alt="" />
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "layout-home"
})
const router = useRouter();

import { ref as storageRef } from "firebase/storage";
import { useFirebaseStorage, useStorageFile } from "vuefire";

import { signOut } from "firebase/auth";

const auth = useFirebaseAuth()!;
async function signOutAndReload() {
  await signOut(auth);
  router.go(0);
}

const booksStore = useBooksStore();
const { allBooks } = storeToRefs(booksStore);













// START: COMMENT OUT 
const storage = useFirebaseStorage();
const bookRef = storageRef(storage, "images/books/self-improvement-guide.webp")
const bookImageFile = useStorageFile(bookRef) 

const book = {
  id: "booktest",
  imageRef: bookImageFile.url,
  title: "The Procrastination Guide: Answers You Seek",
  author: "John Doe"
}
// END: COMMENT OUT 

</script>