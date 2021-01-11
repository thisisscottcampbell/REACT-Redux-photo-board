import React from 'react';
import serializeForm from 'form-serialize';

const AddPost = ({ addPicture, ...props }) => {
	//
	const handleSubmit = (e) => {
		e.preventDefault();
		const values = serializeForm(e.target, { hash: true });
		if (values['imageLink'] && values['description']) {
			values.id = Number(new Date());
			addPicture(values.id, values.imageLink, values.description);
			props.history.push('/');
		}
	};

	return (
		<div className="add-post">
			<div className="form" onSubmit={handleSubmit}>
				<form className="add-form">
					<input name="imageLink" placeholder="Link" />
					<input name="description" placeholder="Description" />
					<button>Post</button>
				</form>
			</div>
		</div>
	);
};

export default AddPost;
