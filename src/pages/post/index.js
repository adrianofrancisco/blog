import React from 'react';
import Post from '../../components/post';
import ListPosts from '../../components/list-posts';
import { ContainerApp } from '../../components/globais';

function Posts() {
	return (
		<ContainerApp>
			<Post />
			<ListPosts />
		</ContainerApp>
	);
}

export default Posts;