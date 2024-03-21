import { useState } from "react";
import Button from "../../Button";
import Question from "./Question";
import Modal from "../../Modal";
import { FaArrowRight } from "react-icons/fa";

export default function Questionnaire() {
	const [submitted, setSubmitted] = useState(false);
	const [questions, setQuestions] = useState([]);

	function handleSetSubmitted() {
		questions.length >= 5
			? setSubmitted(true)
			: alert("Please pick an option from each questions");
	}

	function handleSetQuestions(id) {
		setQuestions((question) =>
			question?.includes(id) ? question : [...question, id]
		);
		console.log(questions);
	}

	return (
		<section className='questionnaire' id='test'>
			{!submitted ? (
				<>
					<h1>Take a free test</h1>
					<div className='question-box'>
						<Question
							onAnswer={handleSetQuestions}
							title='You regularly make new friends.'
							name='friends'
							id={1}
						/>
						<Question
							onAnswer={handleSetQuestions}
							title='You usually stay calm, even under a lot of pressure'
							name='pressure'
							id={2}
						/>
						<Question
							onAnswer={handleSetQuestions}
							title='Your workplace and living zone are usually clean and organized'
							name='work'
							id={3}
						/>
						<Question
							onAnswer={handleSetQuestions}
							title='Seeing people sad can easily make you feel sad too'
							name='sad'
							id={4}
						/>
						<Question
							onAnswer={handleSetQuestions}
							title='You easily network and promote yourself easily in public'
							name='public'
							id={5}
						/>
					</div>
				</>
			) : (
				<Modal>
					<h1>Your answer has been submitted</h1>
				</Modal>
			)}
			<Button
				title='Next'
				className='submit-question'
				icon={
					<span>
						<FaArrowRight />
					</span>
				}
				onClick={handleSetSubmitted}
			/>
		</section>
	);
}
