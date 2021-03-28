import { useState, useContext } from "react"
import { Context } from "../context/context"

export default function Image ({className, img}) {
    
    const [hovered, setHovered] = useState(false)
    const { cartItems } = useContext(Context)
    const { toggleFavorite, addPhotoToCart } = useContext(Context)

    function checkCart () {
        if(cartItems.some(cartItem => cartItem.id === img.id)){
            return true
        }else{
            return false
        }
    }

    function heartIcon(){
        if (!img.isFavorite){
            return <i onClick={()=>toggleFavorite(img.id)} className="ri-heart-line favorite"></i>
        }
    }

    function heartIconFav(){
        if(img.isFavorite){
            return <i onClick={()=>toggleFavorite(img.id)} className="ri-heart-fill favorite"
           >
           </i> 
        }
    }
    
    function cartIcon(){
        if(checkCart()) { 
            return <i className="ri-shopping-cart-fill cart"></i>
        }else{
            return <i onClick={ () => addPhotoToCart(img) }className="ri-add-circle-line cart"></i> 
        }
    }

    return (
        <div 
            onMouseOver={()=>setHovered(true)} 
            onMouseLeave={()=>setHovered(false)} 
            className={`${className} image-container`}
        >
            {hovered && 
                <>
                {heartIcon()}
                {cartIcon()}
                </>
            }
            {heartIconFav()}
            
            <img src={img.url} alt="img" className="image-grid"/>
        </div>
    )
}