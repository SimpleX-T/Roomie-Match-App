/* eslint-disable react/prop-types */
import Section from "./Section";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Questionnaire from "./Questionnaire/Questionnaire";
import Supports from "./Supports/Supports";
import CardContainer from "./Services/CardContainer";
import StepsSection from "./StepsSection/StepsSection";
import FrequentlyAskedQuestions from "./FAQ/FrequentlyAskedQuestions";
import CustomerCardContainer from "./Customers/CustomerCardContainer";
import Footer from "./Footer/Footer";

export default function LandingPage() {
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
			<StepsSection />
			<Questionnaire />
			<FrequentlyAskedQuestions />
			<Section>
				<div className='customers'>
					<h1>Hear from our Customers</h1>
					<CustomerCardContainer />
				</div>
			</Section>
			<Footer />
		</>
	);
}
