import upVote from '../../images/upvote.png';

function UpVote({ ...props }) {
    function handleClick() {
		props.handleClicked();
	}

    return (
        <img src={upVote} style={{ width: 16 }} alt={props.alt} onClick={() => handleClick()} />
    );
}

export default UpVote;