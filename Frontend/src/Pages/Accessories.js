import React, { useContext } from 'react';
import { AccessoriesProducts } from "../All_Data";
import Product from "../components/Product";
import styled from "styled-components";
import Products from "../components/Products";

const AccessoriesContainer = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const CategoryContainer = styled.div`
    flex: 1;
    margin: 20px;
    min-width: 300px;
`;

const CategoryTitle = styled.h2`
  font-size: 24px;
  margin bottom: 15px;
  text-align: center;
  color: #333;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: bold;
`;

const ProductList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
`;

const ProductItem = styled.div`
    background: transparent;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: background 0.3s ease;

    &:hover {
        background: #f0f0f0;
    }
`;

const Accessories = () => {

    return (
        <AccessoriesContainer>
            <CategoryContainer>
                <CategoryTitle>Wedding Accessories</CategoryTitle>
                <Products category="accessories" data={AccessoriesProducts} />
                <ProductList>
                    {AccessoriesProducts.map((product) => (
                        <ProductItem key={product.id}>
                            <Product item={product} />
                        </ProductItem>
                    ))}
                </ProductList>
            </CategoryContainer>
        </AccessoriesContainer>
    );
};

export default Accessories;
