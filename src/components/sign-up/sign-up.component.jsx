import React from 'react';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import CustomButton from '../common/custom-button/custom-button.component';
import FormInput from '../common/form-input/form-input.component';

import './sign-up.styles.scss';
class SignUp extends React.Component {
	state = {
		displayName: '',
		email: '',
		password: '',
		confirmPassword: '',
	};
	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};
	handleSubmit = async (e) => {
		e.preventDefault();
		const { displayName, email, password, confirmPassword } = this.state;
		if (password !== confirmPassword) {
			alert("Passwords don't match");
		}
		if (displayName === '') {
			alert('displayName cannot be left empty');
		}
		try {
			const { user } = await auth.createUserWithEmailAndPassword(email, password);
			createUserProfileDocument(user, {displayName});
			this.setState({ displayName: '', email: '', password: '', confirmPassword: '' });
		} catch (error) {
			console.log('email password signup error ', error);
		}
	};
	render() {
		const { displayName, email, password, confirmPassword } = this.state;
		return (
			<div className="sign-up">
				<h2 className="title">I do not have an account</h2>
				<span>Sign-up with your email and password</span>
				<form className="sign-up-form" onSubmit={this.handleSubmit}>
					<FormInput
						type="text"
						name="displayName"
						label="Display Name"
						value={displayName}
						onChange={this.handleChange}
						required
					/>
					<FormInput
						type="email"
						name="email"
						label="Email"
						value={email}
						onChange={this.handleChange}
						required
					/>
					<FormInput
						type="password"
						name="password"
						label="Password"
						value={password}
						onChange={this.handleChange}
						required
					/>
					<FormInput
						type="password"
						name="confirmPassword"
						label="Confirm Password"
						value={confirmPassword}
						onChange={this.handleChange}
						required
					/>
					<CustomButton type="submit">Sign Up</CustomButton>
				</form>
			</div>
		);
	}
}

export default SignUp;
