<script lang="ts" setup>
const { loadPageBySlug } = usePage();
const { data } = loadPageBySlug('main-page');
</script>

<template>
  <div class="page">
    <RareMainPageHero v-if="data.hero" :data="data.hero" />
    <MainSection v-if="data.garant">
      <RareGarant :data="data.garant" />
    </MainSection>
    <MainSection v-if="data.partners">
      <Partners :data="data.partners" />
    </MainSection>
  </div>
</template>
