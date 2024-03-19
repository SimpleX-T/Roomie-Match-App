/* eslint-disable react/prop-types */
import { FiCheckSquare } from "react-icons/fi";
import { PiStarFill } from "react-icons/pi";
import {
	FaArrowRight,
	FaFacebook,
	FaGithub,
	FaInstagram,
} from "react-icons/fa";
import { FaXTwitter, FaYoutube } from "react-icons/fa6";
import "./App.css";
import { IconContext } from "react-icons";
import { useEffect, useState } from "react";

function NavLink({ title, address }) {
	return <a href={address}>{title}</a>;
}
function Button({ title, className, icon }) {
	return (
		<button className={className}>
			{title}
			{icon}
		</button>
	);
}

function NavBar() {
	return (
		<nav>
			<NavLink title='Home' address='#' />
			<NavLink title='Product' address='#' />
			<NavLink title='Contact' address='#' />
			<NavLink title='About' address='#' />
		</nav>
	);
}

function Logo() {
	return (
		<div className='logo'>
			<div className='img'>
				<img src='/Assets/logo.png' alt='Romiee Match Logo' />
			</div>
			<h3>Romiee Match</h3>
		</div>
	);
}

function Header() {
	return (
		<header>
			<Logo />
			<NavBar />
			<div className='login-buttons'>
				<Button title='Login' className='login-btn' />
				<Button title='Take a test' className='test-btn' />
			</div>
		</header>
	);
}

function Hero() {
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
				<span className='color'>Room mate</span> today!
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

function Main() {
	return (
		<main>
			<Hero />
		</main>
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

function Modal({ children }) {
	return <>{children}</>;
}

function Checkbox({ size }) {
	return (
		<div className='checkbox'>
			<input
				type='checkbox'
				style={{ width: size + "px", height: size + "px" }}
			/>
		</div>
	);
}

function Question({ title }) {
	return (
		<div className='question'>
			<h3 className='title'>{title}</h3>
			<div className='check-container'>
				<p>agree</p>
				<div className='checkboxes'>
					<Checkbox size={64} />
					<Checkbox className='large' />
					<Checkbox className='medium' />
					<Checkbox className='small' />
					<Checkbox className='medium' />
					<Checkbox className='large' />
					<Checkbox className='larger' />
				</div>
				<p>disagree</p>
			</div>
		</div>
	);
}

function Questionnaire() {
	return (
		<section className='questionnaire'>
			<div className='question-box'>
				<Question title='You regularly make new friends.' />
				<Question title='You usually stay calm, even under a lot of pressure' />
				<Question title='Your workplace and living zone are usually clean and organized' />
			</div>
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
						<div className='play_thumbnail'></div>
					</div>
				</div>
			</Section>

			{/* <Questionnaire /> */}
		</>
	);
}
