import React from 'react';
import { Dashicon } from '@wordpress/components';

export default function Icon(props) {
	return <Dashicon {...props} />;
}

Icon.defaultProps = {
	icon: 'heart',
};
