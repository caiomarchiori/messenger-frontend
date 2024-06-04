import { AxiosError } from "axios";
import { useState } from "react";
import api from "../axios/axios";
import { ISnackBar } from "../models/models";


export default function useDelete() {

	const [isLoading, setIsloading] = useState(false);

	const [error, setError] = useState<AxiosError>();

	const [snackBar, setSnackBar] = useState<ISnackBar>()

	const deleteData = async (url: string) => {

		try {
			setIsloading(true);
			const response = await api.delete(url);
			setSnackBar(
				{
					message: "Deletado com sucesso!!",
					isOpen: true,
					error: false
				}
			)
			return response
		}
		catch (errors: any) {
			setIsloading(false);
			setError(errors);
			setSnackBar(
				{
					message: "Nao foi possível deletar!!",
					isOpen: true,
					error: true
				}
			)
		}
		finally {
			setIsloading(false);
			setTimeout(() => {
				setSnackBar(
					{
						isOpen: false
					}
				)
			}, 2000)
		}
	}

	return { isLoading, error, snackBar, deleteData }
}