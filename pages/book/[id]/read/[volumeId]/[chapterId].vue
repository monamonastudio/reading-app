<template>
  <div v-if="chapter">
    {{chapter.content}}
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "layout-reader"
})
import { useRoute } from 'vue-router';
import { chapterDocRef } from '~/firebase/chapter.ref';

const route = useRoute();

const bookId = route.params.id as string;
const volumeId = route.params.volumeId as string;
const chapterId = route.params.chapterId as string;

const chapter = useDocument(chapterDocRef(
  bookId,
  volumeId,
  chapterId
))
</script>