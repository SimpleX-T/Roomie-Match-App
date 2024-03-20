/* eslint-disable react/prop-types */
// import { FaXTwitter, FaYoutube } from "react-icons/fa6";
// import { useEffect, useState } from "react";

import { FaArrowRight } from "react-icons/fa";
import { FaPlus, FaMinus } from "react-icons/fa6";
import Header from "./Components/LandingPage/Header/Header";
import Main from "./Components/LandingPage/Main/Main";
import "./App.css";
import { useState } from "react";
import Button from "./Components/Button";

function Supports() {
	return (
		<div className='support'>
			<img src='/Assets/1_kevsway.svg' alt='KevsWay' />
			<img src='/Assets/2_flexy.svg' alt='Flexy' />
			<img src='/Assets/3_hopeaid.svg' alt='HopeAid' />
			<img src='/Assets/4_solveit.svg' alt='Solveit' />
			<img src='/Assets/5_behappy.svg' alt='BeHappy' />
		</div>
	);
}

function Modal({ children }) {
	return <>{children}</>;
}

// function Checkbox({ size, className, value }) {
// 	// const [agreeValue, setAgreeValue] = useState(0);
// 	return (
// 		<div className='checkbox'>
// 			<input
// 				className={className}
// 				type='radio'
// 				name='radio'
// 				// checked={agreeValue > 0 && "checked"}
// 				// onChange={setAgreeValue(value)}
// 				style={{ width: size + "px", height: size + "px" }}
// 			/>
// 		</div>
// 	);
// }

// function Question({ title }) {
// 	const [value, setValue] = useState(0);
// 	const [agreed, setAgreed] = useState(null);

// 	function handleSetValue(val) {
// 		setValue(val);
// 	}

// 	function handleSetAgreed() {
// 		setAgreed(value > 0 ? true : false);
// 	}

// 	return (
// 		<div className='question'>
// 			<h3 className='title'>{title}</h3>
// 			<div className='check-container'>
// 				<p className={agreed && "active"}>agree</p>

// 				<form onSubmit={handleSetAgreed} className='checkboxes'>
// 					<Checkbox size={38} className='agree' value={3} />
// 					<Checkbox size={34} className='agree' value={2} />
// 					<Checkbox size={30} className='agree' value={1} />
// 					<Checkbox size={26} value={0} />
// 					<Checkbox size={30} className='disagree' value={-1} />
// 					<Checkbox size={34} className='disagree' value={-2} />
// 					<Checkbox size={38} className='disagree' value={-3} />
// 				</form>

// 				<p className={agreed && "active"}>disagree</p>
// 			</div>
// 		</div>
// 	);
// }

// function Questionnaire() {
// 	return (
// 		<section className='questionnaire'>
// 			<h1>Take a free test</h1>
// 			<div className='question-box'>
// 				<Question title='You regularly make new friends.' />
// 				<Question title='You usually stay calm, even under a lot of pressure' />
// 				<Question title='Your workplace and living zone are usually clean and organized' />
// 				<Question title='Seeing people sad can easily make you feel sad too' />
// 				<Question title='You easily network and promote yourself easily in public' />
// 			</div>
// 		</section>
// 	);
// }

function Checkbox({ size, className, value, onChange, name }) {
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

function Question({ title, name, id, onAnswer }) {
	const [agreed, setAgreed] = useState(null);

	function handleSetAgreed(val) {
		if (val > 0) setAgreed(true);
		else if (val < 0) setAgreed(false);
		else if (val === 0) setAgreed(null);
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

function Questionnaire() {
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
		<section className='questionnaire'>
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

function Card({ icon, title, message }) {
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

function CardContainer() {
	return (
		<div className='card-container'>
			<Card
				icon='/Assets/chevron-right.svg'
				title='Matching Lifestyles'
				message='Find roommates that fits your 
preference and lifestyle
with personalized search results
curated by our matching algorithm'
			/>
			<Card
				icon='/Assets/carbon_time.svg'
				title='Time Saving'
				message='Connect with potential roommates that are relevant and have a mutual intent. Refine and filter out any that are not a good fit for you. '
			/>
			<Card
				icon='/Assets/warning-octagon.svg'
				title='Spam and Scam free'
				message='We keep the scammers out and allow real people to connect safely on our platform through A.I and human vetted profiles in our platform with secure in-app messaging'
			/>
			<Card
				icon='/Assets/carbon_security.svg'
				title='Secured User Information'
				message='We provide the best security on user information while using this platform. Users are rest assured to have their private information secured  from third party agents in our data base '
			/>
		</div>
	);
}

function Section({ children }) {
	return <>{children}</>;
}

export default function App() {
	return (
		<>
			<div className='top-bar'></div>
			<Header />
			<Main />
			<Supports />
			<Section>
				<section className='card-section'>
					<h2 className='title'>Our Services</h2>
					<CardContainer />
				</section>
			</Section>
			<Section>
				<div className='steps-section'>
					<div className='container'>
						<div className='steps'>
							<h1>Romiee match solution step for you</h1>
							<ul>
								<li>
									<h4>Take a free personality test</h4>
									<p>
										Use our A.I technology for personality
										testing to find the right match for you.
									</p>
								</li>
								<li>
									<h4>Browse to find the right match</h4>
									<p>
										Browse through our database to find the
										best potential roommate for a smooth and
										hassle free lifestyle.
									</p>
								</li>
								<li>
									<h4>Chat and connect easily</h4>
									<p>
										Connect and network wth potential
										roommate to get started. use the chat
										system to explore and relate with users.
									</p>
								</li>
							</ul>
						</div>
						<div className='img'>
							<div className='play_thumbnail'>
								<img src='/Assets/play_icon.svg' alt='Play' />
							</div>
						</div>
					</div>
				</div>
			</Section>
			<Questionnaire />
			<Section>
				<div className='faqs'>
					<h2>Frequently asked questions</h2>
					<div className='question-box'></div>
				</div>
			</Section>
		</>
	);
}
