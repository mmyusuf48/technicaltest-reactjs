import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";

const SearchUi = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (query.trim()) {
            onSearch(query);  
        }
    };

    return (
        <div className=" rounded-lg">
            <form onSubmit={handleSubmit} className="flex items-center space-x-1">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search for a movie..."
                    className="flex-1 p-2 rounded-md text-gray-700 focus:border-slate-100 focus:ring-1 focus:ring-slate-100"
                />
                <button
                    type="submit"
                    className="bg-orange-500 text-white p-2 rounded-md hover:bg-orange-600"
                >
                    <FaSearch size={24}/>
                </button>
            </form>
        </div>
    );
};

export default SearchUi;
