
import { MdErrorOutline } from "react-icons/md";
import { MdCheckCircleOutline } from "react-icons/md";
import { ISnackBar } from "../../models/models";

export default function SnackBar({ isOpen, message, error }: ISnackBar) {
	if (isOpen) {
		return (
			<div className={`rounded-md shadow-xl absolute top-10 right-10 px-12 py-2 ${error ? `bg-red-600` : `bg-green-500`}`}>
				<div className="flex flex-row items-center space-x-2">
					{error ? <MdErrorOutline size={25} className="text-white mt-1" /> : <MdCheckCircleOutline size={25} className="text-white mt-1" />}
					<p className="text-white text-lg ">{message}</p>
				</div>
			</div>
		);
	}
}