import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const OrderSummary = () => {
    const { orderId } = useParams();
    const [orderDetails, setOrderDetails] = useState(null);

    useEffect(() => {
        fetch(`/api/orders/${orderId}`)
            .then(response => response.json())
            .then(data => setOrderDetails(data.order))
            .catch(error => console.error('Error fetching order details:', error));
    }, [orderId]);

    return (
        <div>
            {orderDetails ? (
                <>
                    <h1>Order Summary</h1>
                </>
            ) : (
                <p>Loading order details...</p>
            )}
        </div>
    );
};

export default OrderSummary;
