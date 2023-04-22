import { Link } from "react-router-dom"

export function Navigation(params) {
    return (
        <div>
            <Link to="/tasks">
                <h1>Tasks App</h1>
            </Link>
            <Link to="/tasks-create"> Crear Tarea</Link>
        </div>
    )
}