import {reactive} from "vue";
import type { FormRules } from "element-plus";

const RulesForm = reactive<FormRules>({
    email: [
        { required: true, message: 'Пожалуйста, введите почту', trigger: 'blur' },
    ],
    password: [
        { required: true, message: 'Пожалуйста, введите пароль', trigger: 'blur' },
    ],
});

export default RulesForm;