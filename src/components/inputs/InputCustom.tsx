import { useState } from "react";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { IInputCustomProps } from "../../models/models";

 
export default function InputCustom({ placeholder, register, name, helperText, error}: IInputCustomProps) {

  const[inputType, setInputType] = useState("text");

  const handleInputType = () => {
    setInputType( inputType === "text" ? "password" : "text");
  };

  return (
    <div className="relative">
      <input
        className="outline-none italic text-2xl bg-slate-200 rounded-full py-6 px-20"
        type={inputType}
        placeholder={placeholder}
        {...register(name)}
      />
      {error ? <p className="text-red-700 font-semibold mt-2 ml-8">{helperText}</p> : ""}
      <button onClick={handleInputType} className="absolute right-8 top-8" type="button">
        {inputType === "text" ? <AiOutlineEye size={25}/> : <AiOutlineEyeInvisible  size={25}/>}
      </button>
    </div>
  );
}
