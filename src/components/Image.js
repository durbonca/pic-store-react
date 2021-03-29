import { useState, useContext } from "react"
import { Context } from "../context/context"

export default function Image ({className, img}) {
    
    const [hovered, setHovered] = useState(false)
    const { cartItems } = useContext(Context)
    const { toggleFavorite, addPhotoToCart, removePhotoFromCart } = useContext(Context)

    function heartIcon(){
        if (img.isFavorite){
            return <i onClick={()=>toggleFavorite(img.id)} className="ri-heart-fill favorite"></i> 
        } else if(hovered) {
            return <i onClick={()=>toggleFavorite(img.id)} className="ri-heart-line favorite"></i>
        }
    }
    
    function cartIcon(){
        if(cartItems.some(cartItem => cartItem.id === img.id)) { 
            return <i onClick={ () => removePhotoFromCart(img.id) } className="ri-shopping-cart-fill cart"></i>
        }
        else if(hovered){
            return <i onClick={ () => addPhotoToCart(img) } className="ri-add-circle-line cart"></i> 
        }
    }

    return (
        <div 
            onMouseOver={()=>setHovered(true)} 
            onMouseLeave={()=>setHovered(false)} 
            className={`${className} image-container`}
        >
            {heartIcon()}
            {cartIcon()}   
            <img src={img.url} alt="img" className="image-grid"/>
        </div>
    )
}