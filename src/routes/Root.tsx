
import { Outlet } from "react-router-dom";

export default function Root() {
	return (
		<div className="bg-gradient-to-r from-blue-300 to-blue-600 min-h-screen flex justify-center items-center">
			<Outlet />
		</div>
	)
}