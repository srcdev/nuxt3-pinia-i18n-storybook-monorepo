<template>
  <div>
    <nx3-flex-group>
      <template #flexGroup>
        <nx3-flex-group-item :flex-grow="true">
          <template #flexItem>
            <h1>Item 1</h1>
          </template>
        </nx3-flex-group-item>
        <nx3-flex-group-item :flex-grow="true">
          <template #flexItem>
            <h1>Item 2</h1>
          </template>
        </nx3-flex-group-item>
      </template>
    </nx3-flex-group>
  </div>
</template>
