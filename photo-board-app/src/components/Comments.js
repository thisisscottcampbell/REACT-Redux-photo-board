import React from 'react';
import useInput from '../hooks/useInput';

const Comments = (props) => {
	const { addComment, comments } = props;

	console.log(addComment);

	const [commentInput, setCommentInput, resetCommentInput] = useInput('');

	const handleSubmit = (e) => {
		e.preventDefault();

		addComment(commentInput);

		resetCommentInput();
	};

	return (
		<div className="comment">
			<form className="comment-form" onSubmit={handleSubmit}>
				<input
					type="text"
					value={commentInput}
					onChange={setCommentInput}
					placeholder="comment"
				/>
				<input type="submit" hidden />
			</form>
			<h4>Comments:</h4>
			{comments && comments.map((comment, i) => <p key={i}>{comment}</p>)}
		</div>
	);
};

export default Comments;
