<template>
  <button class="button"><slot></slot></button>
</template>

<script setup></script>

<style scoped lang="less">
.button {
  border: 1px solid @blue;
  color: @blue;
}
.button:hover {
  background: @blue;
  color: #fff;
}
</style>
