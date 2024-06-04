import { useForm } from "react-hook-form";
import { IMessage, IUser } from "../../models/models";
import InputMessage from "../inputs/inputMessage";
import ButtonMessage from "../buttons/buttonMessage";
import { Select } from "../selects/select";
import messageSchema from "../../validations/messageSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import api from "../../axios/axios";
import { useParams } from "react-router-dom";
import useCreate from "../../customHooks/useCreate";


export default function MessageForm() {

  const [options, setOptions] = useState<IUser[]>([]);
  const [selecteUserdId, setSelectedUserId] = useState("");
  
  const {createData} = useCreate();

  const {id} = useParams();
  
	const {
		register,
		handleSubmit,
    reset,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(messageSchema),
	})

  const onSubmit = async (values: IMessage) => {

     await createData(
      `/mensagens`,
      {
        conteudo: values.conteudo,
        emissorId: id,
        destinatarioId: selecteUserdId
      }
     )
     reset();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(`/user/online`);
        setOptions(response.data);
      }
      catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-row bg-slate-200 bg-opacity-80 pt-3 rounded-lg relative">
      <div className="flex items-center space-x-5 mb-2 ml-1">
        <InputMessage
          placeholder="Digite sua mensagem"
          register={register}
          name="conteudo"
          error
          helperText={errors.conteudo?.message}
        />
        <Select 
          register={register}
          options={options}
          name="destinatarioId"
          onSelectChange={(selectedId) => setSelectedUserId(selectedId)}
        />
        <div className="absolute right-3">
          <ButtonMessage type="submit"/>
        </div>
      </div>
    </form>
  );
}
