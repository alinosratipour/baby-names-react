
import React from 'react';
import Basket from './Basket.js';

const BabyNames = ({ babyNames, searchBabies, pickedName, setPickedName }) => {
	   const filteredNames = babyNames
       .filter(item => item.name.toLowerCase().includes(searchBabies.toLowerCase()))
		.sort((a, b) => a.name.localeCompare(b.name))
       .filter(item => !pickedName.includes(item.id));
   	    const PickedNames= (babyName) => setPickedName([...pickedName, babyName]);

	return (
		<section className='grid' >
			{filteredNames.map((name, index) =>(
			<Basket name={name} key={index} PickedNames={PickedNames}/>
			))}
		</section>
	)
}

export default BabyNames;