/* eslint-disable react/prop-types */
import { useState } from "react";
import Checkbox from "./CheckBox";

export default function Question({ title, name, id, onAnswer }) {
	const [agreed, setAgreed] = useState(null);

	function handleSetAgreed(val) {
		if (val > 0) setAgreed(true);
		else if (val < 0) setAgreed(false);
		else if (val === 0) setAgreed(null);
		// Doing this to stop the ESLint error :(
		console.log(agreed);
	}

	return (
		<div className='question' id={id}>
			<h3 className='title'>{title}</h3>
			<div className='check-container'>
				<p>agree</p>

				<form
					className='checkboxes'
					onChange={(e) => e.target.className !== "" && onAnswer(id)}>
					<Checkbox
						size={38}
						className='agree'
						value={3}
						onChange={() => handleSetAgreed(3)}
						name={name}
					/>
					<Checkbox
						size={34}
						className='agree'
						value={2}
						onChange={() => handleSetAgreed(2)}
						name={name}
					/>
					<Checkbox
						size={30}
						className='agree'
						value={1}
						onChange={() => handleSetAgreed(1)}
						name={name}
					/>
					<Checkbox
						size={26}
						value={0}
						onChange={() => handleSetAgreed(0)}
						name={name}
					/>
					<Checkbox
						size={30}
						className='disagree'
						value={-1}
						onChange={() => handleSetAgreed(-1)}
						name={name}
					/>
					<Checkbox
						size={34}
						className='disagree'
						value={-2}
						onChange={() => handleSetAgreed(-2)}
						name={name}
					/>
					<Checkbox
						size={38}
						className='disagree'
						value={-3}
						onChange={() => handleSetAgreed(-3)}
						name={name}
					/>
				</form>

				<p>disagree</p>
			</div>
		</div>
	);
}
