import Styles from "./Logo.module.css";

export default function Logo() {
	return (
		<div className={Styles.logo}>
			<div className={Styles.img}>
				<img src='/Assets/logo.png' alt='Romiee Match Logo' />
			</div>
			<h3>Romiee Match</h3>
		</div>
	);
}
