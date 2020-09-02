import React from 'react'
import { useFechGifs } from '../hooks/useFechGifs'
// import { GifGridItem } from './GifGridItem'
// import { getGifs } from '../helpers/getGifs';


// import PropTypes from 'prop-types'

export const  GifGrid = ( { category } ) => {

    // const [images, setImages] = useState([]);
    const { data, loading } = useFechGifs();

    console.log( data );
    console.log( loading );



    // useEffect(() => {
    //   getGifs( category )
    //     .then( setImages );
    // }, [ category ])

    
    
    
    return (
        <>
            <h3> { category } </h3>

            { loading ? 'Cargando...' : 'Data cargada' }
            {/* <div className="card-grid">
            
                { 
                    images.map( img => ( 
                        <GifGridItem
                            key= { img.id }
                            { ...img } /> 
                    ) )
                }
            
            </div>  */}
        </>
        
    )
}





