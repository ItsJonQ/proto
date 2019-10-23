import React from 'react';
import styled from 'styled-components';
import IconButton from '../IconButton';

export default function Tweet(props) {
	const {
		name,
		userName,
		id,
		avatar,
		title,
		likes,
		content,
		timestamp,
		onClickLike,
	} = props;

	const isLoaded = avatar && name && userName && timestamp && content;

	if (!isLoaded) {
		return (
			<TweetUI>
				<Avatar></Avatar>
				<Body>
					<Header style={{ marginBottom: 8 }}>
						<Skeleton style={{ width: '50%' }} />
					</Header>
					<Content>
						<Skeleton
							style={{
								height: 12,
								marginBottom: 5,
								width: '80%',
							}}
						/>
						<Skeleton
							style={{
								height: 12,
								marginBottom: 5,
								width: '68%',
							}}
						/>
					</Content>
					<Icons style={{ opacity: 0.3 }}>
						<IconButton disabled icon="admin-comments" />
						<IconButton disabled icon="controls-repeat" />
						<IconButton disabled icon="heart" />
						<IconButton disabled icon="share-alt2" />
					</Icons>
				</Body>
			</TweetUI>
		);
	}

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
					<IconButton icon="admin-comments" />
					<IconButton icon="controls-repeat" />
					<LikeWrapper>
						<IconButton icon="heart" onClick={onClickLike} />
						<LikeLabel>{likes ? <>{likes}</> : null}</LikeLabel>
					</LikeWrapper>
					<IconButton icon="share-alt2" />
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
	background: #ddd;
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
	margin-top: 10px;
`;

const Skeleton = styled.div`
	background: #ddd;
	border-radius: 4px;
	height: 15px;
`;

const LikeWrapper = styled.div`
	display: flex;
	align-items: center;
`;

const LikeLabel = styled.div`
	font-size: 12px;
	width: 18px;
	text-align: right;
`;
