import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import Home from "./Home";
import Login from "./Login";
import ErrorPage from "./ErrorPage";
import NewPassword from "./NewPassword";
import NewLogin from "./NewLogin";
import UserDelete from "./UserDelete";
import LandingPage from "./LandingPage";

export default function Routes() {

	const router = createBrowserRouter([
		{
			path: "/",
			element: <Root />,
			errorElement: <ErrorPage />,
			children: [
				{
					path: "",
					element: <LandingPage/>
				},
				{
					path: ":id/:login",
					element: <Home />
				},
				{
					path: "login",
					element: <Login />
				},
				{
					path: "new-password",
					element: <NewPassword />
				},
				{
					path: "new-login",
					element: <NewLogin />
				},
				{
					path: "delete-user",
					element: <UserDelete />
				}
			]
		},
	]);

	return (
		<RouterProvider router={router} />
	);
};