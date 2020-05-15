import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
// 6 Now that we're providing our cart data, we can start to refactor our Navigation and ShoppingCart components.
// 6 While were at it let's go ahead and remove the props from our navigation as well.
import { CartContext } from '../contexts/CartContext';
const Navigation = () => {
	const cart = useContext(CartContext);
	return (
		<div className="navigation">
			<NavLink to="/">Products</NavLink>
			<NavLink to="/cart">
				Cart <span>{cart.length}</span>
			</NavLink>
		</div>
	);
};

export default Navigation;
