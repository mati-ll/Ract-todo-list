import { typeTodoContext } from "../data/types";
import { createContext, useContext } from "react";

export const TodoContext = createContext<typeTodoContext | null>(null);

export const useTodo = () => {
    const todoContext = useContext(TodoContext);
    if (!todoContext) {
        throw new Error("useTodos used outside of Provider")
    }
    return todoContext;
}