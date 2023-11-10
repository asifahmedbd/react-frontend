import './cart-dropdown.styles.css';
import { useContext } from 'react';
import CartItem from '../cart-item/cart-item.component';
import { CartContext } from '../../contexts/cart.context';
import { Link } from "react-router-dom";

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
            {cartItems.map((item) => (
                <CartItem key={item.id} cartItem={item} />
            ))}
            </div>
            <Link className="btn btn-primary px-3" to={"/cartPage"}><i className="fa fa-shopping-cart mr-1" /> Checkout</Link>
        </div>
    )
}

export default CartDropdown;