<script lang="ts" setup>
defineProps<{
  image: string;
}>();
</script>

<template>
  <div class="partner-card">
    <NuxtImg :src="image" />
  </div>
</template>

<style lang="scss">
.partner-card {
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 10px;

  border: 1px solid $base-gray;

  img {
    width: 168px;
    height: 168px;
  }
}
</style>
