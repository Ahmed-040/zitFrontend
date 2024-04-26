import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../styles/signup.css'
const Signup = () => {
    const navigate = useNavigate(); 
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        email: '',
        name: '',
        address_line_1: '', // Corrected field name
        address_line_2: '', // Corrected field name
        city: '',
        state: '',
        country: '',    
        phone_number: '', // Corrected field name
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
        console.log("Form Data:", formData); // Log form data for debugging
        try {
            const response = await fetch('https://fullstackzit.onrender.com/api/customers/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            
    
            console.log(response.status); // Log the response status
    // const body = await response.json()
    // console.log(body)

    
   
            if (response.ok) {
                // Signup successful, navigate to login page
                navigate('/login');
                alert('Signup successful! Please login again with your credentials.');
            } else {
                console.error('Signup failed:', await response.text()); // Log the error message
                // Show error message to user
            }
        } catch (error) {
            console.error('Error signing up:', error);
            // Show error message to user
        }
    };
    

    return (
        <div className="signup-container">
            <h2>Signup</h2>
            <form onSubmit={handleSubmit} className="signup-form">
              
                <label className="form-label">Username:</label>
                <input type="text" name="username" value={formData.username} onChange={handleChange} className="form-input" required />
                <br />
                <label className="form-label">Password:</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} className="form-input" required />
                <br />
                <label  className="form-label">Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-input" required />
                <br />
                <label  className="form-label">Name:</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-input" required />
              
                
                <br />
    
                <label  className="form-label">Address Line 1:</label>
                <input type="text" name="address_line_1" value={formData.address_line_1} onChange={handleChange} className="form-input" required />
                <br />
                <label  className="form-label">Address Line 2:</label>
                <input type="text" name="address_line_2" value={formData.address_line_2} className="form-input" onChange={handleChange} />
                <br />
                <label  className="form-label">City:</label>
                <input type="text" name="city" value={formData.city} onChange={handleChange} className="form-input" required />
                <br />
                <label  className="form-label">State:</label>
                <input type="text" name="state" value={formData.state} onChange={handleChange} className="form-input" required />
                <br />
                <label  className="form-label">Country:</label>
                <input type="text" name="country" value={formData.country} onChange={handleChange} className="form-input" required />
                <br />
                <label  className="form-label">Phone Number:</label>
                <input type="tel" name="phone_number" value={formData.phone_number} onChange={handleChange}className="form-input" required />
                <br />
                <button type="submit" className="form-button">Signup</button>
            </form>
            <p  className="form-text">Already a user?</p> 
          <Link to="/login" className='login'>Login</Link>
        </div>
        
       
    );
};

export default Signup;
