<script lang="ts" setup>
withDefaults(
  defineProps<{
    title?: string;
    subtitle?: string;
    color?: string;
    tag?: 'h1' | 'h2' | 'h3';
  }>(),
  {
    color: '#101010',
    tag: 'h2',
  },
);
</script>

<template>
  <div class="titles">
    <p class="titles__subtitle" :style="{ color: color }">
      <span class="titles__mark" :style="{ background: color }" />
      {{ subtitle }}
    </p>
    <component :is="tag" class="titles__title" :style="{ color: color }">
      {{ title }}
    </component>
  </div>
</template>

<style lang="scss">
.titles {
  display: flex;
  gap: 20px;
  margin-bottom: 40px;

  &__subtitle {
    display: flex;
    gap: 4px;
    align-items: center;
    width: 100%;
    max-width: 425px;

    @include interactive-caps-14;
  }

  &__mark {
    display: block;
    width: 6px;
    height: 6px;
  }

  &__title {
    @include headline-h3;

    max-width: 870px;
  }
}
</style>
