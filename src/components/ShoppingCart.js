import React, { useContext } from 'react';
// 6 Now that we're providing our cart data, we can start to refactor our Navigation and ShoppingCart components.
// Let's start with our ShoppingCart component first. Go ahead and refactor the ShoppingCart route to no longer use render props. This will throw us an error, but we'll be able to resolve it quickly.
import Item from './ShoppingCartItem';
import { CartContext } from '../contexts/CartContext';

// Components

const ShoppingCart = () => {
	const { cart } = useContext(CartContext);
	// console.log('in SC ', );
	const getCartTotal = () => {
		return cart.reduce((acc, value) => {
			return acc + value.price;
		}, 0).toFixed(2);
	};

	return (
		<div className="shopping-cart">
			{cart.map(item => (
				<Item key={item.id} {...item} />
			))}

			<div className="shopping-cart__checkout">
				<p>Total: ${getCartTotal()}</p>
				<button>Checkout</button>
			</div>
		</div>
	);
};

export default ShoppingCart;
