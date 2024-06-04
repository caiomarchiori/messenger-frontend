
import { format } from "date-fns";
import { ICardMessage } from "../../models/models";

export default function MessageCard({dataEnvio, conteudo, emissorLogin, className }: ICardMessage) {

	const formatDate = format(dataEnvio, "dd/MM/yyyy HH:mm");

	return (
		<>
			<p className="text-sm font-semibold ml-5">{emissorLogin}</p>
			<div className={` ${className} + rounded-full py-5 px-12 relative font-semibold`}>
				<p>{conteudo}</p>
				<p className="text-xs absolute right-5 bottom-1 italic">{formatDate}</p>
			</div>
		</>
	);
}