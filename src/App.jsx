/* eslint-disable react/prop-types */
import "./App.css";
import LandingPage from "./Components/LandingPage/LandingPage";
import SignUp from "./Components/SignIn/SignUpPage";
import SignIn from "./Components/SignIn/SignInPage";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/home' element={<LandingPage />} />
					<Route path='/' element={<LandingPage />} />
					<Route path='/login' element={<SignIn />} />
					<Route path='/new' element={<SignUp />} />
					<Route path='/login' element={<SignIn />} />
					<Route path='*' element={<ErrorPage />} />
				</Routes>
			</BrowserRouter>
			{/* <LandingPage /> */}
		</>
	);
}
