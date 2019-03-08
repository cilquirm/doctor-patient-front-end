import React from "react";

const SearchBar = props => {
  return (
    <div>
      Search Name: <br />{" "}
      <input
        type="text"
        value={props.input}
        onChange={e => props.handleSearchBar(e)}
      />
    </div>
  );
};

export default SearchBar;
