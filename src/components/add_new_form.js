import { useState } from "react";



export default function AddNewForm(props) {
    const { todos, setTodos, onClick } = props;
    const [value, setValue] = useState("");
    
    return (
        <div className="mt-4">
            <form className="d-flex justify-content-between align-items-center"
                onSubmit={(event) => {
                    event.preventDefault();
                    setTodos([
                      ...todos,
                      {
                        id: Math.random(), // to ensure unique id
                        name: value,
                        isComplete: false
                      },
                    ]);
                    setValue("");
                }}
            >
                <input
                    type="text"
                    className="form-control"
                    placeholder="Add new todo..."
                    name="todo_name"
                    required
                    value={value}
                    onChange={(event) => {
                    setValue(event.target.value);
                    }}
                />
                <button className="btn btn-primary btn-sm rounded ms-2" onClick={onClick}>Add</button>
            </form>
      </div>
    );
  }