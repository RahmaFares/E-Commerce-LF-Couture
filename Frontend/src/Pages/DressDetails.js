import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { WeddingProducts, SoireeProducts, AccessoriesProducts } from '../All_Data';

const Container = styled.div`
  padding: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const ImageContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  max-height: 100%;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
`;

const Price = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const Color = styled.div`
  font-size: 16px;
  margin-bottom: 10px;
`;

const Size = styled.div`
  font-size: 16px;
  margin-bottom: 10px;
`;

const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const QuantityButton = styled.div`
  width: 30px;
  height: 30px;
  border: 1px solid #e5e5e5;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const Quantity = styled.span`
  font-size: 18px;
  font-weight: 600;
  margin: 0 15px;
`;

const AddToCartButton = styled.button`
  padding: 15px 20px;
  font-size: 18px;
  font-weight: 600;
  background-color: #000;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #333;
  }
`;

const DressDetails = () => {
  const { id } = useParams(); // Get the id parameter from the URL
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchData = () => {
      // Check if the product is in WeddingProducts
      const weddingProduct = WeddingProducts.find((product) => product.id === parseInt(id));
      if (weddingProduct) {
        setProduct(weddingProduct);
        return;
      }

      // Check if the product is in SoireeProducts
      const soireeProduct = SoireeProducts.find((product) => product.id === parseInt(id));
      if (soireeProduct) {
        setProduct(soireeProduct);
        return;
      }

      // Check if the product is in AccessoriesProducts
      const accessoryProduct = AccessoriesProducts.find((product) => product.id === parseInt(id));
      if (accessoryProduct) {
        setProduct(accessoryProduct);
        return;
      }

      // If the product is not found, you can handle it as per your requirements
    };

    fetchData();
  }, [id]);

  const handleQuantityChange = (type) => {
    if (type === "dec" && quantity > 1) {
      setQuantity(quantity - 1);
    } else if (type === "inc") {
      setQuantity(quantity + 1);
    }
  };

  return (
    <Container>
      {product ? (
        <Wrapper>
          <ImageContainer>
            <Image src={product.highResolutionImg} alt={product.title} />
          </ImageContainer>
          <InfoContainer>
            <Title>{product.title}</Title>
            <Description>{product.description}</Description>
            <Price>${product.price.toFixed(2)}</Price>
            <Color>Color: {product.color}</Color>
            <Size>Size: {product.size}</Size>
            <QuantityContainer>
              <QuantityButton onClick={() => handleQuantityChange("dec")}>-</QuantityButton>
              <Quantity>{quantity}</Quantity>
              <QuantityButton onClick={() => handleQuantityChange("inc")}>+</QuantityButton>
            </QuantityContainer>
            <AddToCartButton>Add to Cart</AddToCartButton>
          </InfoContainer>
        </Wrapper>
      ) : (
        <div>Product not found</div>
      )}
    </Container>
  );
};

export default DressDetails;
