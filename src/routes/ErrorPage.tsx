import { AiFillExclamationCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
;
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate("/login")
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="flex items-center space-x-1">
        <p className="text-9xl">4</p>
        <AiFillExclamationCircle size={100} className="text-red-700" />
        <p className="text-9xl">4</p>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-5xl font-semibold rota">Ops!</p>
        <p className="text-2xl mt-4">Página selecionada nao existe</p>
        <button className="bg-black rounded-full py-5 px-8 text-white mt-10 hover:bg-zinc-900" onClick={handleClick}>
          Voltar para o Login
        </button>
      </div>
    </div>
  )
}