import React, {useEffect, useState} from "react"

const Context = React.createContext()

function ContextProvider (props) {

    const [allPhotos, setAllPhotos] = useState ([])
    
    useEffect(()=>{ 
        fetch('https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json')
        .then(Response => Response.json())
        .then(data => setAllPhotos(data))
    },[])

    return (
        <Context.Provider value={{allPhotos}}>
            {props.children}
        </Context.Provider>
    )

}

export { ContextProvider, Context }