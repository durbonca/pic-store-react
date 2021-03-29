import {useContext} from "react"
import {Context} from "../context/context"

export default function CartItem ({img}){

    const {removePhotoFromCart} = useContext(Context) 

    return(
        <div className="cart-item">
            <i className="ri-delete-bin-line" onClick={() => removePhotoFromCart(img.id)}></i>
            <img src={img.url} width="130px" alt="img"/>
            <p>$5.99</p>
        </div>
    )
}