import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss';
const MenuItem = ({ title, imageUrl, size, linkUrl, match, history }) => {
	return (
		<div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
			<div style={{ backgroundImage: `url(${imageUrl})` }} className="menu-item__background-image"></div>
			<div className="menu-item__content">
				<h1 className="menu-item__title">{title.toUpperCase()}</h1>
				<span className="menu-item__subtitle">SHOP NOW</span>
			</div>
		</div>
	);
};

export default withRouter(MenuItem);
