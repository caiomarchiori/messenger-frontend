import { ICustomButton } from "../../models/models";


export default function CustomButton({ label, type, onClick }: ICustomButton) {
  return (
    <button
      className={`text-white text-lg bg-blue-700 rounded-full px-16 py-4 hover:bg-blue-800 duration-300`}
      type={type}
      onClick={onClick}
    >
      {label}
    </button>
  )
}