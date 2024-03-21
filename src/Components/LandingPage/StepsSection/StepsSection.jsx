import Section from "../Section";

export default function StepsSection() {
	return (
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
									Browse through our database to find the best
									potential roommate for a smooth and hassle
									free lifestyle.
								</p>
							</li>
							<li>
								<h4>Chat and connect easily</h4>
								<p>
									Connect and network wth potential roommate
									to get started. use the chat system to
									explore and relate with users.
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
	);
}
