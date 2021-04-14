import React, {useState} from "react";

function Search({onSearch}) {
  const[currentSearchTerm, setCurrentSearchTerm] = useState("");
  //local to search component 


  function handleSubmit(e) {
    e.preventDefault();
    onSearch(currentSearchTerm)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={currentSearchTerm}
        onChange={(e) => setCurrentSearchTerm(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
