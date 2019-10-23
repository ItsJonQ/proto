import React from 'react';
import styled from 'styled-components';
import Icon from '../Icon';

export default function Tweet(props) {
	const { name, userName, id, avatar, title, content, timestamp } = props;
	return (
		<TweetUI>
			<Avatar>
				<img src={avatar} />
			</Avatar>
			<Body>
				<Header>
					<Title>{name}</Title>
					<Meta>
						@{userName} &middot; {timestamp}
					</Meta>
				</Header>
				<Content>{content}</Content>
				<Icons>
					<Icon icon="admin-comments" />
					<Icon icon="controls-repeat" />
					<Icon icon="heart" />
					<Icon icon="share-alt2" />
				</Icons>
			</Body>
		</TweetUI>
	);
}

const TweetUI = styled.div`
	border-bottom: 1px solid #eee;
	display: flex;
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
		Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
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

const Header = styled.div`
	display: flex;
`;

const Title = styled.div`
	font-size: 16px;
	font-weight: bold;
	margin-right: 10px;
`;

const Meta = styled.div`
	font-size: 13px;
`;

const Content = styled.div`
	font-size: 14px;
`;

const Icons = styled.div`
	display: flex;
	justify-content: space-between;
`;
