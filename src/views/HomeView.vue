<template>
  <h1>Мои заметки</h1>
  <div class="dashboard">
    <Form
      :Schema="Schema"
      @submit-form="onSubmit"
      class="dashboard-form shadow"
    >
      <div class="dashboard-form-item">
        <span class="title">Заголовок</span>
        <Field name="Title" id="Title" class="input" type="text"></Field>
        <ErrorMessage name="Title" class="error" />
      </div>
      <div class="dashboard-form-item">
        <span class="title">Текст</span>
        <Field name="Text" id="Text" type="text" v-slot="{ field }">
          <textarea class="input textarea" v-bind="field"></textarea>
        </Field>
        <ErrorMessage name="Text" class="error" />
      </div>
      <BlueButton class="dashboard-form-button">Добавить</BlueButton>
    </Form>
    <div class="dashboard-box" v-if="task.length > 0">
      <transition-group name="fade">
        <div
          class="dashboard-box-item shadow"
          v-for="item in task"
          :key="item.id"
        >
          <h3>{{ item.Title }}</h3>
          <p>{{ item.Text }}</p>
          <div class="buttons">
            <BlueButton @click="router.push('/detail/' + item.id)"
              >Открыть</BlueButton
            >
            <RedButton @click="deleteItem(item.id)">Удалить</RedButton>
          </div>
        </div></transition-group
      >
    </div>
    <div class="dashboard-empty" v-else>
      <h2>Пока что заметок нет...</h2>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import * as yup from "yup";
import Form from "@/components/Form.vue";
import { Field, ErrorMessage } from "vee-validate";
import BlueButton from "@/components/BlueButton.vue";
import { computed, ref } from "vue";
import RedButton from "@/components/RedButton.vue";
import { getStorage } from "@/composables/useParse";

let task = ref("task");
let router = useRouter();
let onSubmit = (data) => {
  let tasks = JSON.parse(localStorage.getItem("task")) ?? [];
  tasks.push(data);
  localStorage.setItem("task", JSON.stringify(tasks));
  task.value = getStorage();
};

task.value = getStorage();

let Schema = computed(() => {
  return yup.object({
    Title: yup.string().required(() => "Это обязательное поле"),
    Text: yup.string().required(() => "Это обязательное поле"),
  });
});
let deleteItem = (id) => {
  let tasks = JSON.parse(localStorage.getItem("task")) ?? [];

  localStorage.setItem(
    "task",
    JSON.stringify(tasks.filter((p) => p.id.toString() !== id.toString()))
  );
  task.value = getStorage();
};
</script>
<style lang="less">
h1 {
  margin: 1em 0 10px;
  font-size: 3em;
  @media @md {
    font-size: 2em;
  }
}
.dashboard {
  display: flex;
  justify-content: space-between;
  @media @md {
    flex-direction: column;
  }
  &-empty {
    width: 65%;
    display: flex;
    align-items: center;
    justify-content: center;
    h2 {
      font-size: 2em;
      text-align: center;
      @media @md {
        font-size: 1.5em;
      }
    }
    @media @md {
      width: 100%;
      margin-top: 2em;
    }
  }
  &-box {
    display: flex;
    flex-wrap: wrap;
    margin-top: -15px;
    margin-left: -15px;
    width: 65%;
    @media @md {
      width: 100%;
      margin-top: 1em;
    }
    @media @xs {
      margin-left: 0;
    }
    &-item {
      .br(10px);
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      text-decoration: none;
      margin-top: 15px;
      margin-left: 15px;
      height: 250px;
      padding: 15px;
      width: calc(100% / 3 - 15px);
      @media @lg {
        width: calc(100% / 2 - 15px);
      }
      @media @md {
        width: calc(100% / 3 - 15px);
      }
      @media @sm {
        width: calc(100% / 2 - 15px);
      }
      @media @xs {
        width: calc(100%);
        margin-left: 0;
      }
      h2 {
      }
      p {
        max-height: 100px;
        overflow: hidden;
        .text-eclipse(3);
        word-break: break-word;
      }
      .buttons {
        margin-top: 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 10px;
        .button {
          width: 100%;
        }
      }
    }
  }

  &-form {
    width: 30%;
    display: flex;
    flex-direction: column;
    color: @black;
    background: #fff;
    overflow: hidden;
    padding: 15px;
    height: fit-content;
    .br(10px);
    @media @md {
      width: 100%;
    }
    .title {
      font-size: 1.5em;
      margin-bottom: 10px;
      display: block;
    }
    &-item {
      margin-top: 10px;
    }
    &-item:first-child {
      margin-top: 0;
    }
    &-button {
      margin-top: 10px;
    }
  }
}
</style>
