import React, { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { DropdownContainer, DropdownMenu, DropdownMenuItem, OpenLinksButton, BoldItalicItem } from '../styles/Dropdown.style'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // add event listener to window when component mounts
    window.addEventListener('click', handleClickOutside);
    // remove event listener when component unmounts
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  // Use useSelector to access the cart data from the Redux store
  const cart = useSelector((state) => state.cart);

  // Check if cart and cart.items are defined before accessing them
  const totalItemsInCart = cart?.items?.reduce((total, item) => total + item.quantity, 0) || 0;

  return (
    <DropdownContainer ref={dropdownRef}>
      <OpenLinksButton onClick={handleDropdown}> &#8801;</OpenLinksButton>
      <DropdownMenu open={isOpen}>
        <Link to="/register">
          <BoldItalicItem>Login/Sign Up</BoldItalicItem>
        </Link>
        <Link to="/wishlist">
          <BoldItalicItem>
            <FontAwesomeIcon icon={faHeart} /> Favorites
          </BoldItalicItem>
        </Link>
        <Link to="/ShoppingCart">
          <BoldItalicItem>
            <FontAwesomeIcon icon={faShoppingCart} /> Cart({totalItemsInCart > 0 && (
              <span>{totalItemsInCart}</span>
            )})
          </BoldItalicItem>
        </Link>
        <DropdownMenuItem href="#">
          <BoldItalicItem>Logout</BoldItalicItem>
        </DropdownMenuItem>
      </DropdownMenu>
    </DropdownContainer>
  );
};

export default Dropdown;
