import React from 'react';
import '../styles/OrderCard.css'
const OrderCard = ({ order }) => {
    const { plan_name, amount, expected_return, status, transaction_id } = order;

    return (
        <div className="order-card">
            <div className="order-details">
                <h3 className="plan-name">{plan_name}</h3>
                <p><strong>Amount:</strong> ${amount}</p>
                <p><strong>Expected Return:</strong> ${expected_return}</p>
                <p><strong>Status:</strong> {status}</p>
                {transaction_id && (
                    <p><strong>Transaction ID:</strong> {transaction_id} (For future reference)</p>
                )}
            </div>
        </div>
    );
};

export default OrderCard;
