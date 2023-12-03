import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DropdownContainer, DropdownMenu, DropdownMenuItem, OpenLinksButton, BoldItalicItem } from '../styles/Dropdown.style';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Logout } from '../redux/userRedux';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart);
  const wishlist = useSelector((state) => state.wishlist); // Assuming you have wishlist state in redux
  const totalItemsInCart = cart?.items?.reduce((total, item) => total + item.quantity, 0) || 0;
  const totalItemsInWishlist = wishlist?.items.length || 0; // Count of items in the wishlist
  const dispatch = useDispatch();

  const handleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const navigateTo = (path) => {
    if (currentUser) {
      navigate(path);
    } else {
      navigate('/login');
    }
  };

  const handleLogout = () => {
    dispatch(Logout());
    navigate('/login');
  };

  return (
    <DropdownContainer ref={dropdownRef}>
      <OpenLinksButton onClick={handleDropdown}> &#8801;</OpenLinksButton>
      <DropdownMenu open={isOpen}>
        {!currentUser && (
          <>
            <Link to="/register">
              <BoldItalicItem>Sign Up</BoldItalicItem>
            </Link>
            <Link to="/login">
              <BoldItalicItem>login</BoldItalicItem>
            </Link>
          </>
        )}
        {currentUser && (
          <>
            <BoldItalicItem onClick={() => navigateTo('/wishlist')}>
              <FontAwesomeIcon icon={faHeart} /> Favorites ({totalItemsInWishlist})
            </BoldItalicItem>
            <BoldItalicItem onClick={() => navigateTo('/shoppingcart')}>
              <FontAwesomeIcon icon={faShoppingCart} /> Cart({totalItemsInCart})
            </BoldItalicItem>
            <DropdownMenuItem onClick={handleLogout}>
              <BoldItalicItem>Logout</BoldItalicItem>
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenu>
    </DropdownContainer>
  );
};

export default Dropdown;
