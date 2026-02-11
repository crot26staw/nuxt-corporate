<script lang="ts" setup>
const props = withDefaults(defineProps<{ is?: string }>(), {
  is: 'NuxtLink',
});
</script>

<template>
  <component :is="props.is" class="button">
    <slot />
  </component>
</template>

<style lang="scss">
.button {
  padding: 19px 24px;

  color: $black;

  background: $white;
  border: none;
  cursor: pointer;

  transition: all 0.3s;

  @include interactive-caps-14;

  &:hover {
    background: $light-blue;
  }
}
</style>
