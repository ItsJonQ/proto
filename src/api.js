import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import faker from 'faker';
import { Schema } from 'faker-schema';

const isStorybook = () => process.env.STORYBOOK_ENV === 'storybook';
const isDevelopment = () => process.env.NODE_ENV === 'development';

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

const mockDB = {
	tweets: tweetSchema.make(20),
};

export const createMockApi = (apiInstance) => {
	const mockApi = new MockAdapter(apiInstance, { delayResponse: 2000 });

	mockApi.onGet('/posts').reply(200, {
		data: mockDB.tweets,
	});

	return apiInstance;
};

export const createApi = () => {
	const apiInstance = axios.create({
		baseURL: 'https://jsonplaceholder.typicode.com/',
	});

	if (isStorybook()) {
		createMockApi(apiInstance);
	}

	return apiInstance;
};

export const api = createApi();

export const getTweets = () => {
	return api.get('/posts');
};
