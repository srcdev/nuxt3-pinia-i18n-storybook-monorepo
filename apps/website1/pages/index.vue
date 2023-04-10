<template>
  <div>
    <NuxtLayout name="default">
      <template #layout-content>
        <h2>Home</h2>
        <p>Test Flex Grid component</p>

        <nx3-flex-group>
          <template #flexGroup>
            <nx3-flex-group-item>
              <template #flexItem>
                <h1>Flex Item 1</h1>
              </template>
            </nx3-flex-group-item>
            <nx3-flex-group-item>
              <template #flexItem>
                <h1>Flex Item 1</h1>
              </template>
            </nx3-flex-group-item>
          </template>
        </nx3-flex-group>

        <nx3-flex-group align-content="center-right">
          <template #flexGroup>
            <nx3-flex-group-item>
              <template #flexItem>
                <h1>Flex Item 1</h1>
              </template>
            </nx3-flex-group-item>
            <nx3-flex-group-item>
              <template #flexItem>
                <h1>Flex Item 1</h1>
              </template>
            </nx3-flex-group-item>
          </template>
        </nx3-flex-group>

        <nx3-flex-group align-self="center-right" :full-width="false" flex-type="inline-flex">
          <template #flexGroup>
            <nx3-flex-group-item>
              <template #flexItem>
                <h1>Flex Item 1</h1>
              </template>
            </nx3-flex-group-item>
            <nx3-flex-group-item>
              <template #flexItem>
                <h1>Flex Item 1</h1>
              </template>
            </nx3-flex-group-item>
          </template>
        </nx3-flex-group>

        <nx3-flex-group align-content="bottom-right">
          <template #flexGroup>
            <nx3-flex-group-item>
              <template #flexItem>
                <h1>Flex Item 1</h1>
              </template>
            </nx3-flex-group-item>
            <nx3-flex-group-item :flex-grow="true">
              <template #flexItem>
                <h1>Flex Item 1</h1>
              </template>
            </nx3-flex-group-item>
          </template>
        </nx3-flex-group>

        <nx3-flex-group align-content="center-center">
          <template #flexGroup>
            <nx3-flex-group-item>
              <template #flexItem>
                <h1>Flex Item 1</h1>
              </template>
            </nx3-flex-group-item>
            <nx3-flex-group-item>
              <template #flexItem>
                <h1>Flex Item 1</h1>
                <p>Content 1</p>
                <p>Content 2</p>
                <p>Content 3</p>
              </template>
            </nx3-flex-group-item>
          </template>
        </nx3-flex-group>

        <ul>
          <li>
            <NuxtLink to="/companies/123abcqwer0987/details">Company ID:123abcqwer0987</NuxtLink>
          </li>
        </ul>

        <p>
          String: <em>"{{ rootStore.someString }}"</em> from <strong><code>rootStore.someString</code></strong>
        </p>
      </template>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { useRootStore } from "@/stores/store.root";
import { useI18n } from "vue-i18n";
import CommonServices from "@/services/services.common";

definePageMeta({
  layout: false,
});

useHead({
  title: "Home page",
  meta: [{ name: "description", content: "Desciption meta tag content" }],
  bodyAttrs: {
    class: "class-to-apply-if-desired",
  },
});

const { t } = useI18n();
const rootStore = useRootStore();

// simple request to test axios
await CommonServices.samplePost("testing");
</script>

<style lang="scss">
// @import "@styles/imports.scss';
</style>
