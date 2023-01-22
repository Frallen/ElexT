<template>
  <Form :validation-schema="Schema" class="form" @submit="onSubmit">
    <slot></slot
  ></Form>
</template>

<script setup>
import { Form } from "vee-validate";
let props = defineProps({
  Schema: {
    type: Object,
    required: true,
  },
});
let emit = defineEmits(["submitForm"]);
let onSubmit = (data, { resetForm }) => {
  data.id = Math.random();
  emit("submitForm", data);
  resetForm();
};
</script>

<style scoped lang="less"></style>
