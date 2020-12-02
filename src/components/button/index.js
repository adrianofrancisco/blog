import React from 'react';
import { Button, TextButton } from './styles';

function ButtonSave({ ...props }) {
	function handleClick() {
		props.handleClicked();
	}

	return (
		<Button disabled={props.isSaving} onClick={() => handleClick()}>
			<TextButton>{props.isSaving ? props.textSaving : props.textDefault}</TextButton>
		</Button>
	);

}

export default ButtonSave;