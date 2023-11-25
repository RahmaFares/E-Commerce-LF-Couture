import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useNavigate } from 'react-router-dom';


// Styled components for the checkout page
const CheckoutContainer = styled.div`
    padding: 20px;
    background-color: #f8f9fa;
    border-radius: 8px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
    max-width: 400px;
    margin: 40px auto;
`;

const CheckoutTitle = styled.h2`
    font-size: 24px;
    margin-bottom: 20px;
`;

const PaymentForm = styled.form`
    display: flex;
    flex-direction: column;
`;

const CardElementWrapper = styled.div`
    padding: 10px;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    margin-bottom: 20px;
`;

const CheckoutButton = styled.button`
    padding: 10px 20px;
    font-size: 16px;
    background-color: #007bff;
    color: #ffffff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
        background-color: #0056b3;
    }
`;

const TotalAmount = styled.div`
    font-size: 18px;
    margin-bottom: 20px;
    font-weight: bold;
`;

const Checkout = () => {
    const [loading, setLoading] = useState(false);
    const stripe = useStripe();
    const elements = useElements();
    // const navigate = useNavigate();

    // Fetch total amount from Redux store
    const totalAmount = useSelector(state =>
        state.cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
    );

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) return;

        setLoading(true);

        const card = elements.getElement(CardElement);
        const result = await stripe.createToken(card);

        if (result.error) {
            console.error(result.error);
            alert('Payment failed. Please try again.');
            setLoading(false);
            return;
        }

        // Convert total amount to cents for Stripe processing
        const amountInCents = totalAmount * 100;

        try {
            const response = await fetch("http://localhost:5000/api/payment/charge", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    token: result.token.id,
                    amount: amountInCents
                })
            });

            const data = await response.json();

            if (data.success) {
                alert('Payment successful!');
                // navigate(`/order-summary/${data.order._id}`);
            } else {
                alert('Payment failed on server. Please try again.');
            }
        } catch (error) {
            console.error("There was an issue with the payment:", error);
            alert('Payment failed. Please try again.');
        }

        setLoading(false);
    };

    return (
        <><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <CheckoutContainer>
                <CheckoutTitle>Checkout</CheckoutTitle>
                <TotalAmount>Total: ${totalAmount.toFixed(2)}</TotalAmount>
                <PaymentForm onSubmit={handleSubmit}>
                    <CardElementWrapper>
                        <CardElement />
                    </CardElementWrapper>
                    <CheckoutButton disabled={!stripe || loading}>
                        {loading ? 'Processing...' : 'Pay Now'}
                    </CheckoutButton>
                </PaymentForm>
            </CheckoutContainer><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /></>
    );
};

export default Checkout;
