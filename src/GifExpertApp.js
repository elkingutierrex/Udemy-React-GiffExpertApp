import React, { useState } from 'react'

export const GifExpertApp = () => {

    // const categories = ['one punch', 'Samuray x', 'Dragon Ball']
    const [categories, setCategories] = useState( ['one punch', 'Samuray x', 'Dragon Ball' ] )

    const handleAdd = () => {
        // setCategories( [...categories, 'otra cosa']);    // Opcion 1
        setCategories(cats => [...cats, 'otra cosa']);      // Opcion 2

        console.log('Aqui',  categories )
    }

    console.log( categories )

    return (
        <>
            <h2> GifExpertApp </h2>
            <hr />
            <button onClick={ handleAdd } > Add </button>
            { categories }
            <ol>
                { categories.map (category => {
                    return <li key={ category }>{ category }</li>
                }) }                
            </ol>
            
        </>
    )
}
