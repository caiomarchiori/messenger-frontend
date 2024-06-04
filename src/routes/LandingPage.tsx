
import { useNavigate } from "react-router-dom";
import CustomButton from "../components/buttons/CustomButton";
import Logo from "../../public/assets/cefet .png"

export default function LandingPage() {

	const navigate = useNavigate();

	const handleClick = () => {
		navigate("/login")
	}

	return (
		<>
			<div>
				<div className="fixed top-0 left-0 flex flex-col justify-between min-h-screen">
					<img src={Logo} alt="cefet=image" className="w-44"/>
					<p className="mb-3 ml-2 font-semibold text-lg hover:-translate-y-1 duration-200">Developed by Caio Marchiori and Pedro Pizzi</p>
				</div>
				<div className="hover:scale-110 duration-300 animate-pulse">
					<CustomButton type="button" label="Acessar a aplicacao" onClick={handleClick}/>
				</div>
			</div>
		</>
	)
}