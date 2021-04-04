import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const Todo = ({ todo, onClick, isCompleted, completeTodo }) => {
	const [editMode, setEditMode] = useState(false);
	const [editText, setEditText] = useState(todo);

	useEffect(() => {
		setEditText(todo);
	}, []);

	const handleEditTextChange = (e) => {
		const { value } = e.target;

		setEditText(value);
	};

	const handleOnClick = () => {
		setEditMode(!editMode);
	};

	const onKeyDown = (e) => {
		if (e.key === "Enter") {
			handleOnClick();
		}
	};

	return (
		<div className="todo-list">
			<div>
				<li>
					<label>
						{editMode ? (
							<input
								className="editInput"
								type="text"
								value={editText}
								onChange={handleEditTextChange}
								onKeyDown={onKeyDown}
								autoFocus
							/>
						) : (
							<span
								className={isCompleted ? "completedTodo" : null}
								onClick={completeTodo}
							>
								{editText}
							</span>
						)}
					</label>
					<div className="icons">
						<span onClick={handleOnClick}>
							<FontAwesomeIcon icon={faEdit} />
						</span>
						<span onClick={onClick}>
							<FontAwesomeIcon icon={faTrashAlt} />
						</span>
					</div>
				</li>
			</div>
		</div>
	);
};

export default Todo;
