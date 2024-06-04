import { ICustomButton } from "../../models/models";
import { IoSend } from "react-icons/io5";

export default function ButtonMessage({ type }: ICustomButton) {
	return (
		<button type={type} className="rounded-full bg-green-500 py-3 px-3 hover:scale-105 duration-150 hover:text-white">
			<IoSend size={18} />
		</button>
	);
}