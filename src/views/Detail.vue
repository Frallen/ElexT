<template>
  <BreadCrumbs :Title="content.Title"></BreadCrumbs>
  <div class="detail">
    <div class="detail-content">
      <h2>{{ content.Title }}</h2>
      <p v-html="content.Text.split('\n').join('<br>')"></p>
    </div>
  </div>
</template>
<script setup>
import { useRoute } from "vue-router";
import { computed } from "vue";
import { getStorage } from "@/composables/useParse";
import BreadCrumbs from "@/components/breadCrumbs.vue";
let route = useRoute();
let content = computed(() => {
  return getStorage().find(
    (p) => p.id.toString() === route.params.id.toString()
  );
});
</script>
<style lang="less">
.detail {
  &-content {
    h2 {
      font-size: 3em;
      text-transform: uppercase;
      margin-bottom: 10px;
    }
    p {
      text-align: justify;
      font-size: 1em;
    }
  }
}
</style>
