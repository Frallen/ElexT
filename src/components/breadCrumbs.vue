<template>
  <div class="breadcrumbs">
    <router-link to="/" class="breadcrumbs-base">Главная </router-link>
    <div
      v-for="(matched, idx) in route.matched"
      :key="idx"
      class="breadcrumbs-item"
    >
      /
        {{ Title }}

    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
let props = defineProps({
  Title: {
    type: String,
    required: true,
  },
});

let route = useRoute();
</script>

<style lang="less">
.breadcrumbs {
  display: flex;
  align-items: center;
  margin: 20px 0;
  &-base {
    text-decoration: none;
    color: @black;
    border-bottom: 1px solid @blue;
  }
  &-item {
    margin-left: 10px;
    text-transform: capitalize;
  }
}
</style>
