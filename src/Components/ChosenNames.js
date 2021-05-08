import React from 'react';
import Basket from './Basket';

// this function holds all the picked names
const ChosenNames = ({ babyNames, pickedName, setPickedName }) => {
	const AddedNames = babyNames.filter(item => pickedName.includes(item.id));
	const RemoveFromBasket = (id) => setPickedName(pickedName.filter(item => item !== id));

	return (
		<section className='basket'>	
            {
              AddedNames.length === 0 ?
               <h1 >Favorite:</h1>
			 :
             AddedNames.length > 0  &&  AddedNames.map((name, index) => <Basket name={name} key={index} PickedNames={RemoveFromBasket} />)
            }	
		</section>
	)
};

export default ChosenNames;