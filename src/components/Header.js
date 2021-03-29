import {useContext} from "react"
import {Context} from "../context/context"
import {Link} from "react-router-dom"


export default function Header() {   

    const {cartItems} = useContext(Context)  

    function cartButton(){
        if (cartItems.length) {
            return <Link to="/cart"><i className="ri-shopping-cart-fill ri-fw ri-2x"></i></Link>
        }
        else{
            return <Link to="/cart"><i className="ri-shopping-cart-line ri-fw ri-2x"></i></Link>
        }
    }
    
    return (    
        <header>
            <Link to="/"><h2>Pic Some</h2></Link>
            {cartButton()}
        </header>
        )
}