/* eslint-disable react/prop-types */
export default function Card({ icon, title, message }) {
	return (
		<div className='card'>
			<div className='icon'>
				<img src={icon} alt={title} />
			</div>
			<h4 className='card-title'>{title}</h4>
			<p className='desc'>{message}</p>
		</div>
	);
}
