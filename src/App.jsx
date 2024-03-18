/* eslint-disable react/prop-types */
import { FiCheckSquare } from "react-icons/fi";
import { PiStarFill } from "react-icons/pi";
import { FaArrowRight } from "react-icons/fa";
import "./App.css";
import { IconContext } from "react-icons";
import { useEffect, useState } from "react";

function NavLink({ title, address }) {
	return <a href={address}>{title}</a>;
}
function Button({ title, className, icon }) {
	return (
		<button className={className}>
			{title}
			{icon}
		</button>
	);
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
								width: "1rem",
								height: "1rem",
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
					<img src='/Assets/users.svg' alt='Happy Users' />
				</div>
				<div className='review'>
					<h4>200k+ Happy Users</h4>
					<p>
						<span className='icon'>
							<IconContext.Provider
								value={{
									style: {
										color: "rgba(255, 193, 33, 1)",
										fontSize: "1rem",
									},
								}}>
								<PiStarFill />
							</IconContext.Provider>
						</span>
						4.8 (10.6k Reviews)
					</p>
				</div>
			</div>
			<Button
				title='Get Started'
				className='start-btn'
				icon={
					<span>
						<FaArrowRight />
					</span>
				}
			/>
			<div className='globe'>
				<img src='/Assets/globe_users.svg' alt='user network' />
			</div>
			<div className='support'>
				<img src='/Assets/1_transistor.svg' alt='Transistor' />
				<img src='/Assets/2_tuple.svg' alt='Tuple' />
				<img src='/Assets/3_savvyCal.svg' alt='SavvyCal' />
				<img src='/Assets/4_statamic.svg' alt='Statamic' />
				<img src='/Assets/5_reform.svg' alt='Reform' />
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

function Modal({ children }) {
	return <>{children}</>;
}

export default function App() {
	const [isReady, setIsReady] = useState(false);

	useEffect(function () {
		if (window.innerWidth >= 600) {
			setIsReady(true);
			return;
		}
		setTimeout(() => {
			setIsReady(true);
		}, 5000);
	}, []);
	return (
		<>
			{isReady ? (
				<>
					<div className='top-bar'></div>
					<Header />
					<Main />
				</>
			) : (
				<Modal>
					<p
						style={{
							fontSize: "1rem",
							margin: "30px 10px",
							color: "rgb(245, 134, 52)",
						}}>
						<b>Note: </b>This page is not yet responsive, so do turn
						on your <em style={{ opacity: ".6" }}>Desktop Mode</em>{" "}
						from your android&apos;s browser.
					</p>
				</Modal>
			)}
		</>
	);
}
