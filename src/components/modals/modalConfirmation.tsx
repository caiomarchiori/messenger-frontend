import { useContext } from "react";
import ModalBase from "./modalBase";
import { ModalContext } from "../../context/modalContext";

export default function ModalConfirmation() {

	const { handleConfirmation, handleCloseModal, title } = useContext(ModalContext);

	return (
		<>
			<ModalBase>
				<div className="flex flex-col space-y-8 items-center">
					<h1 className="text-5xl font-semibold font-mono">{title}</h1>
					<div className="flex flex-row space-x-5">
						<button className="bg-red-600 rounded-md px-5 py-2 text-white text-lg hover:bg-red-700 duration-200 font-mono" onClick={handleCloseModal} type="button">Cancelar</button>
						<button className="bg-blue-500 rounded-md px-5 py-2 text-white text-lg hover:bg-blue-600 duration-200 font-mono" onClick={handleConfirmation} type="submit">Confirmar</button>
					</div>
				</div>
			</ModalBase>
		</>
	)
}