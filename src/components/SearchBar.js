import React from "react";

const SearchBar = props => {

// console.log(props)

return (
	<div>


	Search Name <input type="text" value={props.input} onChange={(e)=>props.handleSearchBar(e)}/>

	</div>
	)

}

export default SearchBar