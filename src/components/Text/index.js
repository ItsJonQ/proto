import React from 'react';
import styled from 'styled-components';
import classnames from 'classnames';

export default function Text(props) {
	const { size, ...restProps } = props;
	const classes = classnames(size && `is-size-${size}`);

	return <TextUI {...restProps} className={classes} />;
}

const TextUI = styled.span`
	font-size: 14px;

	&.is-size-sm {
		font-size: 11px;
	}
`;
