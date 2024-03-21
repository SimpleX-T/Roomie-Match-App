import Card from "./Card";

export default function CardContainer() {
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
