import React from 'react';
import { useGetPostQuery } from './postsApi';
import type { z } from 'zod';
import type { PostSchema } from './schema';
type Post = z.infer<typeof PostSchema>;

const Posts = () => {
	const { data, isLoading, isError } = useGetPostQuery();

	if (isLoading) return <div>Loading...</div>;
	if (isError) return <div>Error</div>;

	return (
		<ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
			{data?.map((post: Post) => (
				<li
					key={post.id}
					className="h-36 flex flex-col relative bg-amber-100 rounded-md overflow-hidden hover:shadow-lg"
				>
					<img
						src={`https://picsum.photos/200/300/?blur=1?id=${post.id}`}
						alt=""
						className="backdrop-blur-md backdrop-contrast-150 h-20 w-full object-cover "
					/>
					<p className="line-clamp-2 p-1.5">{post.title}</p>
				</li>
			))}
		</ul>
	);
};

export default Posts;
