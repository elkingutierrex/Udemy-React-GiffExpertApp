import React, { useState, useEffect } from 'react'
import { GifGridItem } from './GifGridItem'


// import PropTypes from 'prop-types'

export const  GifGrid = ( { category } ) => {

    const [images, setImages] = useState([]);

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
        setImages( gif )

    }
    
    
    return (
        <>
            <h3> { category } </h3>

           
            { 
                images.map( img => ( 
                    <GifGridItem
                        key= { img.id }
                        { ...img } /> 
                ) )
            }
    

         
        </> 
    )
}

// GifGrid.propTypes = {

// }



