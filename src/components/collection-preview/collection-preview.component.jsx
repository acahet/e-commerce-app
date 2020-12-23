import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import './collection-preview.styles.scss';
const CollectionPreview = ({ title, items }) => {
	return (
		<div className="collection-preview">
			<h1 className="collection-preview__title">{title.toUpperCase()}</h1>
			<div className="collection-preview__preview">
				{items
					.filter((item, idx) => idx < 4)
					.map(({ id, ...otherItemProps }) => (
						<CollectionItem key={id} {...otherItemProps} />
					))}
			</div>
		</div>
	);
};

export default CollectionPreview;
