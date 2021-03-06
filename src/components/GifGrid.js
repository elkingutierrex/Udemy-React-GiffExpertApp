import React from 'react'
import { useFechGifs } from '../hooks/useFechGifs'
import { GifGridItem } from './GifGridItem'



// import PropTypes from 'prop-types'

export const  GifGrid = ( { category } ) => {


    const { data:images, loading } = useFechGifs( category );

    // console.log( images );
    console.log( loading );



    // useEffect(() => {
    //   getGifs( category )
    //     .then( setImages );
    // }, [ category ])

    
    
    
    return (
        <>
            <h3 className="animate__animated animate__bounceInDown"> { category } </h3>  

            { loading && <p className="animate__animated animate__zoomInDown">Loading...</p>}

            <div className="card-grid">
            
                { 
                    images.map( img => ( 
                        <GifGridItem
                            key= { img.id }
                            { ...img } /> 
                    ) )
                }
            
            </div> 
        </>
        
    )
}





