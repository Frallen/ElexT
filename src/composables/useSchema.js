import {computed} from "vue";
import * as yup from "yup";

export const DefaultSchema = computed(() => {
    return yup.object({
        Title: yup.string().required(() => "Это обязательное поле"),
        Text: yup.string().required(() => "Это обязательное поле"),
    });
});