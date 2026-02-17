<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import type { Swiper as SwiperType } from 'swiper';
import { FreeMode } from 'swiper/modules';

interface Partners {
  title: string;
  subtitle: string;
  partnerItems: { image: string }[];
}

defineProps<{
  data: Partners;
}>();

const swiperRef = ref<SwiperType>();
const setSwiper = (swiper: SwiperType) => {
  swiperRef.value = swiper;
};
</script>

<template>
  <div class="partners">
    <div class="container">
      <Titles :title="data.title" :subtitle="data.subtitle" />
    </div>
    <div class="partners__container">
      <Swiper
        :modules="[FreeMode]"
        :slides-per-view="'auto'"
        :centered-slides-bounds="true"
        :centered-slides="true"
        :free-mode="true"
        @swiper="setSwiper">
        <swiper-slide
          v-for="(item, idx) in data.partnerItems"
          :key="idx"
          class="partners__slide">
          <CardsPartnerCard :image="item.image" />
        </swiper-slide>
      </Swiper>
    </div>
  </div>
</template>

<style lang="scss">
.partners {
  &__container {
    width: 100%;
  }

  &__slide {
    width: 312px;

    cursor: grab;
  }
}
</style>
