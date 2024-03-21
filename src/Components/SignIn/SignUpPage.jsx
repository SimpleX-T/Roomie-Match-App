import { FiLoader } from "react-icons/fi";

export default function SignUp() {
	return (
		<>
			<div className='container'>
				<div className='bg'></div>
				<div className='form-container'>
					<div className='btn'>
						<p>Have an account?</p>
						<button className='signin'>Sign In</button>
					</div>
					<form>
						<label htmlFor='name'>Full Name</label>
						<input
							type='text'
							name='name'
							id='name'
							placeholder='John Doe'
						/>
						<label htmlFor='email'>Email</label>
						<input
							type='email'
							name='email'
							id='email'
							placeholder='djoe12@example.com'
						/>
						<label htmlFor='password'>Password</label>
						<input
							type='password'
							name='password'
							id='password'
							placeholder='*********'
						/>

						<FiLoader />
						<button type='submit'>Create Account</button>
					</form>
				</div>
			</div>
		</>
	);
}
