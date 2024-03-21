/* eslint-disable react/prop-types */
import { FaPlus, FaMinus } from "react-icons/fa6";

export default function Faq({ question, answer, onClick, open, id }) {
	return (
		<div className='question-box'>
			<div className='question'>
				<h3 className='question'>{question}</h3>
				<button className='icon' onClick={() => onClick(id)}>
					{!open ? <FaPlus /> : <FaMinus />}
				</button>
			</div>
			<div className='answer'>{open && <p>{answer}</p>}</div>
		</div>
	);
}
