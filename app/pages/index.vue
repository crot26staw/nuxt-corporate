<script lang="ts" setup>
const { loadPageBySlug } = usePage();
const { data } = loadPageBySlug('main-page');
</script>

<template>
  <div class="page">
    <RareMainPageHero v-if="data.hero" :data="data.hero" />
  </div>
</template>
