<script lang="ts" setup>
import GarantCard from '../cards/GarantCard.vue';

interface Garant {
  title: string;
  subtitle: string;
  garatnItems: { title: string }[];
}
defineProps<{
  data: Garant;
}>();
</script>

<template>
  <div class="garant">
    <div class="container">
      <Titles :title="data.title" :subtitle="data.subtitle" />
      <div class="garant__wrapper">
        <div class="garant__image">
          <NuxtImg src="/images/garant-1.jpg" />
        </div>
        <div class="garant__items">
          <GarantCard
            v-for="(item, idx) in data.garatnItems"
            :key="idx"
            :title="item.title"
            :num="idx + 1" />
          <div class="garant__item garant__item-img">
            <NuxtImg src="/images/garant-2.jpg" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.garant {
  &__wrapper {
    display: flex;
    gap: 20px;
  }

  &__image {
    flex-shrink: 0;
    width: 100%;
    max-width: 425px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__items {
    display: grid;
    gap: 20px;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
  }

  &__item-img {
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
