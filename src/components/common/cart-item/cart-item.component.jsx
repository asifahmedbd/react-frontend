import './cart-item.styles.css';

const CartItem = ({ cartItem }) => {
    const {product_title, quantity } = cartItem;
    return (
        <div>
            <h2>{product_title}</h2>
            <span>{quantity}</span>
        </div>
    )
}

export default CartItem;