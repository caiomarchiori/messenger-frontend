
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import newLoginSchema from "../validations/newLoginSchema";
import { IFormNewLogin } from "../models/models";
import InputCustom from "../components/inputs/InputCustom";
import CustomButton from "../components/buttons/CustomButton";
import { useNavigate } from "react-router-dom";
import OptionButton from "../components/buttons/optionButton";
import useCreate from "../customHooks/useCreate";
import SnackBar from "../components/snackBar/snackBar";
import CircleLoader from "../components/loaders/CircleLoader";


export default function NewLogin() {

  const navigate = useNavigate();

  const { createData, snackBar } = useCreate();

  const onSubmit = async (values: IFormNewLogin) => {
    const response = await createData(`/user/register`, values);
    response?.status === 200 ?
      (
        setTimeout(() => { navigate("/login") }, 2000)
      ) : ""
    reset();
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(newLoginSchema),
  });


  return (
    <>
      {
        snackBar?.error === false ? (
          <CircleLoader />
        ) : (
          <div>
            <form className="flex flex-col justify-center items-center space-y-20" onSubmit={handleSubmit(onSubmit)}>
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
              <InputCustom
                placeholder="Confirme a senha"
                register={register}
                name="confirmarSenha"
                error
                helperText={errors.confirmarSenha?.message}
              />
              <CustomButton label="Cadastrar" type="submit" />
            </form>
            <div className="flex justify-center mt-12">
              <OptionButton label="Voltar ao Login" path="/login" type="button" />
            </div>
          </div>
        )
      }
      <SnackBar {...snackBar} />
    </>
  )
}