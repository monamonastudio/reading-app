<template>
  <div>
    <!-- Componentize: Home Header -->
    <div class="h-28 px-4 py-2 sticky top-0 bg-black max-w-[1000px] w-full flex items-center justify-between">
      <div class="flex items-center justify-between my-3">
        <img class="aspect-square h-10 w-10 rounded-full" src="https://placehold.co/50" alt="">
        <span class="px-4">Username</span>
      </div>
      <div class="flex items-center text-xl">
        <div class="flex gap-4 items-center mx-4 bg-slate-500/50 p-2 rounded-full">
          <font-awesome-icon class="text-emerald-400 text-4xl" icon="fa-solid fa-money-bill"></font-awesome-icon>
          <span class="font-semibold text-xl">12</span>
          <font-awesome-icon class="text-lg" icon="fa-solid fa-chevron-right" />
        </div>
        <div class="flex gap-4 items-center mx-4">
          <font-awesome-icon class="text-blue-400 text-4xl" icon="fa-solid fa-ticket"></font-awesome-icon>
          <span class="font-semibold text-xl">200</span>
          <font-awesome-icon class="text-lg" icon="fa-solid fa-chevron-right" />
        </div>
      </div>
    </div>
    <div class="overflow-x-hidden h-[calc(100dvh-208px)]">
      <slot></slot>
    </div>
    <!-- Componentize: Home Nav Tab -->
    <LayoutsNavigationTabs />
  </div>
</template>