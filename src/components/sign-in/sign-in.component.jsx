import React, { useState } from 'react';
import { signInWithGoogle } from '../../firebase/firebase.utils';
import CustomButton from '../common/custom-button/custom-button.component';
import FormInput from '../common/form-input/form-input.component';
import './sign-in.styles.scss';
const SignIn = () => {
	const [userDetail, setUserDetail] = useState({ email: '', password: '' });
	const handleChange = (e) => {
		const { name, value } = e.target;
		setUserDetail({ [name]: value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		setUserDetail({ email: '', password: '' });
	};
	return (
		<div className="sign-in">
			<h2>I already have an account</h2>
			<span> Sign in with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					name="email"
					type="email"
					value={userDetail.email}
					onChange={handleChange}
					label="Email"
					required
				/>

				<FormInput
					name="password"
					type="password"
					value={userDetail.password}
					label="Password"
					onChange={handleChange}
					required
				/>

				<div className="sign-in__buttons">
					<CustomButton type="submit">Sign In</CustomButton>
					<CustomButton type="submit" onClick={signInWithGoogle} isGoogleSignIn>
						Sign In with Google
					</CustomButton>
				</div>
			</form>
		</div>
	);
};

export default SignIn;
