<template>
  <div
    class="flex-group"
    :class="[
      'flex-group',
      `flow-${flexFlow}`,
      { 'inline-flex': flexType === 'inline-flex' },
      { 'full-width': fullWidth },
    ]"
    :align-content="alignContent"
  >
    <slot name="flexGroup"></slot>
  </div>
</template>

<script setup lang="ts">
const {} = defineProps({
  flexType: {
    type: String,
    default: "flex",
    validator: (val: string) => ["flex", "inline-flex"].includes(val),
  },
  flexFlow: {
    type: String,
    default: "row",
    validator: (val: string) =>
      ["column", "column-reverse", "row", "row-reverse"].includes(val),
  },
  alignContent: {
    type: String,
    default: "top-left",
    validator: (val: string) =>
      [
        "top-center",
        "center-center",
        "bottom-center",
        "top-left",
        "center-left",
        "bottom-left",
        "top-right",
        "center-right",
        "bottom-right",
        "top-space-around",
        "center-space-around",
        "bottom-space-around",
        "top-space-between",
        "center-space-between",
        "bottom-space-between",
      ].includes(val),
  },
  gap: {
    type: String,
    default: "0",
  },
  fullWidth: {
    type: Boolean,
    default: true,
  },
});
</script>

<style lang="scss">
@import "@styles/imports.scss";

.flex-group {
  border: 0px solid green;
  * {
    border: 0px solid green;
  }
  // @include minWidth($tabletSmall) {
  display: flex;
  // flex-flow: row;
  gap: v-bind(gap);
  overflow: hidden;

  min-height: 200px;
  margin-bottom: 20px;

  &.full-width {
    width: 100%;
  }

  &.inline-flex {
    display: inline-flex;
  }

  &.flow {
    &-column {
      flex-flow: column;
    }
    &-column-reverse {
      flex-flow: column-reverse;
    }
    &-row {
      flex-flow: row;
    }
    &-row-reverse {
      flex-flow: row-reverse;
    }
  }
}
</style>
