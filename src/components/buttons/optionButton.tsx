import { useNavigate } from "react-router-dom";
import { IButtonOption } from "../../models/models";

export default function OptionButton({label,path}:IButtonOption){
    const navigate = useNavigate();
    return(
        <button className="underline text-blue-800 font-semibold cursor-pointer hover:scale-105 duration-75" onClick={()=>navigate(path)}>
            {label}
        </button>
    )
}