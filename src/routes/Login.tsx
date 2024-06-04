
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import loginSchema from "../validations/loginSchema";
import { IFormLogin } from "../models/models";
import InputCustom from "../components/inputs/InputCustom";
import CustomButton from "../components/buttons/CustomButton";
import OptionButton from "../components/buttons/optionButton";
import SnackBar from "../components/snackBar/snackBar";
import { useNavigate } from "react-router-dom";
import useCreate from "../customHooks/useCreate";
import { useAuth } from "../customHooks/useAuth";
import CircleLoader from "../components/loaders/CircleLoader";

export default function Login() {

  const { setToken } = useAuth();

  const navigate = useNavigate();

  const { createData, snackBar } = useCreate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  })

  const onSubmit = async (values: IFormLogin) => {

    const response = await createData(`/user/login`, values);
    
    {
      response?.status === 200 ? (setToken(response?.data.token), setTimeout(() => { navigate(`/${response?.data.id}/${response?.data.login}`) }, 2000)) : ""
    }

    reset();
  };

  return (
    <>
      {
        snackBar?.error === false ? (
          <CircleLoader />
        ) : (
          <div>
            <form className="flex flex-col justify-center items-center space-y-16" onSubmit={handleSubmit(onSubmit)}>
              <InputCustom
                placeholder="Login"
                register={register}
                name="login"
                error
                helperText={errors.login?.message}
              />
              <InputCustom
                placeholder="Senha"
                register={register}
                name="senha"
                error
                helperText={errors.senha?.message}
              />
              <CustomButton label="Entrar" type="submit" />
            </form>
            <div className="flex flex-col items-center mt-20 space-y-2">
              <OptionButton label="Novo login" path="/new-login" type="button" />
              <OptionButton label="Trocar minha senha" path="/new-password" type="button" />
              <OptionButton label="Deletar usuário" path="/delete-user" type="button" />
            </div>
          </div>
        )
      }
      <SnackBar {...snackBar} />
    </>
  )
}