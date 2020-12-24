import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/signin-signup/signin-signup.component';

const App = () => {
	const [currentUser, setCurrentUser] = useState(null);

	useEffect(() => {
		let unsubscribeFromAuth = null;
		unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);
				userRef.onSnapshot((snapshot) => {
					console.log(snapshot);
					setCurrentUser({
						currentUser: {
							id: snapshot.id,
							...snapshot.data(),
						},
					});
				});
			} else {
				setCurrentUser({ currentUser: userAuth });
			}
		});
		unsubscribeFromAuth();
	}, [currentUser]);

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

// class App extends React.Component {
// 	constructor() {
// 		super();
// 		this.state = {
// 			currentUser: null,
// 		};
// 	}
// 	unsubscribeFromAuth = null;

// 	componentDidMount() {
// 		// const { setCurrentUser } = this.props;
// 		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
// 			if (userAuth) {
// 				const userRef = await createUserProfileDocument(userAuth);

// 				userRef.onSnapshot((snapshot) => {
// 					this.setState({
// 						currentUser: { id: snapshot.id, ...snapshot.data() },
// 					});
// 				});
// 			} else {
// 				this.setState({ currentUser: userAuth });
// 			}
// 		});
// 	}
// 	componentWillUnmount() {
// 		this.unsubscribeFromAuth();
// 	}
