import {useState, useContext} from "react"
import {Context} from "../context/context"
import CartItem from "../components/CartItem"
import TotalPrice from "../components/TotalPrice"

export default function Cart (){

    const ITEM_PRICE = 5.99
    const {cartItems, clearCart} = useContext(Context)
    const cartItemsList = cartItems.map( item => <CartItem key={item.id} img={item} price={ITEM_PRICE}/>)
    const [ordering, setOrdering] = useState(false)

    function placeOrder (e) {
        e.target.disabled = true
        setOrdering ( true )
            setTimeout(() => 
                {
                setOrdering ( false )
                clearCart()
                console.log('Order placed!')
                } , 3000 )
    }

    return(
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemsList}
            <p className="total-cost">Total: <TotalPrice cartItems={cartItems} price={ITEM_PRICE}/></p>
            { cartItems.length ? 
                <div className="order-button">       
                <button 
                    onClick={placeOrder}
                    disabled={ !cartItems.length ? true : false}
                >{ordering ? 'Ordering...' : 'Place Order'}</button>
            </div> : <p>no items in shopping cart</p>}
        </main>
    )
}