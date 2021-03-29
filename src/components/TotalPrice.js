export default function TotalPrice ({cartItems, price}){
    return <strong>{ (cartItems.length * price).toLocaleString("en-US", {style: "currency", currency: "USD" } ) } </strong>
}