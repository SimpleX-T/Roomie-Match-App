/* eslint-disable react/prop-types */

import "./App.css";
import LandingPage from "./Components/LandingPage/LandingPage";
import Signup from "./Components/Signup/SignupPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<LandingPage />} />
					<Route
						path='/src/Components/Signup/SignupPage.jsx'
						element={<Signup />}
					/>
				</Routes>
			</BrowserRouter>
			{/* <LandingPage /> */}
		</>
	);
}
