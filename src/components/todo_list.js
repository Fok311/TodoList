import TodoItem from "./todo_item"
import AddNewForm from "./add_new_form"

export default function TodoList() {
    const todo = [
        {
          id: 1,
          text: "Task 1",
          isCompleted: true
        },
        {
          id: 2,
          text: "Task 2",
          isCompleted: false
        },
        {
          id: 3,
          text: "Task 3",
          isCompleted: false
        }
      ];
    return (
        <div
      className="card rounded shadow-sm mx-auto my-4"
      style={{ maxWidth: "500px" }}
    >
        <div className="card-body">
                <h3 className="card-title mb-3">My Todo List</h3>
                {todo.map((todos) =>  {
                    return <TodoItem name={todos.text} />
                })}
                <AddNewForm />
            </div>
        </div>
    
    )
}