import { useState } from "react";
import { useTodo } from "../hooks/useTodo";


export default function FilterData() {
    const { filterData } = useTodo();
    const [search, setSearch] = useState('');
    const [isChecked, setIsChecked] = useState<boolean | undefined>(undefined);

    const handleFilter = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        filterData(isChecked, search)
    }

    return (
        <>

            <form className="d-inline-flex align-items-center mt-4 mb-2" role="search" onSubmit={handleFilter}>
                <legend className='col-form-label col-auto me-2 mb-sm-1 text-info'>Filters</legend>
                <div className="form-check form-check-inline">
                    <input className="form-check-input " defaultChecked={true} type="radio" name="inlineRadioOptions" id="inlineRadio1" value="true" onClick={() => setIsChecked(undefined)} />
                    <label className="form-check-label" htmlFor="inlineRadio1">All</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" onClick={() => setIsChecked(true)} />
                    <label className="form-check-label" htmlFor="inlineRadio2">Completed</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" onClick={() => setIsChecked(false)} />
                    <label className="form-check-label" htmlFor="inlineRadio3">Uncompleted</label>
                </div>
                <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search" onChange={(e) => setSearch(e.target.value)} />
                <button className="btn btn-outline-info" type="submit" >Search</button>
            </form>

        </>
    )
}