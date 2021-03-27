import { useState, useContext } from "react"
import { Context } from "../context/context"

export default function Image ({className, img}) {
    
    const [hovered, setHovered] = useState(false)
    const { toggleFavorite, addPhotoToCart } = useContext(Context)

    return (
        <div 
            onMouseOver={()=>setHovered(true)} 
            onMouseLeave={()=>setHovered(false)} 
            className={`${className} image-container`}
        >
            {hovered && 
                <>
                <i 
                    onClick={()=>toggleFavorite(img.id)} 
                    className="ri-heart-line favorite"
                >
                </i>
                <i 
                    onClick={ () => addPhotoToCart(img) }
                    className="ri-add-circle-line cart"
                ></i>
                </>
            }

            {img.isFavorite &&
               <i onClick={()=>toggleFavorite(img.id)} 
                 className="ri-heart-fill favorite"
                >
                </i> }

            <img src={img.url} alt="img" className="image-grid"/>
        </div>
    )
}