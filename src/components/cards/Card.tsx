import { ICardProps } from "../../models/models";



export default function Card({children, className}:ICardProps){
    return(
        <div className={`bg-white rounded-xl shadow-lg  ${className}`}>
            {children}
        </div>
    );
}