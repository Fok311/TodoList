import TodoItem from "./todo_item"
import AddNewForm from "./add_new_form"
import { useState } from "react";

export default function TodoList(props) {
  const { todos, setTodos } = props;
  const isCompleted = (id) => { // Function to toggle the completion status of a todo item
    setTodos(oldTodos => // Update the todos state using the previous state
        oldTodos.map(todo => { // Map over each todo item in the previous state
            if (todo.id === id) { // If the current todo item's id matches the id passed to the function
                return { ...todo, isComplete: !todo.isComplete }; // Toggle the isComplete property of the todo item
            }
            return todo; // Return the todo item unchanged if its id doesn't match
        })
    );
};
  
    return (
      <div className="card rounded shadow-sm mx-auto my-4" style={{ maxWidth: "500px" }}>
        <div className="card-body">
          <h3 className="card-title mb-3">My Todo List</h3>
          {todos.map((todo) => {
            return <TodoItem key={todo.id} name={todo.name} isComplete={todo.isComplete}
            isCompleted={() => isCompleted(todo.id)} onDelete={() => {
              setTodos(todos.filter((t) => t.id !== todo.id));
            }} />; // Pass individual todo item
          })}
          <AddNewForm todos={todos} setTodos={setTodos} />
        </div>
      </div>
    );
}