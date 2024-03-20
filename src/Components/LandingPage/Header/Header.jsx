import Button from "../../Button";
import Logo from "./Logo";
import NavBar from "./NavBar";

export default function Header() {
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
