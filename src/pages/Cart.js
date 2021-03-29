import {useContext} from "react"
import {Context} from "../context/context"
import CartItem from "../components/CartItem"
import TotalPrice from "../components/TotalPrice"

export default function Cart (){

    const ITEM_PRICE = 5.99
    const {cartItems} = useContext(Context)
    const cartItemsList = cartItems.map( item => <CartItem key={item.id} img={item} price={ITEM_PRICE}/>)

    return(
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemsList}
            <p className="total-cost">Total: <TotalPrice cartItems={cartItems} price={ITEM_PRICE}/></p>
            <div className="order-button">
                <button>Place Order</button>
            </div>
        </main>
    )
}