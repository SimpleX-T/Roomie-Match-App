/* eslint-disable react/prop-types */
export default function FooterCard({ title, contents }) {
	return (
		<div className='card'>
			<h2>{title}</h2>
			{contents.map((content, i) => (
				<a href='' key={i}>
					{content}
				</a>
			))}
		</div>
	);
}
