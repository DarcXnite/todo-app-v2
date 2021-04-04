import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, onDelete, completeTodo }) => {
	const todoList = todos.map((todo) => (
		<Todo
			key={todo.id}
			id={todo.id}
			todo={todo.text}
			isCompleted={todo.isCompleted}
			completeTodo={() => completeTodo(todo.id)}
			onClick={() => onDelete(todo.id)}
		/>
	));

	return (
		<div>
			<ul>{todoList}</ul>
		</div>
	);
}

export default TodoList
