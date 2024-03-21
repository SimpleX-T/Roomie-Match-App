/* eslint-disable react/prop-types */
import Questionnaire from "./Questionnaire/Questionnaire";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Section from "./Section";
import CardContainer from "./Services/CardContainer";
import FrequentlyAskedQuestions from "./FAQ/FrequentlyAskedQuestions";

function CustomerCard({ name, image, job, testimonial }) {
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

function CustomerCardContainer() {
	const customers = [
		{
			id: 1,
			image: "/Assets/Dorcas_profile.png",
			name: "Dorcas",
			job: "Project Manager",
			testimonial:
				"I was dreading the roommate search process until I discovered Rommie Match. Within days of signing up, I found a roommate who exceeded all my expectations. The platform's intuitive design and helpful resources guided me through every step, making it easy to navigate. I'm thrilled with my new living situation, and I owe it all to Rommie Match!",
		},
		{
			id: 2,
			image: "/Assets/olamide_profile.jfif",
			name: "Lucky Olamide",
			job: "Tech Founder",
			testimonial:
				"I can't thank Rommie Match enough for helping me find my ideal roommate. From the moment I signed up, I felt supported by their attentive customer service team. The quality of matches exceeded my expectations, and I quickly connected with someone who has become not just a roommate, but a friend. Thank you, Rommie Match!",
		},
		{
			id: 3,
			image: "/Assets/Mathew_profile.jfif",
			name: "Mathew",
			job: "Product Designer",
			testimonial:
				"Rommie Match made finding a roommate stress-free and enjoyable. The platform's extensive search filters allowed me to narrow down my options and connect with compatible roommates who share similar values and habits. I appreciated the safety measures in place, which gave me peace of mind throughout the process. I couldn't be happier with my experience!",
		},
		{
			id: 4,
			image: "/Assets/x.jpg",
			name: "X",
			job: "Frontend Developer",
			testimonial:
				"Rommie Match took the stress out of finding a roommate for me. With their user-friendly platform and helpful features, I was able to quickly connect with potential roommates who matched my preferences. The process was smooth from start to finish, and I'm now happily settled in with a great roommate. Thanks, Rommie Match, for simplifying the roommate search process!",
		},
		{
			id: 5,
			image: "/Assets/ayomide_profile.jfif",
			name: "Ayomide",
			job: "Backend developer",
			testimonial:
				"I was skeptical at first, but Rommie Match exceeded my expectations! Within hours of creating my listing, I received several messages from potential roommates. The process was smooth, and I'm now living with an amazing roommate. Thank you, Rommie Match!",
		},
	];

	return (
		<div className='cards'>
			{customers.map((customer) => (
				<CustomerCard
					key={customer.id}
					image={customer.image}
					name={customer.name}
					job={customer.job}
					testimonial={customer.testimonial}
				/>
			))}
		</div>
	);
}

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

export default function LandingPage() {
	return (
		<>
			{" "}
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
