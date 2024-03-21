import { Link } from "react-router-dom";
import Button from "../../Button";
import Logo from "./Logo/Logo";
import NavBar from "./NavBar";

export default function Header() {
	return (
		<header>
			<Logo />
			<NavBar />
			<div className='login-buttons'>
				<Link to='/login'>
					<Button title='Login' className='login-btn' />
				</Link>
				<a href='/#test'>
					<Button title='Take a test' className='test-btn' />
				</a>
			</div>
		</header>
	);
}
