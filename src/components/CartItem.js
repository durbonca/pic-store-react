import {useContext} from "react"
import {Context} from "../context/context"

export default function CartItem ({img, price}){

    const {removePhotoFromCart} = useContext(Context) 

    return(
        <div className="cart-item">
            <i className="ri-delete-bin-line" onClick={() => removePhotoFromCart(img.id)}></i>
            <img src={img.url} width="130px" alt="img"/>
            <p>{price.toLocaleString("en-US", {style: "currency", currency: "USD" } ) }</p>
        </div>
    )
}