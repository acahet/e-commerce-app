import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Header from './components/header/header.component';
import { auth } from './firebase/firebase.utils';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/signin-signup/signin-signup.component';

const App = () => {
	const [currentUser, setCurrentUser] = useState(null);

	useEffect(() => {
		let unsubscribeFromAuth = null;
		unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
			setCurrentUser({ currentUser: user });
			console.log(user);
		});
		unsubscribeFromAuth();
	}, [setCurrentUser]);

	return (
		<div>
			<Header />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/shop" component={ShopPage} />
				<Route exact path="/signin" component={SignInAndSignUpPage} />
			</Switch>
		</div>
	);
};

export default App;
