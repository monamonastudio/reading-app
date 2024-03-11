<template>
  <div class="flex flex-col w-full" @click="navigateTo(route)">
    <font-awesome-icon class="text-2xl lg:text-3xl" :icon="icon" />
    <span class="text-sm my-1 text-center">{{ name }}</span>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  navLink: {
    name: string;
    route: string;
    icon: string;
  }
}>();

const { name, route, icon } = props.navLink
</script>