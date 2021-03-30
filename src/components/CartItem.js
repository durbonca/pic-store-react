import {useContext, useState} from "react"
import {Context} from "../context/context"

export default function CartItem ({img, price}){

    const {removePhotoFromCart} = useContext(Context) 
    const [hovered, setHovered] = useState(false)

    function trashClass(){
        if ( hovered ) {return 'fill' }
        else { return 'line' }
    }

    return(
        <div className="cart-item">
            <i  onMouseOver ={()=>setHovered(true)}
                onMouseOut ={()=>setHovered(false)}  
                className={`ri-delete-bin-${trashClass()}`} 
                onClick={() => removePhotoFromCart(img.id)}>
            </i>
            <img src={img.url} width="130px" alt="img"/>
            <p>{price.toLocaleString("en-US", {style: "currency", currency: "USD" } ) }</p>
        </div>
    )
}