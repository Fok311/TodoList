import TodoList from './components/todo_list';
import { useState } from 'react';
import TodoItem from './components/todo_item';
import AddNewForm from './components/add_new_form';

export default function App() {
    const [todos, setTodos] = useState([]);
    console.log(todos);
    return (
        <div className="container">
        <TodoList todos={todos} setTodos={setTodos} />
        </div>
    )
    
}