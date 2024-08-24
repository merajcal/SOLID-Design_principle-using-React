import React, { useState } from "react";

function SearchInput({ query, onSearchChange, onSearch }) {
  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <button onClick={onSearch}>Search</button>
    </div>
  );
}

function SearchResults({ results }) {
  return (
    <ul>
      {results.map((result, index) => (
        <li key={index}>{result}</li>
      ))}
    </ul>
  );
}

function SearchAndResults() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    setResults(["Result 1", "Result 2", "Result 3"]);
  };

  return (
    <div>
      <SearchInput
        query={query}
        onSearchChange={setQuery}
        onSearch={handleSearch}
      />
      <SearchResults results={results} />
    </div>
  );
}

export default SearchAndResults;
