import React from 'react'

export const GifGridItem = ( { title, url } ) => {
    console.log( title, url );

    return (
        <div className="card">
            <img 
                alt={ title }
                src={ url } />
                <p> { title } </p>
            
        </div>
    )
}
