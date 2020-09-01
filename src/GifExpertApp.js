import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import GifGrid from './components/GifGrid'

export const GifExpertApp = () => {

    // const categories = ['one punch', 'Samuray x', 'Dragon Ball']
    const [categories, setCategories] = useState( ['Dragon Ball'] )

    // const handleAdd = () => {
    //     // setCategories( [...categories, 'otra cosa']);    // Opcion 1
    //     setCategories(cats => [...cats, 'otra cosa']);      // Opcion 2

    //     console.log('Aqui',  categories )
    // }

    // console.log( categories )

    return (
        <>
            <h2> GifExpertApp </h2>
            <AddCategory setCategories={ setCategories } />
            <hr />
            {/* <button onClick={ handleAdd } > Add </button> */}
        
            <ol>
                { 
                    categories.map (category => 
                        // <li key={ category }> { category }</li>
                        <GifGrid 
                            category={ category }
                            key={ category }
                         />

                    )
                }                
            </ol>
            
        </>
    )
}
