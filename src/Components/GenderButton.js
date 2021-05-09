import React from 'react'
import  Icons from "./Icons"
 function GenderButton({ babyNames, getGender,IconeSource }) {
  
    return (
       
           
            <button className='boy-gender' type='button' onClick={() => getGender(babyNames)  }  >
                <img src={IconeSource} className="icon" alt={IconeSource ===  Icons.male ? 'boy' : IconeSource === Icons.female ? 'girl' : 'allgenders' } />

           </button>

        
    );
}


export default GenderButton;

