import React, { useState } from 'react';
import ButtonSave from '../../components/button';
import ButtonNewPost from '../../components/button';
import TextArea from '../../components/textarea';
import { DivNewPost } from './styles';
import apiService from '../../services/api';
import Swal from 'sweetalert2';

function Post({ ...props }) {
	const [isSaving, setSaving] = useState(false);

	async function savePost() {
		try {
			setSaving(true);

			var description = document.getElementById("post").value;
			const data = {
				description,
				countUpvote: 0
			}

			const reponse = await apiService.post('post', data);
			if (reponse.data) {
				Swal.fire({
					icon: 'success',
					text: 'Post gravado com sucesso!',
					timer: 5000
				}).then((result) => {
					reloadPage();
				});;
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

	function newPost() {
		var divPost = document.getElementById("newPost");
		divPost.style.display = "block";
	}

	return (
		<>
			<ButtonNewPost textDefault="Criar novo post" handleClicked={() => newPost()} />
			<DivNewPost id="newPost">
				<table width="100%">
					<tbody>
						<tr>
							<td>
								<TextArea name="post" id="post" placeholder="Escreva aqui seu post" rows="5" cols="20" />								
							</td>
						</tr>

						<tr>
							<td>
								<ButtonSave isSaving={isSaving} textDefault="Postar" textSaving="Postando..." handleClicked={() => savePost()} />
							</td>
						</tr>
					</tbody>
				</table>
			</DivNewPost>
		</>
	);
}

export default Post;