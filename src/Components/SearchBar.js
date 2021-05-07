import React from "react";

const SearchBar = ({setSearchBabies}) =>{  

 const SearchBabies= (e) =>{
  setSearchBabies(e.target.value);  
 }

    return(
        <div className="searchCountries">
        <input placeholder="Search a baby Name" type="search" onChange={SearchBabies} />  
        </div>
    );
}
export default SearchBar;


