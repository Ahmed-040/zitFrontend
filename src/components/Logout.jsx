import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Remove the JWT token from local storage
        localStorage.removeItem('token');
        // Navigate to the login page
        navigate('/login');
    };

    return (
        <div className="logout">
            <p className="dropdown-item" onClick={handleLogout}>Logout</p>
        </div>
    );
};

export default Logout;
