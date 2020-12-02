import React, { useState, useEffect } from 'react';
import apiService from '../../services/api';
import { Article, Text } from './styles.js';
import UpVote from '../../components/upvote';
import Swal from 'sweetalert2';

function ListPosts() {
	const [isSaving, setSaving] = useState(false);
	const [dataPosts, setDataPosts] = useState([]);

	useEffect(() => {
		loadPosts();
	}, []);

	async function loadPosts() {
		const reponse = await apiService.get('posts');
		if (reponse.data) {
			setDataPosts(reponse.data);
		}
	}

	async function upVote(idPost) {
		try {
			setSaving(true);

			const reponse = await apiService.put('post/' + idPost);
			if (reponse.data) {
				reloadPage();
			}

			setSaving(false);
		} catch (error) {
			Swal.fire({
				icon: 'error',
				text: error,
				timer: 5000
			});

			setSaving(false);
		}
	}

	function reloadPage() {
		document.location.reload(true);
	}

	return (
		<div>
			{dataPosts.map((data, key) => (
				<Article key={key}>
					<table width="100%">
						<tbody>
							<tr>
								<td colSpan="2">
									<Text>{data.description}</Text>
								</td>
							</tr>

							<tr>
								<td width="3%">
									<UpVote handleClicked={() => upVote(data.id)} alt="Gostei deste post ;)" />
								</td>
								<td width="97%">
									<Text>{data.countUpvote}</Text>
								</td>
							</tr>
						</tbody>
					</table>
				</Article>
			))}
		</div>
	);
}

export default ListPosts;