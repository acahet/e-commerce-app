import React from 'react';
import './menu-item.styles.scss';
const MenuItem = ({ title, imageUrl, size }) => {
	return (
		<div className={`${size} menu-item`}>
			<div style={{ backgroundImage: `url(${imageUrl})` }} className="menu-item__background-image"></div>
			<div className="menu-item__content">
				<h1 className="menu-item__title">{title.toUpperCase()}</h1>
				<span className="menu-item__subtitle">SHOP NOW</span>
			</div>
		</div>
	);
};

export default MenuItem;
