import React from 'react';
import { Dashicon } from '@wordpress/components';

export default function Icon(props) {
	const { icon } = props;
	return <Dashicon icon={icon} />;
}

Icon.defaultProps = {
	icon: 'heart',
};
