import React, { useState } from 'react'

export const AddCategory = () => {
    const [inputValue, setInputValue] = useState ('decilo');

    const handleInputChange = (e) => {
        setInputValue( e.target.value );
    }

    const handleSumit = (e) => {
        e.preventDefault();
        console.log('Submit');

    }
    return (
        <form onSubmit={ handleSumit }>
            <input 
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }/>
        </form>
    )
}
