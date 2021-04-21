import React from "react";


const BabyNames = (props) =>{



return(

<div className="container">
<ul className="grid">
{props.names.sort((a, b) => a.name.localeCompare(b.name)).map(item =>{
    const {name,sex} = item;
{if(sex=== "f"){
return(

<li className="girl">{name}</li>

 );
} else if(sex === "m"){
 return <li className="boy">{name}</li>  
}



}

   


 
})}
</ul>
</div>

);


}


export default BabyNames;