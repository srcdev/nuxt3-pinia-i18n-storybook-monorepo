<template>
  <div class="page-wrapper">
    <nx3-header></nx3-header>
    <div class="content-wrapper">
      <slot name="layout-content"></slot>
    </div>
    <nx3-footer></nx3-footer>
  </div>
</template>

<script setup lang="ts">
// import Footer from "@packages/footer/Footer.vue"; // Shared Footer direct import
// import Footer from "@/components/functional/footer/Footer.vue"; // Local Footer via normal import
// import Header from "@/components/functional/header/Header.vue";
</script>

<style lang="scss">
@import "@shared/styles/imports.scss";

.page {
  &-wrapper {
    background-color: white;
  }
}

.content {
  &-wrapper {
    padding: 12px;
  }
}
</style>
