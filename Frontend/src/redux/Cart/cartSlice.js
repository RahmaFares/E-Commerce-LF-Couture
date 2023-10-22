import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            // Check if item is already in the cart
            const existingItem = state.items.find(item => item.id === action.payload.id);

            if (existingItem) {
                // If item exists, increment the quantity
                existingItem.quantity += 1;
            } else {
                // If item does not exist, add it with a quantity of 1
                state.items.push({ ...action.payload, quantity: 1 });
            }
        },
        removeFromCart: (state, action) => {
            // Filter out the item with the provided ID
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        decreaseQuantity: (state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload);
            if (existingItem && existingItem.quantity > 1) {
                existingItem.quantity -= 1;
            } else {
                // If item quantity is 1, remove the item completely
                state.items = state.items.filter(item => item.id !== action.payload);
            }
        },
        increaseQuantity: (state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload);
            if (existingItem) {
                existingItem.quantity += 1;
            }
        },
        // Add other reducers as needed (e.g., clearCart, etc.)
    },
});

export const { addToCart, removeFromCart, decreaseQuantity, increaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
