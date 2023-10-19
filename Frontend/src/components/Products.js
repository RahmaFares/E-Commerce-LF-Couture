import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Product from "./Product";
import { Link, useLocation } from 'react-router-dom';

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = () => {
    const [products, setProducts] = useState([]);
    const location = useLocation();
    const pathname = location.pathname;

    // Define the endpoint based on the URL pathname
    let endpoint = "";
    if (pathname === "/dresses") {
        endpoint = "http://localhost:5000/dresses";
    } else if (pathname === "/accessories") {
        endpoint = "http://localhost:5000/accessories";
    }

    useEffect(() => {
        if (endpoint) {
            const fetchData = async () => {
                try {
                    const res = await axios.get(endpoint);
                    setProducts(res.data);
                } catch (err) {
                    // Handle error
                }
            };

            fetchData();
        }
    }, [endpoint]);

    return (
        <Container>
            {products.map((item) => (
                <Link to={`/product/${item.id}`} key={item.id}>
                    <Product item={item} />
                </Link>
            ))}
        </Container>
    );
};

export default Products;
