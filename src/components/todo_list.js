import TodoItem from "./todo_item"
import AddNewForm from "./add_new_form"

export default function TodoList() {
    const todo = [
        { name: "Task 1"},
        { name: "Task 2"},
        { name: "Task 3"},
    ]
    return (
        <div
      className="card rounded shadow-sm mx-auto my-4"
      style={{ maxWidth: "500px" }}
    >
        <div className="card-body">
                <h3 className="card-title mb-3">My Todo List</h3>
                {todo.map((todos) =>  {
                    return <TodoItem name={todos.name} />
                })}
                <AddNewForm />
            </div>
        </div>
    
    )
}