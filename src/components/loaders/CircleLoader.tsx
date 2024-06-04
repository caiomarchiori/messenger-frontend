import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function CircleLoader() {
	return (
		<div className="flex flex-col items-center justify-center mt-20 space-y-2">
			<AiOutlineLoading3Quarters className="text-gray-300 text-opacity-30 animate-spin" size={60} />
			<p className="text-2xl text-white italic font-semibold">Carregando...</p>
		</div>
	)
}