import Section from "../Section";
import FooterCard from "./FooterCard";
import { IconContext } from "react-icons";
import { FaXTwitter, FaYoutube } from "react-icons/fa6";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";

export default function Footer() {
	return (
		<Section>
			<div className='footer'>
				<div className='container'>
					<div className='cards'>
						<FooterCard
							title='Solutions'
							contents={[
								"Marketing",
								"Analytics",
								"Commerce",
								"Insights",
							]}
						/>
						<FooterCard
							title='Support'
							contents={["Documentation", "Guides", "API Status"]}
						/>
						<FooterCard
							title='Company'
							contents={[
								"About",
								"Blog",
								"Jobs",
								"Press",
								"Partner",
							]}
						/>
						<FooterCard
							title='Legal'
							contents={["Claims", "Privacy", "Terms"]}
						/>
					</div>
					<form>
						<div className='text'>
							<h2>Subscribe to our newsletter</h2>
							<p>
								The latest news, article and resources sent to
								your inbox weekly.
							</p>
						</div>
						<input type='text' placeholder='Enter Your Email' />
						<button type='submit'>Subscribe</button>
					</form>
				</div>
				<footer>
					<p>
						&copy; {new Date().getFullYear()} Your Company, Inc. All
						rights reserved.
					</p>
					<div className='socials'>
						<IconContext.Provider
							value={{
								style: {
									color: "#fff",
									width: "1.5rem",
									height: "1.5rem",
									cursor: "pointer",
								},
							}}>
							<FaFacebook />
							<FaInstagram />
							<FaXTwitter />
							<FaGithub />
							<FaInstagram />
							<FaYoutube />
						</IconContext.Provider>
					</div>
				</footer>
			</div>
		</Section>
	);
}
