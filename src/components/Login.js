// Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../styles/login.css';

const Login = () => {
    const navigate = useNavigate(); // Hook for navigation
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log("Form Data:", formData); // Log form data for debugging

        // Simulate successful login
        // For real-world usage, you'll need to send a request to your backend for authentication
        // For example, you can use fetch or Axios to make a POST request to your backend API
        // If login is successful, navigate to the "Hi" page
        // navigate('/hi');
        try {
            const response = await fetch('https://fullstackzit.onrender.com/api/customers/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            
            if (response.ok) {
                const data = await response.json();
                console.log('Token data:', data);
                // Save the token in localStorage or sessionStorage
                // localStorage.setItem('token', data.token);
                // localStorage.setItem('token', JSON.stringify({ token: data.token }));
                localStorage.setItem('token', JSON.stringify(data));
                // Redirect to another page or display a success message
                window.location.href = '/Hi';
            } else {
                // If login failed, show an error message
                const msg=await response.text()
                alert('Login failed:'+msg);
                // console.error('Login failed:', await response.text());
            }
        } catch (error) {
            console.error('Error logging in:', error);
            // Show an error message to the user
        }
    };

    return (
        // <div>
        //     <h2>Login</h2>
        //     <form onSubmit={handleSubmit}>
        //         <div>
        //             <label>Username:</label>
        //             <input type="text" name="username" value={formData.username} onChange={handleChange} />
        //         </div>
        //         <div>
        //             <label>Password:</label>
        //             <input type="password" name="password" value={formData.password} onChange={handleChange} />
        //         </div>
        //         <button type="submit">Login</button>
        //     </form>
        // </div>
        <div className="login-container">
            <h2 className="login-heading">Login</h2>
            <form onSubmit={handleSubmit} className="login-form">
                <div className="form-group">
                    <label className="form-label">Username:</label>
                    <input type="text" name="username" value={formData.username} onChange={handleChange} className="form-input" required />
                </div>
                <div className="form-group">
                    <label className="form-label">Password:</label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} className="form-input" required />
                </div>
                <button type="submit" className="form-button">Login</button>
                <p className="form-link">New user? </p>
                <Link to="/"className="button-link">Signup</Link>
            </form>
        </div>
    );
};

export default Login;
