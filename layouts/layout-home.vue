<template>
  <div>
    <!-- Componentize: Home Header -->
    <div class="h-28 px-4 py-2 sticky top-0 bg-black max-w-[1000px] w-full">
      <div class="flex items-center justify-between my-3">
        <h1 class="text-xl">Newish Fiction</h1>
        <font-awesome-icon class="text-2xl" icon="fa-solid fa-magnifying-glass" />
      </div>
      <div class="grid grid-cols-2 place-items-center gap-3 my-1 w-full">
        <NuxtLink class="w-full py-2 px-4 rounded-lg bg-neutral-600 font-bold grid-flow-col place-items-center"><font-awesome-icon class="mx-2" icon="fa-solid fa-book" /> READ</NuxtLink>
        <NuxtLink class="w-full py-2 px-4 rounded-lg bg-neutral-600 font-bold grid-flow-col place-items-center"><font-awesome-icon class="mx-2" icon="fa-solid fa-headphones" />LISTEN</NuxtLink>
      </div>
    </div>
    <div class="overflow-x-hidden h-[calc(100dvh-208px)]">
      <slot></slot>
    </div>
    <!-- Componentize: Home Nav Tab -->
    <LayoutsNavigationTabs />
  </div>
</template>