import React from 'react';
import Text from './index';

export default {
	title: 'Text',
};

export const _default = () => <Text>Hello</Text>;
export const sizes = () => (
	<>
		<Text>Normal Text</Text>
		<Text size="sm">Small Text</Text>
	</>
);
