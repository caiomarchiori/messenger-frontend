import * as yup from 'yup';

const loginSchema = yup.object({
  login: yup.string().required("Login é obrigatório"),
  senha: yup.string().required("Senha é obrigatória"),
});

export default loginSchema;