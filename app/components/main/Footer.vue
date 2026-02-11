<script lang="ts" setup>
const { data } = useFooter();
</script>

<template>
  <footer class="footer">
    <div v-if="data" class="footer__head">
      <div class="footer__item">
        <ul v-if="data.menu.column1" class="footer__menu">
          <li
            v-for="(item, idx) in data.menu.column1"
            :key="idx"
            class="footer__menu-item">
            <UiMenuLink :data="item" />
          </li>
        </ul>
      </div>
      <div class="footer__item">
        <ul v-if="data.menu.column2" class="footer__menu">
          <li
            v-for="(item, idx) in data.menu.column2"
            :key="idx"
            class="footer__menu-item">
            <UiMenuLink :data="item" />
          </li>
        </ul>
      </div>
      <div class="footer__item">
        <ul class="footer__item-lists">
          <li class="footer__item-li">
            <NuxtImg class="footer__item-icon" src="/icons/footer-phone.svg" />
            <p>{{ data.phone }}</p>
          </li>
          <li class="footer__item-li">
            <NuxtImg class="footer__item-icon" src="/icons/footer-email.svg" />
            <p>{{ data.email }}</p>
          </li>
          <li class="footer__item-li">
            <NuxtImg class="footer__item-icon" src="/icons/footer-mark.svg" />
            <p>{{ data.address }}</p>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
.footer {
  background: $black;

  &__head {
    display: flex;
    max-width: 1860px;
    margin: 0 auto;

    border-bottom: 1px solid $white-alpha-10;
  }

  &__item {
    width: 100%;
    padding: 60px;

    border-left: 1px solid $white-alpha-10;

    &:first-child {
      border: none;
    }
  }

  &__menu-item {
    width: fit-content;
  }

  &__item-lists {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  &__item-li {
    display: flex;
    gap: 8px;
    align-items: center;

    p {
      @include text-16;

      color: $white;
    }
  }

  &__item-icon {
    width: 24px;
    height: 24px;
  }
}
</style>
