import React, {useState} from "react";
import "./search.css";

const Search = ({search}) => {
    const [formData, setFormData] = useState("");

    const handleChange = (e) => {
        setFormData(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        search(formData.trim() || undefined);
        setFormData(formData.trim());
    }

    return (
        <div className="Search">
            <form onSubmit={handleSubmit}>
                <input 
                    placeholder="Search"
                    name="search"
                    value={formData}
                    onChange={handleChange}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Search;