import React, { useEffect, useState } from "react";
import SortButtons from "./SortButtons";
import TodoForm from "./TodoForm";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";

const TodoApp = () => {
	const [todos, setTodos] = useState([]);
	const [filter, setFilter] = useState("all");

	useEffect(() => {
		getLocalTodos();
	}, []);

	useEffect(() => {
		saveLocalTodos();
	}, [todos]);

	const addTodo = (todo) => {
		setTodos((todos) => [todo, ...todos]);
	};

	const deleteTodo = (id) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	const completeTodo = (id) => {
		setTodos(
			todos.map((todo) => {
				if (todo.id === id) {
					todo.isCompleted = !todo.isCompleted;
				}
				return todo;
			})
		);
	};

	const changeFilter = (filterString) => {
		setFilter(filterString);
	};

	let filteredTodos = [];
	if (filter === "all") {
		filteredTodos = todos;
	} else if (filter === "incomplete") {
		filteredTodos = todos.filter((todo) => !todo.isCompleted);
	} else if (filter === "completed") {
		filteredTodos = todos.filter((todo) => todo.isCompleted);
	}

	//save to local

	const saveLocalTodos = () => {
		localStorage.setItem("todos", JSON.stringify(todos));
	};

	const getLocalTodos = () => {
		if (localStorage.getItem("todos") === null) {
			localStorage.setItem("todos", JSON.stringify([]));
		} else {
			let todoLocalStorage = JSON.parse(localStorage.getItem("todos"));
			setTodos(todoLocalStorage);
		}
	};

	return (
		<div className="container todo-notepad">
			<TodoHeader />
			<TodoForm onAdd={addTodo} />
			<SortButtons filter={filter} changeFilter={changeFilter} />
			<TodoList
				todos={filteredTodos}
				onDelete={deleteTodo}
				completeTodo={completeTodo}
			/>
		</div>
	);
};

export default TodoApp;
