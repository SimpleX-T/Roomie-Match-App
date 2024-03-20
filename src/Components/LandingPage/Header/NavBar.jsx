import NavLink from "./NavLink";

export default function NavBar() {
	return (
		<nav>
			<NavLink title='Home' address='#' />
			<NavLink title='Product' address='#' />
			<NavLink title='Contact' address='#' />
			<NavLink title='About' address='#' />
		</nav>
	);
}
