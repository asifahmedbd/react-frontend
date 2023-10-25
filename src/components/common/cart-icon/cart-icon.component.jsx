import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
		<a href className="btn border" onClick={toggleIsCartOpen}>
        <i className="fas fa-shopping-cart text-primary" />
        <span className="badge item-count">0</span>
      </a>
	);
};

export default CartIcon;