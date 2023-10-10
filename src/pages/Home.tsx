import FormInput from "../components/FormInput"
import TodoProvider from "../data/DataStorage"
import FilterData from "../components/FilterData"
import DataTableInput from "../components/DataTableInput";

export default function Home() {

    return (
        <div className="container pt-3">
            <TodoProvider>
                <FormInput />
                <FilterData />
                <DataTableInput />
            </TodoProvider>
        </div>
    )
}
