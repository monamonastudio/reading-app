<template>
  <div>
    <div class="h-28 px-4 py-2 sticky top-0 bg-black max-w-[1000px] w-full">
      <div class="flex items-center justify-between my-3">
        <div>
          <font-awesome-icon class="text-2xl" @click="$router.back()" icon="fa-solid fa-chevron-down" />
        </div>
        <div class="grid grid-flow-col gap-8">
          <font-awesome-icon class="text-2xl" icon="fa-solid fa-bookmark" />
          <font-awesome-icon class="text-2xl" icon="fa-solid fa-ellipsis" />
        </div>
      </div>
    </div>
    <div class="overflow-x-hidden h-[calc(100dvh-112px)]">
      <slot></slot>
    </div>
  </div>
</template>