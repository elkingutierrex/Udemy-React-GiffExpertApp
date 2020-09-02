import React from 'react'

export const GifGridItem = ( { title, url } ) => {
    console.log( title, url );

    return (
        <>
        <img 
            alt={ title }
            src={ url } />
            <p> { title } </p>
           
        </>
    )
}
