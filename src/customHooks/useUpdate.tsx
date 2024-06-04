import { AxiosError } from "axios";
import { useState } from "react";
import api from "../axios/axios";
import { ISnackBar } from "../models/models";


export default function useUpdate() {

	const [isLoading, setIsloading] = useState(false);

	const [error, setError] = useState<AxiosError>();

	const [snackBar, setSnackBar] = useState<ISnackBar>()

	const updateData = async (url: string, data: any) => {

		try {
			setIsloading(true);
			const response = await api.put(url, data);
			setSnackBar(
				{
					message: "Sucesso!!" ,
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
					message: "Algo deu errado!!" ,
					isOpen: true,
					error: true
				}
			)
		}
		finally {
			setIsloading(false);
			setTimeout(()=>{
				setSnackBar(
					{
						isOpen: false
					}
				)
			},2000)
		}
	}
	return { isLoading, error, snackBar, updateData }
}