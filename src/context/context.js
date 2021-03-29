import React, {useEffect, useState} from "react"

const Context = React.createContext()

function ContextProvider (props) {

    const [allPhotos, setAllPhotos] = useState ([])
    const [cartItems, setCartItems] = useState ([])

    useEffect(()=>{ 
        fetch('https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json')
        .then(Response => Response.json())
        .then(data => setAllPhotos(data))
    },[])

    function addPhotoToCart (newImgToCart){
        setCartItems( cart => [ ...cart, newImgToCart] )
    }

    function removePhotoFromCart (itemToRemove){
        const newArr = [...cartItems]
        var index = newArr.indexOf(itemToRemove)
        if (index !== -1) {
            newArr.splice(index, 1)    
            setCartItems ( newArr )
          }
    }

    function toggleFavorite(id){
        const updatedArr = allPhotos.map( photo => {
            if(photo.id === id){
               return { ...photo, isFavorite: !photo.isFavorite }
            }
            return photo
        }
        )
        setAllPhotos(updatedArr) 
    } 

    return (
        <Context.Provider value={{allPhotos, cartItems, toggleFavorite, addPhotoToCart, removePhotoFromCart}}>
            {props.children}
        </Context.Provider>
    )

}

export { ContextProvider, Context }