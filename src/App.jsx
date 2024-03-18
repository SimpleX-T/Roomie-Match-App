/* eslint-disable react/prop-types */
import { FiCheckSquare } from "react-icons/fi";
import { PiStarFill } from "react-icons/pi";
import "./App.css";
import { IconContext } from "react-icons";

function NavLink({ title, address }) {
	return <a href={address}>{title}</a>;
}
function Button({ title, className }) {
	return <button className={className}>{title}</button>;
}

function NavBar() {
	return (
		<nav>
			<NavLink title='Home' address='#' />
			<NavLink title='Product' address='#' />
			<NavLink title='Contact' address='#' />
			<NavLink title='About' address='#' />
		</nav>
	);
}

function Logo() {
	return (
		<div className='logo'>
			<div className='img'>
				<img src='/Assets/logo.png' alt='Romiee Match Logo' />
			</div>
			<h3>Romiee Match</h3>
		</div>
	);
}

function Header() {
	return (
		<header>
			<Logo />
			<NavBar />
			<div className='login-buttons'>
				<Button title='Login' className='login-btn' />
				<Button title='Take a test' className='test-btn' />
			</div>
		</header>
	);
}

function Hero() {
	return (
		<div className='hero'>
			<div className='free-test'>
				<div className='icon'>
					<IconContext.Provider
						value={{
							style: {
								color: "#fff",
								width: "1.25rem",
								height: "1.25rem",
							},
						}}>
						<FiCheckSquare />
					</IconContext.Provider>
				</div>
				<p>Take a free test to find your match</p>
			</div>
			<h1 className='hero-title'>
				Find your amazing perfect{" "}
				<span className='color'>Room mate</span> today!
			</h1>
			<p className='hero-desc'>
				Easy Simple Method to find your dream room mate to get the best
				campus experience.
			</p>
			<div className='happy-users'>
				<div className='users'>
					<img src='/Assets/users.png' alt='Happy Users' />
				</div>
				<div className='review'>
					<h4>200k+ Happy Users</h4>
					<p>
						<span className='icon'>
							<IconContext.Provider
								value={{
									style: {
										color: "rgba(255, 193, 33, 1)",
										fontSize: "2rem",
									},
								}}>
								<PiStarFill />
							</IconContext.Provider>
						</span>{" "}
						4.8 (10.6k Reviews)
					</p>
				</div>
			</div>
		</div>
	);
}

function Main() {
	return (
		<main>
			<Hero />
		</main>
	);
}

export default function App() {
	return (
		<>
			<div className='top-bar'></div>
			<Header />
			<Main />
		</>
	);
}
