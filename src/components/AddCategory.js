import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ( {setCategories} ) => {

    const [inputValue, setInputValue] = useState('')
    const handeleInputChange = (e) => {
        //console.log(e.target.value)
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if( inputValue.trim().length > 2 ){
            setCategories( cats => [ inputValue, ...cats ]);
            setInputValue('');
        }
        //console.log('Submit hecho')
        
    }
    return (
        <form onSubmit={handleSubmit}>
          <input 
            type="text"
            value={inputValue}
            onChange={handeleInputChange}
          />
          </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}