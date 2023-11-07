import React from 'react';

const StripePayment = ({ stripe }) => {
    useEffect(() => {
        if (stripe) {
            const elements = stripe.elements();
            const card = elements.create('card');
            card.mount('#card-element');
        }
    }, [stripe]);

    return (
        <div id="card-element"></div>
    );
};

export default StripePayment;
