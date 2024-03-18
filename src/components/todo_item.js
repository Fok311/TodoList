export default function TodoItem(props) {
    const { num, name } = props
    return (
        <ul className="list-group">
            <li
            class="list-group-item d-flex justify-content-between align-items-center"
            >
                <div>
                <button class="btn btn-sm btn-light">
                    <i class="bi bi-square"></i>
                </button>
                <span class="ms-2">{name} {num}</span>
                </div>
                <div>
                <button className="btn btn-sm btn-danger">
                    <i className="bi bi-trash"></i>
                </button>
                </div>
            </li>
        </ul>
    )
}