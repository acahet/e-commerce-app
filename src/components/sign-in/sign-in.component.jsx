import React from 'react';
import { signInWithGoogle, auth } from '../../firebase/firebase.utils';
import CustomButton from '../common/custom-button/custom-button.component';
import FormInput from '../common/form-input/form-input.component';
import './sign-in.styles.scss';
class SignIn extends React.Component {
	state = {
		email: '',
		password: '',
	};

	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};
	handleSubmit = async (e) => {
		e.preventDefault();
		const { email, password } = this.state;
		try {
			await auth.signInWithEmailAndPassword(email, password);
			this.setState({ email: '', password: '' });
		} catch (error) {}
	};
	render() {
		const { email, password } = this.state;
		return (
			<div className="sign-in">
				<h2>I already have an account</h2>
				<span>Sign in with email and password</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						name="email"
						type="email"
						label="Email"
						value={email}
						onChange={this.handleChange}
						required
					/>
					<FormInput
						name="password"
						type="password"
						label="Password"
						value={password}
						onChange={this.handleChange}
						required
					/>
					<div className="buttons">
						<CustomButton type="submit">Sign-In</CustomButton>
						<CustomButton type="button" isGoogleSignIn onClick={signInWithGoogle}>
							Google Sign-in
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

export default SignIn;
