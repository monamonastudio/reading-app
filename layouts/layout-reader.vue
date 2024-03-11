<template>
  <div>
    <!-- Componentize: Home Header -->
    <div class="h-16 px-4 py-2 sticky top-0 bg-black max-w-[1000px] w-full">
      <div class="flex items-center justify-between my-3" @click="$router.back()">
        <font-awesome-icon class="text-2xl" icon="fa-solid fa-xmark" />
        <p v-if="chapter">Vol {{ volumeId }}, Ch {{ chapterId }}: {{ chapter.title }}</p>
        <font-awesome-icon class="text-2xl" icon="fa-solid fa-ellipsis" />
      </div>
    </div>
    <div class="overflow-x-hidden h-[calc(100dvh-160px)] bg-neutral-950 p-8">
      <slot></slot>
    </div>
    <!-- Componentize: Home Nav Tab -->
    <div class="sticky bottom-0 h-20 max-w-[1000px] w-full">
      <div class="mx-auto max-w-[450px] h-full grid grid-cols-5 place-items-center">
        <div class="flex flex-col">
          <font-awesome-icon class="text-2xl lg:text-3xl" icon="fa-solid fa-bars" />
        </div>
        <div class="flex flex-col">
          <font-awesome-icon class="text-2xl lg:text-3xl" icon="fa-solid fa-font" />
        </div>
        <div class="flex flex-col">
          <font-awesome-icon class="text-2xl lg:text-3xl" icon="fa-solid fa-comment" />
        </div>
        <div class="flex flex-col">
          <font-awesome-icon class="text-2xl lg:text-3xl" icon="fa-solid fa-chevron-left" />
        </div>
        <div class="flex flex-col">
          <font-awesome-icon class="text-2xl lg:text-3xl" icon="fa-solid fa-chevron-right" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';
import { chapterDocRef } from '~/firebase/chapter.ref';

const route = useRoute();
const bookId = route.params.id as string;
const volumeId = route.params.volumeId as string;
const chapterId = route.params.chapterId as string;

console.log(bookId, volumeId, chapterId);


const chapter = useDocument(chapterDocRef(
  bookId,
  volumeId,
  chapterId
))
</script>