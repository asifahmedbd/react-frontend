import './cart-dropdown.styles.css';
import { useContext } from 'react';
import CartItem from '../cart-item/cart-item.component';
import { CartContext } from '../../contexts/cart.context';

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
            {cartItems.map((item) => (
                <CartItem key={item.id} cartItem={item} />
            ))}
            </div>
            <button className="btn btn-primary px-3"><i className="fa fa-shopping-cart mr-1" /> Checkout</button>
        </div>
    )
}

export default CartDropdown;