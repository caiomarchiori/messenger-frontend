
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import loginSchema from "../validations/loginSchema";
import InputCustom from "../components/inputs/InputCustom";
import CustomButton from "../components/buttons/CustomButton";
import OptionButton from "../components/buttons/optionButton";
import SnackBar from "../components/snackBar/snackBar";
import { useNavigate } from "react-router-dom";
import CircleLoader from "../components/loaders/CircleLoader";
import useDelete from "../customHooks/useDelete";
import { ModalContext } from "../context/modalContext";
import { useState } from "react";
import ModalConfirmation from "../components/modals/modalConfirmation";

export default function UserDelete() {

	const navigate = useNavigate();

	const [isOpenModal, setIsOpenModal] = useState(false);

	const { deleteData, snackBar } = useDelete();

	const {
		register,
		handleSubmit,
		reset,
		getValues,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(loginSchema),
	})

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

	const handleConfirmation = async () => {

		const formData = getValues();

		const response = await deleteData(`/user/delete?login=${formData.login}&senha=${formData.senha}`);

		{
			response?.status === 200 ? (handleCloseModal(), setTimeout(() => { navigate("/login") }, 2000)) : ""
		}

		handleCloseModal();

		reset();
	};

	return (
		<>
			<ModalContext.Provider
				value={{
					isOpenModal : isOpenModal,
					handleCloseModal: handleCloseModal,
					handleConfirmation: handleConfirmation,
					title: "Deletar usuário?"
				}}
			>
				<ModalConfirmation/>
			</ModalContext.Provider>

			{
				snackBar?.error === false ? (
					<CircleLoader />
				) : (
					<div>
						<form className="flex flex-col justify-center items-center space-y-16" onSubmit={handleSubmit(handleOpenModal)}>
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
							<CustomButton label="Deletar" type="submit" />
						</form>
						<div className="flex flex-col items-center mt-20 space-y-2">
							<OptionButton label="Voltar ao login" path="/login" type="button" />
						</div>
					</div>
				)
			}
			<SnackBar {...snackBar} />
		</>
	)
}