import React from 'react';
import Tweet from './index';
import faker from 'faker';
import { Schema } from 'faker-schema';

const tweetSchema = new Schema(() => ({
	id: faker.random.uuid(),
	title: faker.lorem.sentence(),
	content: faker.lorem.paragraph(),
	userName: faker.internet.userName(),
	avatar: faker.internet.avatar(),
	name: faker.name.firstName(),
	timestamp: '23m',
}));

export default {
	title: 'Tweet',
};

export const _default = () => {
	const tweets = tweetSchema.make(20);

	return (
		<div style={{ maxWidth: 480 }}>
			{tweets.map((tweet) => (
				<Tweet {...tweet} key={tweet.id} />
			))}
		</div>
	);
};
