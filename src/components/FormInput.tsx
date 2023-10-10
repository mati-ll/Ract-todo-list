import { useRef, useState } from "react";
import { useTodo } from "../hooks/useTodo";
import EmptyAlert from "./EmptyAlert";

export default function FormInput() {
    const inputTitle = useRef<HTMLInputElement>(null);
    const inputDescription = useRef<HTMLInputElement>(null);
    const [showAlert, setShowAlert] = useState(false);

    const { saveData } = useTodo();

    const handleAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (inputTitle.current?.value && inputDescription.current?.value) {

            const newTitle = inputTitle.current.value || '';
            const newDescription = inputDescription.current.value || '';

            saveData(newTitle, newDescription);
            inputTitle.current.value = '';
            inputDescription.current.value = '';
        } else {

            setShowAlert(true);
        }
    }

    const handleChange = () => {
        setShowAlert(false);
    }

    return (
        <>
            <form onSubmit={handleAddTodo} className="row mb-3 justify-content-center">
                <div className="col-auto d-flex ">
                    <label htmlFor="title" className="col-form-label me-2">Title</label>
                    <input ref={inputTitle} type="text" id="title" className="form-control" placeholder="Title" aria-label="Title" onChange={handleChange} />
                </div>
                <div className="col-sm-6 d-flex ">
                    <label htmlFor="task" className="col-form-label me-2">Description</label>
                    <input ref={inputDescription} type="text" id="task" className="form-control" placeholder="Task" aria-label="Task" onChange={handleChange} />
                </div>
                <div className="col-auto ">
                    <button type="submit" className="btn btn-primary " id="add">
                        Add
                    </button>
                </div>
                <EmptyAlert showAlert={showAlert} />
            </form>
        </>
    )
}
