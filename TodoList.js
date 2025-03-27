import React, {useState} from 'react';
import input from 'postcss/lib/input';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    const handleAddTodo = () => {
        if (newTodo.trim()) {
            setTodos([...todos, newTodo]);
            setNewTodo('');
        }
    };

    const handleRemoveTodo = (index) => {
        const updatedTodos = todos.filter((_, i) => i !== index);
        setTodos(updatedTodos);
    };

    return (
        <div>
            <h2>Todo List</h2>
            <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Enter new todo"
            />
            <button onClick={handleAddTodo}>Add Todo</button>

            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                    {todo} 
                    <button onClick={() => handleRemoveTodo(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;