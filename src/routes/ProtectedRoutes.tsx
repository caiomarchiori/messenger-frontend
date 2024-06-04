import { Navigate, Outlet} from "react-router-dom";
import { useAuth } from "../customHooks/useAuth";
import Header from "../components/header/Header";

export default function ProtectedRoute() {
	const { token } = useAuth();
	if (!token) {
	  return <Navigate to="/login" />;
	}
	return (
		<>
			<Header/>
			<Outlet />
		</>
	);
};