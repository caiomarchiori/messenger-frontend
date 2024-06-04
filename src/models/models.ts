import { ReactNode } from "react";

/*DATA TYPES*/
export interface IFormLogin {
	login: string;
	senha: string;
}

export interface IFormNewLogin {
	login: string;
	senha: string;
	confirmarSenha: string;
}

export interface IFormNewPassword {
	login: string;
	senha: string;
	novaSenha: string;
}

export interface IMessage {
	conteudo: string;
	emissorId?: string;
	destinatarioId: string;
}

export interface IReceviedMessage {
	emissorId: string;
	destinatarioId?: string;
	destinatarioLogin: string
	dataEnvio: Date;
	conteudo: string;
	emissorLogin: string;
}


/*COMPONENTS PROPS*/
export interface ICustomButton {
	label?: string;
	type: "submit" | "button";
	onClick?: () => void;
}

export interface IButtonCard extends ICustomButton { };

export interface IButtonOption extends ICustomButton {
	path: string;
}

export interface IChildrenProps {
	children: ReactNode
}

export interface IUser {
	id: string;
	login: string;
}

export interface ISelectProps {
	register: any;
	options: IUser[];
	name: string;
	onSelectChange: (selectedId: string) => void;
}

export interface ICardProps extends IChildrenProps {
	className?: string;
}

export interface IInputCustomProps {
	placeholder: string;
	register: any;
	name: string;
	error?: boolean;
	helperText?: string;
}

export interface ISnackBar {
	isOpen?: boolean;
	message?: string;
	error?: boolean
}

export interface ICardMessage {
	dataEnvio: Date;
	conteudo: string;
	emissorLogin: string;
	className?: string
}