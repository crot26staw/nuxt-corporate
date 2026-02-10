<script lang="ts" setup>
const { menu, pending } = useHeaderMenu();
</script>

<template>
  <div class="header">
    <div class="container">
      <div class="header__wrapper">
        <NuxtLink to="/" class="header__logo">
          <NuxtImg src="/images/logo.svg" class="header__logo-img" />
        </NuxtLink>
        <ul v-if="menu && !pending" class="header__menu">
          <li v-for="(item, idx) in menu" :key="idx" class="header__menu-item">
            <UiMenuLink :data="item" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.header {
  position: absolute;
  left: 0;
  z-index: 100;

  width: 100%;

  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;

    border-bottom: 1px solid $white-alpha-10;
  }

  &__logo {
    display: block;

    line-height: 0;
  }

  &__logo-img {
    width: 90px;
  }

  &__menu {
    display: flex;
    gap: 40px;
  }
}
</style>
