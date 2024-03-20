/* eslint-disable react/prop-types */
export default function Button({ title, className, icon, onClick }) {
	return (
		<button className={className} onClick={onClick}>
			{title}
			{icon}
		</button>
	);
}
