export default function CartItem ({img}){
    return(
        <div className="cart-item">
            <i className="ri-delete-bin-line"></i>
            <img src={img.url} width="130px" alt="img"/>
            <p>$5.99</p>
        </div>
    )
}