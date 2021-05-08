import React from 'react';


const Basket = ({ name, PickedNames }) => (
	name.sex === 'f' ?
		
        <div className='girl ' onClick={() => PickedNames(name.id)}>
			
			<span className='baby-name-text'>{name.name}</span>
		</div>
		: <div className='boy ' onClick={() => PickedNames(name.id)}>
		
			<span className='baby-name-text'>{name.name}</span>
		</div >

    
)

export default Basket;