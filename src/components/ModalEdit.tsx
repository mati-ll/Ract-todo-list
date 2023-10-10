import { modalProp, typeTodo } from "../data/types";
import { useState, useEffect } from "react";
import { useTodo } from "../hooks/useTodo";

export default function ModalEdit({ modalTodo }: modalProp) {

    const { updateData } = useTodo();

    const [selectedTodo, setSelectedTodo] = useState<typeTodo>({
        title: '',
        description: '',
        completed: false,
        id: 0,
    });

    useEffect(() => {
        if (modalTodo) {
            setSelectedTodo(modalTodo);
        }
    }, [modalTodo]);

    const handleTextChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { value, tagName } = e.target;

        if (tagName === "INPUT") {
            setSelectedTodo((prev) => ({ ...prev, title: value }));
        } else if (tagName === "TEXTAREA") {
            setSelectedTodo((prev) => ({ ...prev, description: value }));
        }
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { checked } = e.target;
        setSelectedTodo((prev) => ({ ...prev, completed: checked }));
    };

    const handleUpdateData = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (selectedTodo) {
            updateData(selectedTodo);
        }
    }

    return (
        <>
            <div data-bs-theme="dark">
                <div className="modal fade" id="editModal" tabIndex={-1} aria-labelledby="editModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="editModalLabel">Edit ToDo</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <form onSubmit={handleUpdateData}>
                                <div className="modal-body">
                                    <div className="mb-3">
                                        <label htmlFor="recipient-name" className="col-form-label">Title:</label>
                                        <input type="text" className="form-control" id="recipient-name" value={selectedTodo.title} onChange={handleTextChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="message-text" className="col-form-label">Description:</label>
                                        <textarea className="form-control" id="message-text" value={selectedTodo.description} onChange={handleTextChange}></textarea>
                                    </div>
                                    <div className="mb-3">
                                        <label >Completed</label>
                                        <input className="form-check-input mx-2" type="checkbox" id="flexCheckChecked" checked={selectedTodo.completed} onChange={handleCheckboxChange} />

                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Update</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}