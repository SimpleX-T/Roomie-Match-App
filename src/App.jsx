/* eslint-disable react/prop-types */

import "./App.css";
import LandingPage from "./Components/LandingPage/LandingPage";
import SignUp from "./Components/SignIn/SignupPage";
import SignIn from "./Components/SignIn/SignInPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<LandingPage />} />
					<Route path='/login' element={<SignUp />} />
					<Route path='/signup' element={<SignUp />} />
					<Route path='/login' element={<SignIn />} />
				</Routes>
			</BrowserRouter>
			{/* <LandingPage /> */}
		</>
	);
}
