import CustomerCard from "./CustomerCard";

export default function CustomerCardContainer() {
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
