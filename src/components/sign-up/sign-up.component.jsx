import React, { useState } from 'react';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import CustomButton from '../common/custom-button/custom-button.component';
import FormInput from '../common/form-input/form-input.component';

import './sign-up.styles.scss';
const SignUp = () => {
	const [userDetail, setUserDetail] = useState({
		displayName: '',
		email: '',
		password: '',
		confirmPassword: '',
	});
	const { displayName, email, password, confirmPassword } = userDetail;
	const handleSubmit = async (e) => {
		e.preventDefault();

		if (password !== confirmPassword) {
			alert('Passwords do not match, try again!');
			return;
		}
		try {
			const { user } = await auth.createUserWithEmailAndPassword(email, password);
			await createUserProfileDocument(user, { displayName });
			setUserDetail({
				displayName: '',
				email: '',
				password: '',
				confirmPassword: '',
			});
		} catch (e) {
			console.warn('Error on SignUp: ', e);
		}
	};
	const handleChange = (e) => {
		const { name, value } = e.target;
		setUserDetail({ [name]: value });
	};

	return (
		<div className="sign-up">
			<h2 className="sign-up__title">I don not have an account</h2>
			<span>Sign up with your email and password</span>
			<form className="sign-up__form" onSubmit={handleSubmit}>
				<FormInput
					name="displayName"
					type="text"
					value={displayName}
					onChange={handleChange}
					label="Username"
					required
				/>
				<FormInput name="email" type="email" value={email} onChange={handleChange} label="Email" required />
				<FormInput
					name="password"
					type="password"
					value={password}
					onChange={handleChange}
					label="Password"
					required
				/>
				<FormInput
					name="confirmPassword"
					type="password"
					value={confirmPassword}
					onChange={handleChange}
					label="Confirm Password"
					required
				/>
				<CustomButton type="submit">Sign Up</CustomButton>
			</form>
		</div>
	);
};

export default SignUp;
