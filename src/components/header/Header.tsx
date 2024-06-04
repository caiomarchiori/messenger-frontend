import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useNavigate, useParams } from "react-router-dom";
import { AiTwotoneCalendar } from "react-icons/ai";
import { AiOutlineLogout } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { useAuth } from "../../customHooks/useAuth";
import useUpdate from "../../customHooks/useUpdate";

export default function Header() {

  const {setToken} = useAuth();
  const {id,login} = useParams();
  
  const {updateData} = useUpdate();

  /*TODO END POINT RETURN USER LOGIN BY ID*/

  const formattedDate = format(new Date(), "EEE, dd/MM/yyyy", { locale: ptBR });

  const navigate = useNavigate();

  const handleLogOut = async () => {
    const response = await updateData(
      `/user/status`,
      {
        id: id,
        isOnline: false
      }
    )
    {
      response?.status == 200 ? (setToken(), navigate("/login")) : ""
    }
  }

  const spanStyle = "text-white text-lg italic font-semibold";

  return (
    <>
      <div className="h-36 flex items-center justify-between bg-gradient-to-r from-blue-500 to-blue-700 w-full fixed top-0 shadow-md hover:shadow-lg duration-500">
        <div className="flex items-center space-x-3 ml-5">
          <AiTwotoneCalendar size={30}/>
          <span className={spanStyle}>{formattedDate}</span>
        </div>
        <div className="flex items-center space-x-2">
          <AiOutlineUser size={40} className="text-green-400"/>
          <span className={spanStyle}>{login}</span>
        </div>
        <div className="flex items-center space-x-3 mr-5">
          <button className="hover:scale-110 duration-200 flex flex-row space-x-2" onClick={handleLogOut}>
            <AiOutlineLogout size={30} className="text-red-700"/>
            <span className={spanStyle}>Sair</span>
          </button>
        </div>
      </div>
    </>
  );
}