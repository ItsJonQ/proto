import React, { useState } from 'react';
import { boolean } from '@storybook/addon-knobs';
import faker from 'faker';
import styled from 'styled-components';
import { Schema } from 'faker-schema';

import Tweet from './index';

const tweetSchema = new Schema(() => ({
	id: faker.random.uuid(),
	title: faker.lorem.sentence(),
	content: faker.lorem.paragraph(),
	userName: faker.internet.userName(),
	avatar: faker.internet.avatar(),
	name: faker.name.firstName(),
	timestamp: '23m',
	likes: faker.random.number(100),
}));

export default {
	title: 'Tweet',
};

export const _default = () => {
	const tweets = tweetSchema.make(20);

	return (
		<Wrapper>
			<Tweet />
			{tweets.map((tweet) => (
				<Tweet {...tweet} key={tweet.id} />
			))}
		</Wrapper>
	);
};

export const skeleton = () => {
	const showSkeleton = boolean('Show Skeleton', true);
	const [tweet] = tweetSchema.make(1);

	if (showSkeleton) {
		return (
			<Wrapper>
				<Tweet />
			</Wrapper>
		);
	}

	return (
		<Wrapper>
			<Tweet {...tweet} />
		</Wrapper>
	);
};

const LikeExample = (props) => {
	const [likes, setLikes] = useState(0);
	const incrementLikes = () => setLikes(likes + 1);

	return (
		<Wrapper>
			<Tweet {...props} likes={likes} onClickLike={incrementLikes} />
		</Wrapper>
	);
};

export const likeTest = () => {
	const [tweet] = tweetSchema.make(1);

	return <LikeExample {...tweet} />;
};

const Wrapper = styled.div`
	max-width: 480px;
`;
