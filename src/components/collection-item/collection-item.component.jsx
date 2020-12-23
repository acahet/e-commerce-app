import React from 'react';
import './collection-item.styles.scss';
const CollectionItem = ({ id, name, price, imageUrl }) => (
	<div className="collection-item">
		<div style={{ backgroundImage: `url(${imageUrl})` }} className="collection-item__image" />
		<div className="collection-item__collection-footer">
			<span className="collection-item__name">{name}</span>
			<span className="collection-item__price">{price}</span>
		</div>
	</div>
);

export default CollectionItem;
