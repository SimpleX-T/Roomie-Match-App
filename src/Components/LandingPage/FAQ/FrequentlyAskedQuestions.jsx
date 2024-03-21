import { useState } from "react";
import Faq from "./Faq";

export default function FrequentlyAskedQuestions() {
	const questionsArr = [
		{
			id: 1,
			question: "Can Rommie match help me find the perfect roommate?",
			answer: "Yes, Rommie Match can definitely assist you in finding the perfect roommate. Our platform provides advanced search filters and matching algorithms tailored to your preferences, ensuring compatibility and satisfaction.",
			open: false,
		},
		{
			id: 2,
			question: "Does it cost anything to sign up at Rommie match?",
			answer: "No, signing up at Rommie Match is completely free. You can create an account, browse listings, and connect with potential roommates at no cost. We believe in making the roommate search process accessible to everyone.",
			open: false,
		},
		{
			id: 3,
			question: "How long does it take for room mate listing to be live?",
			answer: "Your roommate listing typically goes live within 24 hours. Once you create a listing, our team reviews it to ensure it meets our guidelines and standards. Once approved, it will be visible to other users on our platform.",
			open: false,
		},
		{
			id: 4,
			question:
				"Can I find a room mate to team up with me to find a place?",
			answer: "Absolutely! Rommie Match allows you to find a roommate who shares your goal of finding a place together. You can connect with like-minded individuals and collaborate on the search process, making it easier and more enjoyable.",
			open: false,
		},
		{
			id: 5,
			question: "How do I know if the people on this site are real?",
			answer: "Ensuring the authenticity of our users is a top priority at Rommie Match. We have strict verification procedures in place to confirm the identity of every user. This includes email verification, phone verification, and optional social media verification.",
			open: false,
		},
		{
			id: 6,
			question:
				"What happens to my information when I no longer need to find a roommate?",
			answer: "Your privacy and security are important to us. When you no longer need to find a roommate, you can delete your account and all associated information from our platform. Rest assured that we handle your information with care and respect your privacy.",
			open: false,
		},
	];

	const [questions, setQuestions] = useState(questionsArr);

	function handleSetQuestions(id) {
		setQuestions((questions) =>
			questions.map((question) => {
				return question.id === id
					? { ...question, open: !question.open }
					: { ...question, open: false };
			})
		);
	}

	return (
		<div className='faqs'>
			<h2>Frequently asked questions</h2>
			<div className='container'>
				{questions.map((question) => (
					<Faq
						onClick={handleSetQuestions}
						question={question.question}
						answer={question.answer}
						key={question.id}
						id={question.id}
						open={question.open}
					/>
				))}
			</div>
		</div>
	);
}
