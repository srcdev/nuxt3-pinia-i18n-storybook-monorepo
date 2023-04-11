<template>
  <div>
    <h1>{{ t("header.text") }}</h1>
  </div>
</template>

<script setup lang="ts">
// import { useI18n } from "vue-i18n";
// const { t } = useI18n();

import locales from "./locales/index";
import setI18n from "@shared/composables/setI18n";
const { t } = setI18n(locales);
</script>
