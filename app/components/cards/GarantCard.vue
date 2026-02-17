<script lang="ts" setup>
defineProps<{
  title: string;
  num: number;
}>();
</script>

<template>
  <div class="garant-card">
    <span class="garant-card__num">0{{ num }}</span>
    <p class="garant-card__title">{{ title }}</p>
  </div>
</template>

<style lang="scss">
.garant-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;

  border: 1px solid $black-alpha-10;

  &__num {
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    padding: 9px 8px;

    color: $white;

    background-color: $dark-blue;

    @include interactive-caps-16;
  }

  &__title {
    @include text-16;

    color: $black-alpha-80;
  }
}
</style>
