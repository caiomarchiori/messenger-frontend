import * as yup from 'yup';

const newLoginSchema = yup.object({
  login: yup.string().required("Login é obrigatório"),
  senha: yup.string().required("Senha é obrigatória"),
  confirmarSenha: yup.string().required("Confirmacao de senha é obrigatória").oneOf([yup.ref('senha')],"As senhas devem ser iguais")
});

export default newLoginSchema;