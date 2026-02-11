<script lang="ts" setup>
defineProps<{
  data: {
    title: string;
    description: string;
    image: string;
  };
}>();
</script>

<template>
  <div class="main-hero">
    <div class="main-hero__bg">
      <NuxtImg :src="data.image" class="main-hero__image" />
    </div>
    <div class="container main-hero__container">
      <div class="main-hero__titles">
        <h1 class="main-hero__title">{{ data.title }}</h1>
        <div class="main-hero__wrapper">
          <p class="main-hero__subtitle">{{ data.description }}</p>
          <UiButton :is="'button'" class="main-hero__btn">
            Заказать звонок
          </UiButton>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.main-hero {
  position: relative;
  z-index: 1;

  width: 100%;
  height: auto;
  padding-bottom: 40px;
  aspect-ratio: 1920/1080;

  &__bg {
    position: absolute;
    z-index: 1;

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

  &__container {
    position: relative;
    z-index: 5;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 100%;
    height: 100%;
  }

  &__titles {
    display: flex;
    gap: 20px;
  }

  &__title {
    @include headline-h1;

    max-width: 1018px;

    color: $white;
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &__subtitle {
    @include text-20;

    color: $white;
  }

  &__btn {
    width: fit-content;
  }
}
</style>
