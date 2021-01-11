import React from 'react';
import useInput from '../hooks/useInput';

const AddPhoto = ({ addPicture, history, ...props }) => {
	const [linkInput, handleLinkInput, resetLinkInput] = useInput('');
	const [
		descriptionInput,
		handleDescriptionInput,
		resetDescriptionInput,
	] = useInput('');

	const handleSubmit = (e) => {
		e.preventDefault();

		addPicture({
			timestamp: Number(new Date()),
			id: Math.floor(Math.random() * 10000),
			description: descriptionInput,
			imageLink: linkInput,
		});

		history.push('/');

		resetLinkInput();
		resetDescriptionInput();
	};

	return (
		<div>
			<h1>PhotoWall</h1>
			<div className="form">
				<form onSubmit={handleSubmit}>
					<input
						value={linkInput}
						onChange={handleLinkInput}
						type="text"
						placeholder="photo link"
					/>
					<input
						value={descriptionInput}
						onChange={handleDescriptionInput}
						type="text"
						placeholder="description"
					/>
					<button>post</button>
				</form>
			</div>
		</div>
	);
};

export default AddPhoto;
