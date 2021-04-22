

import React from "react";

const BabyNames = (props) =>{
return(

<div className="container">
<ul className="grid">

{props.names.sort((a, b) => a.name.localeCompare(b.name)).map((item,index) =>{
    const {name,sex} = item;
    /* eslint-disable-next-line */
       {if(sex=== "f"){
        return <li key={index} className="girl">{name}</li>
        } else if(sex === "m"){
        return <li key={index} className="boy">{name}</li>      
        }
        }   

 return true;
})}
</ul>
</div>

);


}


export default BabyNames;