/* eslint-disable react/prop-types */
import "./App.css";

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
				<img src='/Assets/fav.png' alt='Romiee Match Logo' />
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

export default function App() {
	return (
		<>
			<div className='top-bar'></div>
			<Header />
			<main></main>
		</>
	);
}
