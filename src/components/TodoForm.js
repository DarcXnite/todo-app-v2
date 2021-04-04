import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TodoForm = ({ onAdd }) => {
	const [inputText, setInputText] = useState("");

	const handleChange = (e) => {
		const { value } = e.target;
		setInputText(value);
	};

	const handleClick = (e) => {
		onAdd({
			text: inputText,
			id: uuidv4(),
			isCompleted: false,
		});
		setInputText("");
	};

	const onKeyDown = (e) => {
		if (e.key === "Enter") {
			handleClick();
		}
	};

	return (
		<div className="form">
			<input type="text" onChange={handleChange} value={inputText} onKeyDown={onKeyDown} autoFocus />
			<button onClick={handleClick} >
				<span className="addBtn">Add</span>
			</button>
		</div>
	);
}

export default TodoForm
