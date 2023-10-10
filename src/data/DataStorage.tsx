import { reactProp, typeTodoContext } from "./types";
import { useState } from "react";
import { TodoContext } from "../hooks/useTodo";

let nextId = 0;
export default function TodoProvider({ children }: reactProp) {
    const [filteredData, setFilteredData] = useState<number[]>();

    const [todo, setTodo] = useState<typeTodoContext["todo"]>(() => {

        const data = localStorage.getItem("todos") || "[]"
        return JSON.parse(data);
    });
    nextId = todo.reduce((maxId, item) => { return Math.max(maxId, item.id) }, 0);

    const filterData: typeTodoContext["filterData"] = (isChecked, search) => {
        const filteredTodo = (todo.filter(item => {
            if (isChecked !== undefined) {
                return (item.title.toLowerCase().includes(search.toLowerCase()) || (item.description.toLowerCase()).includes(search.toLowerCase())) && item.completed === isChecked;
            } else {
                return (item.title.toLowerCase().includes(search.toLowerCase()) || (item.description.toLowerCase()).includes(search.toLowerCase()));
            }

        }))
        setFilteredData(filteredTodo.map((item) => (item.id)))
        return filteredTodo.map((item) => (item.id));
    }

    const saveData: typeTodoContext["saveData"] = (title, description) => {
        nextId++
        setTodo((oldData) => {

            const newData: typeTodoContext["todo"] =
                [
                    ...oldData,
                    {
                        id: nextId, title, description, completed: false
                    },

                ];
            localStorage.setItem('todos', JSON.stringify(newData));
            return newData;
        })
    }
    const toggleCheck: typeTodoContext["toggleCheck"] = (id) => {
        setTodo((oldData) => {
            const updatedCheck = oldData.map((item) => {
                if (item.id === id) {
                    return { ...item, completed: !item.completed }
                }
                return item;
            });
            localStorage.setItem('todos', JSON.stringify(updatedCheck));
            return updatedCheck;
        })

    }

    const updateData: typeTodoContext["updateData"] = (selectedTodo) => {

        setTodo((oldData) => {
            const updatedData = oldData.map((item) => {
                if (item.id === selectedTodo.id) {
                    return { ...selectedTodo }
                }
                return item;
            });
            console.log(JSON.stringify(updatedData))
            localStorage.setItem('todos', JSON.stringify(updatedData));
            return updatedData;
        })

    }

    const deleteData: typeTodoContext["deleteData"] = (id) => {
        setTodo((oldData) => {
            const updatedDelete = oldData.filter((item) => item.id !== id);
            localStorage.setItem('todos', JSON.stringify(updatedDelete));
            return updatedDelete;
        })
    }


    return (
        <TodoContext.Provider value={{ todo, filterData, filteredData, saveData, toggleCheck, updateData, deleteData }}>
            {children}
        </TodoContext.Provider>
    );
}
