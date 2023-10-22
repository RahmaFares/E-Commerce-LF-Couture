import { combineReducers } from 'redux';

// Import your other reducers here
// Example:
// import userReducer from './userReducer';
// import productReducer from './productReducer';

import cartReducer from './cartReducer';

const rootReducer = combineReducers({
    // user: userReducer,         // If you have a user reducer
    // products: productReducer,  // If you have a product reducer
    cart: cartReducer
});

export default rootReducer;
