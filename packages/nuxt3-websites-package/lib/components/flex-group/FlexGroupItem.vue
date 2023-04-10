<template>
  <div class="flex-group-item" :class="[{ grow: flexGrow }]">
    <slot name="flexItem"></slot>
  </div>
</template>

<script setup lang="ts">
const {} = defineProps({
  flexGrow: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped lang="scss">
@import "@styles/imports.scss";

.flex-group-item {
  &.grow {
    flex-grow: 1;
  }
}
</style>
