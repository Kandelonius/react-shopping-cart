import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

import { ProductContext } from './contexts/ProductContext';
// STEP 6 - Providing data with CartContext
// 6 Let's go ahead and bring our newly created CartContext into our App.js and wrap all of our components inside of our CartContext.Provider. Make sure our ProductContext.Provider is still the root provider.
import { CartContext } from './contexts/CartContext';
// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);
	console.log(cart);
	const addItem = item => {
		// Step 1 - Add item functionality
		// add the given item to the cart
		// item.preventDefault();
		setCart([...cart, item]); 
	};

	return (
		<div className="App">
			{/* 3 Wrap all of your components/routes in App.js inside of ProductContext.Provider component. */}
			{/* 3 Next pass a value prop to your Provider. */}
			{/* 3 In the value prop we'll pass in the products state, and an addItem function that will allow us to add books to the cart. */}
			{/* 3 Now that we're providing our products state and addItem function we can simplify our products route a bit. */}
			{/* 3 After refactoring you'll notice a few errors... Don't worry we'll clean those up shortly! */}

			{/* 6 Let's go ahead and bring our newly created CartContext into our App.js and wrap all of our components inside of our CartContext.Provider. Make sure our ProductContext.Provider is still the root provider. */}
			<CartContext.Provider value={[cart]}>
				<ProductContext.Provider value={{ products, addItem }}>
					<Navigation />
				</ProductContext.Provider>
			</CartContext.Provider>

			{/* Routes */}
			<CartContext.Provider value={[cart]}>
				<ProductContext.Provider value={{ products, addItem }}>
					<Route exact path="/">
						<Products />
					</Route>
				</ProductContext.Provider>
			</CartContext.Provider>

			<CartContext.Provider value={[cart]}>
				<ProductContext.Provider value={{ products, addItem }}>
					<Route path="/cart">
						<ShoppingCart />
					</Route>
				</ProductContext.Provider>
			</CartContext.Provider>
		</div>
	);
}

export default App;
