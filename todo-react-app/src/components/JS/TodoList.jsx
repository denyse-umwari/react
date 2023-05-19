import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import "../CSS/TodoList.css";

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");

    const addTodo = () => {
        if (newTodo.trim() !== "") {
            const todo = {
                id: uuidv4(),
                text: newTodo,
                completed: false,
            };
            setTodos([...todos, todo]);
            setNewTodo("");
        }
    };

    const deleteTodo = (todoId) => {
        setTodos(todos.filter((todo) => todo.id !== todoId));
    };

    const toggleComplete = (todoId) => {
        setTodos(
            todos.map((todo) =>
                todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const editTodo = (todoId, newText) => {
        setTodos(
            todos.map((todo) =>
                todo.id === todoId ? { ...todo, text: newText } : todo
            )
        );
    };

    return (
        <div className="todo-list-container">
            <h2>Todo List</h2>
            <div className="todo-form">
                <input
                    type="text"
                    placeholder="Enter a new todo"
                    value={newTodo}
                    onChange={(event) => setNewTodo(event.target.value)}
                />
                <button onClick={addTodo}>Add Todo</button>
            </div>
            <ul className="todo-items">
                {todos.map((todo) => (
                    <li key={todo.id} className={`todo-item ${todo.completed ? "completed" : ""}`}>
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => toggleComplete(todo.id)}
                        />
                        <span>{todo.text}</span>
                        <div className="todo-icons">
                            <FontAwesomeIcon
                                icon={faEdit}
                                onClick={() => {
                                    const newText = prompt("Enter new text:", todo.text);
                                    if (newText !== null) {
                                        editTodo(todo.id, newText);
                                    }
                                }}
                            />
                            <FontAwesomeIcon
                                icon={faTrash}
                                onClick={() => deleteTodo(todo.id)}
                            />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList; 