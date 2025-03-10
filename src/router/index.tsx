import Home from '@features/home/Home';
import Layout from '@features/layout/Layout';
import Posts from '@features/posts/Posts';
import { createBrowserRouter } from 'react-router';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Posts />,
      },
    ],
  },
]);
