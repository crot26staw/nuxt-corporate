<template>
  <div class="main-hero">
    <div class="main-hero__bg">
      <NuxtImg src="/images/main-hero.jpg" class="main-hero__image" />
    </div>
  </div>
</template>

<style lang="scss">
.main-hero {
  position: relative;
  z-index: 1;

  width: 100%;
  height: auto;
  aspect-ratio: 1920/1080;

  &__bg {
    position: absolute;

    width: 100%;
    height: 100%;

    &::before {
      position: absolute;

      width: 100%;
      height: 100%;

      background: rgb(0 0 0 / 60%);

      content: '';
    }
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
