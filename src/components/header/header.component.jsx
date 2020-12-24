import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/images/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import './header.styles.scss';

const Header = ({ currentUser }) => {
	return (
		<div className="header">
			<Link to="/">
				<Logo className="header__logo" />
			</Link>
			<div className="header__options">
				<Link className="header__option" to="/shop">
					SHOP
				</Link>
				<Link className="header__option" to="/contact">
					CONTACT
				</Link>
				{currentUser ? (
					<Link className="header__option" onClick={() => auth.signOut()}>
						SIGN OUT
					</Link>
				) : (
					<Link className="header__option" to="/signin">
						SIGN IN
					</Link>
				)}
			</div>
		</div>
	);
};

export default Header;
