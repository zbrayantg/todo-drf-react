import { Link } from "react-router-dom"

export function Navigation(params) {
    return (
        <div className="flex justify-between py-3">
            <Link to="/tasks">
                <h1 className="font-bold text-3xl mb-4">Tasks App</h1>
            </Link>

            {/* <button >
            </button> */}
            <Link to="/tasks-create" className="bg-indigo-500 px-3 py-3 rounded-lg"> Crear Tarea</Link>

        </div>
    )
}