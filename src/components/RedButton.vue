<template>
  <button class="button"><slot></slot></button>
</template>

<script setup></script>

<style scoped lang="less">
.button {
  border: 1px solid @red;
  color: @red;
}
.button:hover {
  background: @red;
  color: #fff;
}
</style>