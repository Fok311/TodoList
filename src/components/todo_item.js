import { useState } from "react";


export default function TodoItem(props) {
    const { name, id, onDelete, isComplete, isCompleted } = props
    return (
        <ul className="list-group">
            <li
            className="list-group-item d-flex justify-content-between align-items-center"
            >
                <div>
                <button className="btn btn-sm btn-light " onClick={isCompleted}>
                {isComplete ? (
                    <span className="checked">
                        <i className="bi bi-check-square"></i>
                        <span className="ms-2" style={{ textDecoration: 'line-through' }}>{name}</span>
                    </span>
                ) : (
                    <span>
                        <i className="bi bi-square"></i>
                        <span className="ms-2">{name}</span>
                    </span>
                )}
                </button>
                </div>
                <div>
                <button className="btn btn-sm btn-danger" onClick={() => {
                onDelete(id);
                }}>
                    <i className="bi bi-trash"></i>
                </button>
                </div>
                {/* <i class="bi bi-check"></i> */}
            </li>
        </ul>
    )
}   