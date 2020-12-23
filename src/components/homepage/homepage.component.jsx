import React from 'react';
import './homepage.styles.scss'
const HomePage = () => {
	return (
		<div className="homepage">
			<div className="homepage__directory">
				<div className="homepage__menu-item">
					<div className="homepage__content">
						<h1 className="homepage__title">HATS</h1>
						<span className="homepage__subtitle">SHOP NOW</span>
					</div>
				</div>
				<div className="homepage__menu-item">
					<div className="homepage__content">
						<h1 className="homepage__title">JACKETS</h1>
						<span className="homepage__subtitle">SHOP NOW</span>
					</div>
				</div>
				<div className="homepage__menu-item">
					<div className="homepage__content">
						<h1 className="homepage__title">SNEAKERS</h1>
						<span className="homepage__subtitle">SHOP NOW</span>
					</div>
				</div>
				<div className="homepage__menu-item">
					<div className="homepage__content">
						<h1 className="homepage__title">WOMENS</h1>
						<span className="homepage__subtitle">SHOP NOW</span>
					</div>
				</div>
				<div className="homepage__menu-item">
					<div className="homepage__content">
						<h1 className="homepage__title">MENS</h1>
						<span className="homepage__subtitle">SHOP NOW</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
