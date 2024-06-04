
import { ISelectProps, IUser } from "../../models/models";

export function Select({ register, options, name, onSelectChange }: ISelectProps) {

	const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const selectedIndex = (event.target.selectedIndex - 1);
		const selectedId = options[selectedIndex].id;
		onSelectChange(selectedId);
	};

	return (
		<select
			{...register(name)}
			className="rounded-full py-2 px-3 outline-none"
			onChange={handleSelectChange}
		>
			<option value="" disabled selected>Selecione sua opcao</option>
			{options.map((object: IUser) => (
				<option value={object.login} key={object.id}>
					{object.login}
				</option>
			))}
		</select>
	)
}