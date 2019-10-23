import React, { useState } from 'react';
import TweetWrapper from '../TweetWrapper';
import Tweet from '../Tweet';
import { getTweets } from '../../api';

export default function Twitter() {
	const [isLoading, setLoading] = useState(false);
	const [hasFetched, setHasFetched] = useState(false);
	const [tweets, setTweets] = useState([]);

	const loadTweets = () => {
		if (hasFetched) {
			return;
		}
		setLoading(true);
		getTweets().then((response) => {
			const { data } = response;
			setTweets(data.data);
			setLoading(false);
		});
		setHasFetched(true);
	};

	const hasTweets = !!tweets.length;

	return (
		<div>
			<button onClick={loadTweets}>LOAD</button>
			{isLoading && (
				<TweetWrapper>
					<Tweet />
					<Tweet />
					<Tweet />
				</TweetWrapper>
			)}

			{hasTweets ? (
				<TweetWrapper>
					{tweets.map((tweet) => (
						<Tweet {...tweet} key={tweet.id} />
					))}
				</TweetWrapper>
			) : (
				<div>No Tweets</div>
			)}
		</div>
	);
}
