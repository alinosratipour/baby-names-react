import React from 'react';

import  Icons from "./Icons"

const Basket = ({ name, PickedNames }) => (
	name.sex === 'f' ?
		
        <div className='girl ' onClick={() => PickedNames(name.id)}>
			<img src={Icons.female} alt='girl' className='small-logo' />
			<span >{name.name}</span>
		</div>
		: <div className='boy ' onClick={() => PickedNames(name.id)}>
		<img src={Icons.male} alt='boy ' className='small-logo' />
			<span >{name.name}</span>
		</div >

    
)

export default Basket;