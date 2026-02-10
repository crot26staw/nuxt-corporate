<script lang="ts" setup>
interface MenuItem {
  name: string;
  link: string;
}
defineProps<{
  data: MenuItem;
}>();
</script>

<template>
  <NuxtLink class="menu-link" :to="data.link">{{ data.name }}</NuxtLink>
</template>

<style lang="scss">
.menu-link {
  @include interactive-caps-14;

  position: relative;

  display: block;
  padding: 12px 0;

  color: $white;

  &::before {
    position: absolute;
    bottom: 0;
    left: 0;

    width: 0;
    height: 2px;

    background: $white;

    transition: width 0.3s;

    content: '';
  }

  &:hover {
    &::before {
      width: 100%;
    }
  }
}
</style>
