

import React,{useState} from "react";
import SearchBar from "./SearchBar";

const BabyNames = ({babyNames}) =>{

 const [searchBabies , setSearchBabies] = useState("");
 

 


return(

<div className="container">

<div className="search-container">

  <SearchBar  setSearchBabies={setSearchBabies} /> 
  
</div>
<div className="favourites">
   <div className="favourite-babies">
       <h1>Favourite</h1> 
       <div className="babies">baby</div>
      
   </div>
    
   
    <hr ></hr>
</div>
<ul className="grid">





{babyNames.sort((a, b) => a.name.localeCompare(b.name))

.filter(item =>{
  return  item.name.toLowerCase().includes(searchBabies.toLowerCase())
})


.map((item,index) =>{
    const {name,sex} = item;
    /* eslint-disable-next-line */   
       {if(sex=== "f"){
        return <a href="/#" key={index}className="girl"> <li  >{name}</li></a>
        } else if(sex === "m"){
        return <a href="/#" key={index} className="boy"> <li >{name}</li> </a>     
        }
        }   

 return true;
})

}


</ul>
</div>

);


}


export default BabyNames;