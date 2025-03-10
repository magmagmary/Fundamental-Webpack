import { api } from '@src/store/api';
import type { z } from 'zod';
import { PostSchema } from './schema';

export const postsApi = api.injectEndpoints({
	endpoints: (build) => ({
		getPost: build.query<Array<z.infer<typeof PostSchema>>, void>({
			query: () => '/posts',
			transformResponse: (response: Array<z.infer<typeof PostSchema>>) =>
				PostSchema.array().parse(response),
			serializeQueryArgs: ({ endpointName }) => endpointName,
		}),
	}),
});

export const { useGetPostQuery } = postsApi;
