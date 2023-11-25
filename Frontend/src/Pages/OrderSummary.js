import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const OrderSummary = () => {
    const { orderId } = useParams();
    const [orderDetails, setOrderDetails] = useState(null);

    useEffect(() => {
        // Fetch the order details from the backend using the orderId
        fetch(`/api/orders/${orderId}`)
            .then(response => response.json())
            .then(data => setOrderDetails(data.order))
            .catch(error => console.error('Error fetching order details:', error));
    }, [orderId]);

    // Display the order details
    return (
        <div>
            {orderDetails ? (
                <>
                    <h1>Order Summary</h1>
                    {/* Display order details here */}
                </>
            ) : (
                <p>Loading order details...</p>
            )}
        </div>
    );
};

export default OrderSummary;
