import { useContext } from "react";
import { ModalContext } from "../../context/modalContext";
import { IChildrenProps } from "../../models/models";
import ReactDOM from "react-dom";

export default function ModalBase({ children }: IChildrenProps) {

	const { isOpenModal } = useContext(ModalContext);

	if (!isOpenModal) return null;

	return ReactDOM.createPortal(
		<div className="fixed top-0 left-0 flex items-center justify-center w-full min-h-screen bg-gray-600 bg-opacity-60 z-30">
			<div className="bg-white rounded-lg px-20 py-10">
				{children}
			</div>
		</div>,
		document.getElementById("modals")!
	);
};