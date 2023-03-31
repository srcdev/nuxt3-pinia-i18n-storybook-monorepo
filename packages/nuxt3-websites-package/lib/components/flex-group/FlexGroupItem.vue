<template>
  <div
    class="flex-group-item"
    :class="[{ grow: flexGrow }]"
    :align-content="`${alignItems}-${justifyItems}`"
    :placement="`${placementX}-${placementY}`"
  >
    <slot name="flexItem"></slot>
  </div>
</template>

<script setup lang="ts">
const {} = defineProps({
  flexGrow: {
    type: Boolean,
    default: false,
  },
  alignItems: {
    type: String,
    default: "top",
    validator: (val: string) => ["center", "top", "bottom"].includes(val),
  },
  justifyItems: {
    type: String,
    default: "left",
    validator: (val: string) =>
      ["center", "left", "right", "space-around", "space-between"].includes(
        val
      ),
  },
  placementX: {
    type: String,
    default: "top",
    validator: (val: string) => ["center", "top", "bottom"].includes(val),
  },
  placementY: {
    type: String,
    default: "left",
    validator: (val: string) => ["center", "left", "right"].includes(val),
  },
});
</script>

<style scoped lang="scss">
@import "@styles/imports.scss";

.flex-group-item {
  border: 1px solid $black;
  &.grow {
    flex-grow: 1;
  }
}
</style>
