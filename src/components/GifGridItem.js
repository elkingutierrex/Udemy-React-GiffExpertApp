import React from 'react'

export const GifGridItem = ( { title, url } ) => {
    console.log( title, url );

    return (
        <div className="card animate__animated animate__bounce">
            <img 
                alt={ title }
                src={ url } />
                <p> { title } </p>
            
        </div>
    )
}
