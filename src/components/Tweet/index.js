import React from 'react';
import styled from 'styled-components';

export default function Tweet(props) {
	const { name, userName, id, avatar, title, content } = props;
	return (
		<TweetUI>
			<Avatar>
				<img src={avatar} />
			</Avatar>
			<Body>
				<Title>{title}</Title>
				<Content>{content}</Content>
			</Body>
		</TweetUI>
	);
}

const TweetUI = styled.div`
	border-bottom: 1px solid #eee;
	display: flex;
	padding: 20px;
`;

const Avatar = styled.div`
	width: 60px;
	height: 60px;
	border-radius: 50%;
	overflow: hidden;

	img {
		width: 100%;
		height: auto;
	}
`;

const Body = styled.div`
	flex: 1;
	margin-left: 20px;
`;

const Title = styled.div`
	font-size: 16px;
	font-weight: bold;
`;

const Content = styled.div`
	font-size: 14px;
`;
