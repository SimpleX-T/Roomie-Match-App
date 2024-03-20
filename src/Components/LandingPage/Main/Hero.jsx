import { IconContext } from "react-icons";
import { PiStarFill } from "react-icons/pi";
import {
	FaArrowRight,
	// FaFacebook,
	// FaGithub,
	// FaInstagram,
} from "react-icons/fa";
import { FiCheckSquare } from "react-icons/fi";
import Button from "../../Button";

export default function Hero() {
	return (
		<div className='hero'>
			<div className='free-test'>
				<div className='icon'>
					<IconContext.Provider
						value={{
							style: {
								color: "#fff",
								width: "1rem",
								height: "1rem",
							},
						}}>
						<FiCheckSquare />
					</IconContext.Provider>
				</div>
				<p>Take a free test to find your match</p>
			</div>
			<h1 className='hero-title'>
				Find your amazing perfect
				<span className='color'> Room mate</span> today!
			</h1>
			<p className='hero-desc'>
				Easy Simple Method to find your dream room mate to get the best
				campus experience.
			</p>
			<div className='happy-users'>
				<div className='users'>
					<img src='/Assets/users.svg' alt='Happy Users' />
				</div>
				<div className='review'>
					<h4>200k+ Happy Users</h4>
					<p>
						<span className='icon'>
							<IconContext.Provider
								value={{
									style: {
										color: "rgba(255, 193, 33, 1)",
										fontSize: "1rem",
									},
								}}>
								<PiStarFill />
							</IconContext.Provider>
						</span>
						4.8 (10.6k Reviews)
					</p>
				</div>
			</div>

			<Button
				title='Get Started'
				className='start-btn'
				icon={
					<span>
						<FaArrowRight />
					</span>
				}
			/>
			<div className='globe'>
				<img src='/Assets/globe_users.svg' alt='user network' />
			</div>
		</div>
	);
}
