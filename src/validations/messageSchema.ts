import * as yup from 'yup';

const messageSchema = yup.object({
	conteudo: yup.string().required("Mensagem nao pode ser vazia"),
  destinatarioId: yup.string().required("Campo obrigatório"),
  // emissorId: yup.string()
});

export default messageSchema;