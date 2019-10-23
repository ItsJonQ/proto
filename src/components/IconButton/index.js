import React from 'react';
import styled from 'styled-components';
import Icon from '../Icon';

export default function IconButton(props) {
	const { icon, ...restProps } = props;

	return (
		<IconButtonUI {...restProps}>
			<Icon icon={icon} size={16} />
		</IconButtonUI>
	);
}

const IconButtonUI = styled.button`
	align-items: center;
	background: white;
	border-radius: 50%;
	border: none;
	box-sizing: border-box;
	cursor: pointer;
	height: 32px;
	justify-content: center;
	outline: none;
	position: relative;
	width: 32px;

	&:hover {
		background: #eee;
	}

	&[disabled]:hover {
		background: white;
	}

	svg {
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		position: absolute;
	}
`;
