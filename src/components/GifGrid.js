import React, { useState, useEffect } from 'react'
// import PropTypes from 'prop-types'

function GifGrid( { category } ) {

    const [count, setCount] = useState(0);

    useEffect(() => {
      getGifs();
    }, [])

    const getGifs = async() => {
        const url = 'https://api.giphy.com/v1/gifs/search?api_key=YUE15hH5yDtjaEXrZOU5oei74qDiJijG&q=Rick+and+morty&limit=10'

        const resp = await fetch( url );
        const { data } = await resp.json();
        const gif = data.map( img =>  {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        } )

        console.log( gif );

    }

    
    return (
        <>
            <h3> { category } { count } </h3>

            <button onClick={ () => setCount( count + 1 ) }> Add </button>
        </>
    )
}

// GifGrid.propTypes = {

// }

export default GifGrid

