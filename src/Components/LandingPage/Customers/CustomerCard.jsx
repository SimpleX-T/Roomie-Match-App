/* eslint-disable react/prop-types */
export default function CustomerCard({ name, image, job, testimonial }) {
	return (
		<div className='card'>
			<img src={image} alt={name} />
			<q className='testimonial'>{testimonial}</q>
			<div className='user'>
				<h4 className='name'>{name}</h4>
				<p className='job'>{job}</p>
			</div>
		</div>
	);
}
