import React, { useState } from "react";
import "./components.css";

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div>
      <h1>Search</h1>
      <input
        type="text"
        placeholder="Search the item here"
        value={query}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Search;