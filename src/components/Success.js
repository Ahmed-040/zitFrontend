import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Header from './Header';
import '../styles/success.css'; 

const Success = () => {
    const location = useLocation();
    const planName = location.state && location.state.planName;

    return (
        <div className="success-page">
        <div className="success-container">
            <Header />
            <h2 className="success-heading">Order Placed Successfully</h2>
            {planName && <p className="success-message">You have purchased the {planName} plan.</p>}
            <p className="success-message">Thank you for your purchase!</p>
            <Link to="/myorders" className="success-link">View My Orders</Link>
        </div>
    </div>
    );
};

export default Success;
