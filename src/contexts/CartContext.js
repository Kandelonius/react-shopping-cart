// STEP 5 - Create the CartContext
import React, { createContext } from 'react';

// 5 Now that we have refactored our Products component to utilize Context API let's refactor our Cart and Navigation Component to use Context API as well.
// 5 To start create a new file in our contexts folder named CartContext.js, this context is going to be utilized by our ShoppingCart and Navigation component.
// Inside of our new CartContext import createContext and create a new context named CartContext.

export const CartContext = createContext();
