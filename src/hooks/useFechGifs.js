import { useState } from "react"

export const useFechGifs = () => {

    const [state, setState] = useState( {
        data: [],
        loading: true
    } )

    setTimeout(() => {
        setState({data:[1,2,2,3,6,4], loading : false})
    }, 3000);

    return state;



}
