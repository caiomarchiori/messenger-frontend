
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import newPasswordSchema from "../validations/newPassoword";
import { IFormNewPassword } from "../models/models";
import InputCustom from "../components/inputs/InputCustom";
import CustomButton from "../components/buttons/CustomButton";
import OptionButton from "../components/buttons/optionButton";
import { useNavigate } from "react-router-dom";
import CircleLoader from "../components/loaders/CircleLoader";
import SnackBar from "../components/snackBar/snackBar";
import useUpdate from "../customHooks/useUpdate";


export default function NewPassword() {

  const { updateData, snackBar } = useUpdate();
  const navigate = useNavigate();

  const onSubmit = async (values: IFormNewPassword) => {
    const response = await updateData(`/user/update`, values);
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
    resolver: yupResolver(newPasswordSchema),
  })

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
                placeholder="Senha antiga"
                register={register}
                name="senha"
                error
                helperText={errors.senha?.message}
              />
              <InputCustom
                placeholder="Nova senha"
                register={register}
                name="novaSenha"
                error
                helperText={errors.novaSenha?.message}
              />
              <CustomButton label="Restaurar senha" type="submit" />
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