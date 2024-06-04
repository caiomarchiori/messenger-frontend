import * as yup from 'yup';

const newPasswordSchema = yup.object({
  login: yup.string().required("Login é obrigatório"),
  senha: yup.string().required("Senha é obrigatória"),
  novaSenha: yup.string().required("Nova senha é obrigatória")
});

export default newPasswordSchema;