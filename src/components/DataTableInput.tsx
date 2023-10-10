import { useState } from "react";
import { useTodo } from "../hooks/useTodo";
import ModalEdit from "./ModalEdit";
import { typeTodo } from "../data/types";

export default function DataTableInput() {

    const { todo, filteredData, toggleCheck, deleteData } = useTodo();
    const [selectedTodo, setSelectedTodo] = useState<typeTodo>();

    return (
        <>
            <table className="table table-dark table-striped">
                <thead className="table-bordered">
                    <tr>
                        <th scope="col">Task</th>
                        <th scope="col">Description</th>
                        <th scope="col" className="text-center">Completed</th>
                        <th scope="col" ></th>
                    </tr>
                </thead>
                <tbody>
                    {todo
                        .filter((item) => filteredData === undefined || filteredData.includes(item.id))
                        .map((filteredItem) => (
                            <tr key={filteredItem.id}>
                                <td>{filteredItem.title}</td>
                                <td>{filteredItem.description}</td>
                                <td className="text-center">
                                    <input className="form-check-input" type="checkbox" id="flexCheckChecked" checked={filteredItem.completed} onChange={() => toggleCheck(filteredItem.id)} />
                                </td>
                                <td className="text-end">
                                    <button type="button" className="btn btn-primary mb-1 me-2" onClick={() => setSelectedTodo(filteredItem)} data-bs-toggle="modal" data-bs-target="#editModal" >
                                        <i className="fa fa-pencil"></i>
                                    </button>
                                    <button type="button" className="btn btn-danger mb-1" onClick={() => deleteData(filteredItem.id)}>
                                        <i className="fa fa-trash"></i>
                                    </button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>

            <ModalEdit modalTodo={selectedTodo} />
        </>
    )
}
