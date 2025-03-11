import Home from '@features/home/Home';
import Layout from '@features/layout/Layout';
import Posts from '@features/posts/Posts';
import { createBrowserRouter } from 'react-router';

const isDevelopment = process.env.NODE_ENV === 'development';

export const router = createBrowserRouter(
	[
		{
			element: <Layout />,
			children: [
				{
					path: '/',
					element: <Posts />,
				},
			],
		},
	],
	{
		basename: isDevelopment ? '/' : '/Fundamental-Webpack',
	},
);
