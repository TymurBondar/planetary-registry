import React from "react"

function Search({ search, setSearch }) {
    return (
        <div>
            <input value={search} type="text" onChange={(e) => setSearch(e.target.value)} placeholder="Search..." />
        </div>
    );
}

export default Search;