import React from 'react';
import useInput from '../hooks/useInput';

const Comments = ({ addComment, pictureComments, id }) => {
	const [commentInput, setCommentInput, resetCommentInput] = useInput('');

	const handleSubmit = (e) => {
		e.preventDefault();

		addComment(commentInput, id);

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
			{pictureComments &&
				pictureComments.map((comment, i) => <p key={i}>{comment}</p>)}
		</div>
	);
};

export default Comments;
