import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromWishlist } from '../redux/Wishlist/wishlistSlice';

const WishlistContainer = styled.div`
    background-color: #f2f2f2; /* Updated background color */
    border: 1px solid #e0e0e0;
    border-radius: 10px; /* Increased border radius for a softer look */
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2); /* Enhanced box shadow */
    padding: 20px;
    margin: 20px;
    text-align: center;
`;

const WishlistTitle = styled.h1`
    font-size: 24px;
    color: #333;
    margin-bottom: 20px;
`;

const WishlistItems = styled.ul`
    list-style: none;
    padding: 0;
`;

const WishlistItem = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background-color: #fff; /* White background for list items */
    border: 1px solid #e0e0e0;
    border-radius: 10px; /* Increased border radius for list items */
    margin-bottom: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Subtle box shadow */
`;

const WishlistItemDetails = styled.div`
    display: flex;
    align-items: center;
`;

const WishlistItemImage = styled.img`
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 10px; /* Increased border radius for images */
    margin-right: 20px;
`;

const WishlistItemInfo = styled.div`
    text-align: left;
`;

const WishlistItemTitle = styled.h3`
    font-size: 18px;
    color: #333;
    margin: 0;
`;

const WishlistItemPrice = styled.p`
    font-size: 16px;
    color: #666;
    margin: 0;
`;

const WishlistRemoveButton = styled.button`
    background-color: #ff6347;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 10px; /* Increased border radius for the button */
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #e74c3c;
    }
`;

const Wishlist = () => {
    const wishlist = useSelector((state) => state.wishlist.items);
    const dispatch = useDispatch();

    const handleRemoveFromWishlist = (item) => {
        dispatch(removeFromWishlist(item.id)); // We just need the item ID to identify which item to remove
    };

    return (
        <WishlistContainer>
            <WishlistTitle>Your Wishlist ({wishlist.length})</WishlistTitle>
            {wishlist.length === 0 ? (
                <p>Your wishlist is empty.</p>
            ) : (
                <WishlistItems>
                    {wishlist.map((item) => (
                        <WishlistItem key={item.id}>
                            <WishlistItemDetails>
                                <WishlistItemImage src={item.img} alt={item.title} />
                                <WishlistItemInfo>
                                    <WishlistItemTitle>{item.title}</WishlistItemTitle>
                                    <WishlistItemPrice>${item.price}</WishlistItemPrice>
                                </WishlistItemInfo>
                            </WishlistItemDetails>
                            <WishlistRemoveButton onClick={() => handleRemoveFromWishlist(item)}>
                                Remove
                            </WishlistRemoveButton>
                        </WishlistItem>
                    ))}
                </WishlistItems>
            )}
        </WishlistContainer>
    );
};

export default Wishlist;
