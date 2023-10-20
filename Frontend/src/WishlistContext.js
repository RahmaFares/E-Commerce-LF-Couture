import React, { createContext, useContext, useState } from 'react';

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
    const [wishlist, setWishlist] = useState([]);

    const addToWishlist = (item) => {
        setWishlist([...wishlist, item]);
    };

    const removeFromWishlist = (item) => {
        const updatedWishlist = wishlist.filter((wishlistItem) => wishlistItem.id !== item.id);
        setWishlist(updatedWishlist);
    };

    const contextValue = {
        wishlist,
        addToWishlist,
        removeFromWishlist,
    };

    return (
        <WishlistContext.Provider value={contextValue}>
            {children}
        </WishlistContext.Provider>
    );
};

export const useWishlist = () => {
    return useContext(WishlistContext);
};
