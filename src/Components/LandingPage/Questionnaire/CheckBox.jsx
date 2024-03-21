/* eslint-disable react/prop-types */
export default function Checkbox({ size, className, value, onChange, name }) {
	return (
		<div className='checkbox'>
			<input
				className={className}
				type='radio'
				name={name}
				value={value}
				onChange={onChange}
				style={{ width: size + "px", height: size + "px" }}
			/>
		</div>
	);
}
