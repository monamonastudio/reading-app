<template>
  <div class="sticky bottom-0  h-24 max-w-[1000px] w-full px-4">
    <div class="mx-auto max-w-[450px] h-full grid grid-cols-3 place-items-center">
      <LayoutsNavigationTabLink v-for="navLink in homeNavigationLinks" :nav-link="navLink" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const homeNavigationLinks = [
  {
    name: "Home",
    route: "/home",
    icon: "fa-solid fa-house"
  },
  {
    name: "Gift",
    route: "/gift",
    icon: "fa-solid fa-gift"
  },
  {
    name: "Library",
    route: "/library",
    icon: "fa-solid fa-book"
  }
]
</script>