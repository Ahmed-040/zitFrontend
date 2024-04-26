import React from 'react';
import '../styles/plancard.css';
import { useNavigate } from 'react-router-dom';
// import jwt from 'jsonwebtoken';
const PlanCard = ({ plan }) => {
    const navigate = useNavigate();
    function handlePurchase(){
        const token = localStorage.getItem('token'); // Get the token from localStorage

        // Check if token is available
        if (!token) {
            alert("Please Login to make a purchase");
            console.error('Token not found');
            return;
        }

        const orderData = {
            token: token,
            plan_id: plan.plan_id,
            status: 'Pending' // Assuming status is always 'Pending' for a new order
        };
        console.log(orderData);

        // Make the API call to create an order
        fetch('https://fullstackzit.onrender.com/api/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderData)
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Failed to create order');
            }
        })
        .then(data => {
            console.log('Order created successfully:', data);
            // Handle success (maybe redirect to a success page)
            navigate(`/success/${data.order_id}`, { state: { planName: plan.plan_name } });
        })
        .catch(error => {
            console.error('Error creating order:', error);
            // Handle error (maybe display an error message)
        });
        
    }
     // Generate a random image ID (change the number for different images)
     const imageId = Math.floor(Math.random() * 1000);

     // URL of a random placeholder image from Lorem Picsum
     const imageUrl = `https://picsum.photos/200/200?random=${imageId}`;
    return (
        <div className="plan-card">
            <img src={imageUrl} alt="some-image" className="plan-image" />
            <div className="plan-details">
                <h3 className="plan-name">{plan.plan_name}</h3>
                <p className="plan-description">{plan.plan_desc}</p>
                <p><strong>Term:</strong> {plan.plan_term}</p>
                <p><strong>Amount:</strong> ${plan.amount}</p>
                <p><strong>Expected Return:</strong> ${plan.expected_return}</p>
                <button className="purchase-button" onClick={handlePurchase}>Purchase</button>
            </div>
        </div>
    );
};

export default PlanCard;
