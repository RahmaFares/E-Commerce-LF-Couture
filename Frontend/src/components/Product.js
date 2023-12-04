import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import styled from "styled-components";
import { addToCart } from '../redux/Cart/cartSlice';
import { addToWishlist } from '../redux/Wishlist/wishlistSlice';

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
`;

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    &:hover ${Info} {
        opacity: 1;
    }
`;

const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    //background-color: white;
    position: absolute;
`;

const Image = styled.img`
    height: 75%;
    z-index: 2;
`;

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;
    &:hover {
        background-color: #e9f5f5;
        transform: scale(1.1);
    }
`;

const Product = ({ item }) => {
  const user = useSelector((state) => state.user.currentUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    if (user) {
      dispatch(addToCart(item));
    } else {
      navigate('/login');
    }
  };

  const handleAddToWishlist = () => {
    if (user) {
      dispatch(addToWishlist(item));
    } else {
      navigate('/login');
    }
  };

  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon onClick={handleAddToCart}>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <Link to={`/product/${item.id}`}>
            <SearchOutlined />
          </Link>
        </Icon>
        <Icon onClick={handleAddToWishlist}>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
