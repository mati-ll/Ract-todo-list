export type typeTodo = {
    id: number;
    title: string;
    description: string;
    completed: boolean;
}

export type typeTodoContext = {
    todo: typeTodo[];
    filteredData?: number[];
    filterData: (isChecked: boolean | undefined, search: string) => void;
    saveData: (title: string, description: string) => void;
    toggleCheck: (id: number) => void;
    updateData: (selectedTodo: typeTodo) => typeTodo | void;
    deleteData: (id: number) => void;

}

export type reactProp = {
    children: React.ReactNode
}

export interface modalProp {
    modalTodo?: typeTodo
}
