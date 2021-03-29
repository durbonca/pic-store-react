import {useContext} from "react"
import {Context} from "../context/context"
import CartItem from "../components/CartItem"

export default function Cart (){

    const {cartItems} = useContext(Context)
    const cartItemsList = cartItems.map( item => <CartItem key={item.id} img={item}/>)

    return(
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemsList}
            <p className="total-cost">Total: </p>
            <div className="order-button">
                <button>Place Order</button>
            </div>
        </main>
    )
}