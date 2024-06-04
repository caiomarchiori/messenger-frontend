import { IInputCustomProps } from "../../models/models"

export default function InputMessage({ placeholder, register, name, error, helperText}: IInputCustomProps) {
  return (
   <>
    <div className="flex flex-col space-y-1">
      <input
        className="outline-none bg-white rounded-full py-2 px-8"
        type="text"
        placeholder={placeholder} 
        {...register(name)}
      />
      {error ? <p className="ml-2 text-xs text-red-700">{helperText}</p> : ""}
    </div>
   </>
  );
}