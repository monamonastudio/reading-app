<template>
  <div class="h-[100dvh] w-screen bg-gradient-to-b from-black via-slate-950 to-black text-[#fcfcfc] overflow-hidden">
    <div class="max-w-[1000px] mx-auto relative">
      <NuxtLoadingIndicator :height="3" :throttle="0" />
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </div>
</template>

<style>
.layout-enter-active,
.layout-leave-active {
  transition: all 0.4s;
}
.layout-enter-from,
.layout-leave-to {
  filter: grayscale(1);
}
</style>