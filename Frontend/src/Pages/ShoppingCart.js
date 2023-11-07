import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { removeFromCart, decreaseQuantity, increaseQuantity } from '../redux/Cart/cartSlice';
import { FaTrash, FaPlus, FaMinus } from 'react-icons/fa';
import bgphoto from '../../src/assets/images/bgphoto.jpg';
import { useNavigate } from 'react-router-dom';


const Container = styled.div`
   background-image: url(${bgphoto});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  position: relative;
  z-index: 0;
  padding: 40px;
  min-height: 100vh;
  font-family: 'Arial', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 34px;
  margin-bottom: 50px;
  color: #333;     // Darkened color for emphasis
  font-weight: 600; // Slightly bold for a modern feel
  letter-spacing: -1px;  // Tighten the letter spacing
`;

const CartItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 100%;
  max-width: 700px;  // Limit width for better readability
`;

const CartItem = styled.div`
  background: #fff;
  padding: 20px;
  border: 1px solid #e5e7eb;   // subtle border for definition
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: box-shadow 0.2s;  // smooth transition for hover effect

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);  // subtle shadow on hover
  }
`;

const CartItemDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const CartItemTitle = styled.h3`
  font-size: 20px;
  color: #2d3748;
  font-weight: 500;  // Make it slightly bold
`;

const CartItemPrice = styled.p`
  font-size: 18px;
  color: #4a5568;
  font-weight: 400;  // Regular weight
`;

const TotalAmount = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 24px;
  margin-top: 40px;
  color: #000;  // Make the total black as requested
`;


const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;  // centers its children horizontally
  width: 100%;
  max-width: 600px;     // you can adjust this value as needed
  text-align: center;   // ensures the text inside is centered
  margin-top: 40px;
`;

const CheckoutButton = styled.button`
  background: linear-gradient(135deg, #2a2a2a, #4a4a4a); // dark grays
  color: #f5f5f5;  // light gray text for contrast
  border: 1px solid #1a1a1a; // subtle border
  padding: 12px 24px;
  cursor: pointer;
  font-size: 18px;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1); // subtle shadow for depth
  transition: all 0.3s ease-in-out;
  &:hover {
    background: linear-gradient(135deg, #4a4a4a, #2a2a2a); // invert the gradient on hover
    transform: translateY(-2px);  // subtle lift on hover
  }
`;

const ControlsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px; // Spacing between controls and trash icon
`;

const RemoveButton = styled.button`
  background: none;
  color: #e53e3e;
  border: none;
  cursor: pointer;
  font-size: 20px;
  transition: color 0.2s;
  &:hover {
    color: #c53030;
  }
`;

const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const QuantityInput = styled.input`
  width: 50px;
  padding: 5px;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const QuantityButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
  transition: color 0.2s;
  color: #4a5568;
  &:hover {
    color: #2d3748;
  }
`;

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const items = cart ? cart.items : [];
  const totalAmount = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleDecreaseQuantity = (id) => {
    dispatch(decreaseQuantity(id));
  };

  const handleIncreaseQuantity = (id) => {
    dispatch(increaseQuantity(id));
  };

  const navigate = useNavigate();

  const navigateToCheckout = () => {
    navigate('/checkout');
  };

  return (
    <Container>
      <Title>Your Shopping Cart</Title>
      <CartItems>
        {items.map((item) => (
          <CartItem key={item.id}>
            <CartItemDetails>
              <img src={item.image} alt={item.title} width="100" height="100" />
              <div>
                <CartItemTitle>{item.title}</CartItemTitle>
                <CartItemPrice>$ {item.price} x {item.quantity}</CartItemPrice>
              </div>
            </CartItemDetails>
            <ControlsWrapper> {/* New wrapper for alignment */}
              <QuantityControl>
                <QuantityButton onClick={() => handleDecreaseQuantity(item.id)}>
                  <FaMinus />
                </QuantityButton>
                <QuantityInput type="number" readOnly value={item.quantity} />
                <QuantityButton onClick={() => handleIncreaseQuantity(item.id)}>
                  <FaPlus />
                </QuantityButton>
              </QuantityControl>
              <RemoveButton onClick={() => handleRemove(item.id)}>
                <FaTrash />
              </RemoveButton>
            </ControlsWrapper>
          </CartItem>
        ))}
      </CartItems>
      <CheckoutContainer>
        <TotalAmount>
          <span>Total:</span>
          <span>$ {totalAmount.toFixed(2)}</span>
        </TotalAmount>
        <CheckoutButton onClick={navigateToCheckout}>Checkout</CheckoutButton>
      </CheckoutContainer>
    </Container>
  );
};

export default ShoppingCart;

