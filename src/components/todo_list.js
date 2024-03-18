import TodoItem from "./todo_item"
import AddNewForm from "./add_new_form"

export default function TodoList() {
    const todo = [
        { name: "Task"},
        { name: "Task"},
        { name: "Task"},
    ]
    return (
        <div
      className="card rounded shadow-sm mx-auto my-4"
      style={{ maxWidth: "500px" }}
    >
        <div className="card-body">
                <h3 className="card-title mb-3">My Todo List</h3>
                {todo.map((todos, index) =>  {
                    return <TodoItem name={todos.name} num={index+1} />
                })}
                <AddNewForm />
            </div>
        </div>
    
    )
}