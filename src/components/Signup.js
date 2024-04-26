// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import '../styles/signup.css'
// const Signup = () => {
//     const navigate = useNavigate(); 
//     const [formData, setFormData] = useState({
//         username: '',
//         password: '',
//         email: '',
//         name: '',
//         address_line_1: '', // Corrected field name
//         address_line_2: '', // Corrected field name
//         city: '',
//         state: '',
//         country: '',    
//         phone_number: '', // Corrected field name
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value
//         });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         console.log("Form Data:", formData); // Log form data for debugging
//         try {
//             const response = await fetch('https://fullstackzit.onrender.com/api/customers/signup', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(formData)
//             });
            
    
//             console.log(response.status); // Log the response status
//     // const body = await response.json()
//     // console.log(body)

    
   
//             if (response.ok) {
//                 // Signup successful, navigate to login page
//                 navigate('/login');
//                 alert('Signup successful! Please login again with your credentials.');
//             } else {
//                 console.error('Signup failed:', await response.text()); // Log the error message
//                 // Show error message to user
//             }
//         } catch (error) {
//             console.error('Error signing up:', error);
//             // Show error message to user
//         }
//     };
    

//     return (
//         <div className="signup-container">
//             <h2>Signup</h2>
//             <form onSubmit={handleSubmit} className="signup-form">
              
//                 <label className="form-label">Username:</label>
//                 <input type="text" name="username" value={formData.username} onChange={handleChange} className="form-input" required />
//                 <br />
//                 <label className="form-label">Password:</label>
//                 <input type="password" name="password" value={formData.password} onChange={handleChange} className="form-input" required />
//                 <br />
//                 <label  className="form-label">Email:</label>
//                 <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-input" required />
//                 <br />
//                 <label  className="form-label">Name:</label>
//                 <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-input" required />
              
                
//                 <br />
    
//                 <label  className="form-label">Address Line 1:</label>
//                 <input type="text" name="address_line_1" value={formData.address_line_1} onChange={handleChange} className="form-input" required />
//                 <br />
//                 <label  className="form-label">Address Line 2:</label>
//                 <input type="text" name="address_line_2" value={formData.address_line_2} className="form-input" onChange={handleChange} />
//                 <br />
//                 <label  className="form-label">City:</label>
//                 <input type="text" name="city" value={formData.city} onChange={handleChange} className="form-input" required />
//                 <br />
//                 <label  className="form-label">State:</label>
//                 <input type="text" name="state" value={formData.state} onChange={handleChange} className="form-input" required />
//                 <br />
//                 <label  className="form-label">Country:</label>
//                 <input type="text" name="country" value={formData.country} onChange={handleChange} className="form-input" required />
//                 <br />
//                 <label  className="form-label">Phone Number:</label>
//                 <input type="tel" name="phone_number" value={formData.phone_number} onChange={handleChange}className="form-input" required />
//                 <br />
//                 <button type="submit" className="form-button">Signup</button>
//             </form>
//             <p  className="form-text">Already a user?</p> 
//           <Link to="/login" className='login'>Login</Link>
//         </div>
        
       
//     );
// };

// export default Signup;
import * as React from 'react';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Signup() {
    const navigate = useNavigate(); 
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        email: '',
        name: '',
        address_line_1: '',
        address_line_2: '',
        city: '',
        state: '',
        country: '',    
        phone_number: '',
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
        try {
            const response = await fetch('https://fullstackzit.onrender.com/api/customers/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                navigate('/login');
                alert('Signup successful! Please login again with your credentials.');
            } else {
                console.error('Signup failed:', await response.text());
            }
        } catch (error) {
            console.error('Error signing up:', error);
        }
    };

    return (
        <ThemeProvider theme={createTheme()}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign up
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="username"
                                label="Username"
                                name="username"
                                autoComplete="username"
                                autoFocus
                                value={formData.username}
                                onChange={handleChange}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="new-password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="name"
                                label="Name"
                                name="name"
                                autoComplete="name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                            <TextField
                                margin="normal"
                                fullWidth
                                id="address_line_1"
                                label="Address Line 1"
                                name="address_line_1"
                                autoComplete="address-line1"
                                value={formData.address_line_1}
                                onChange={handleChange}
                            />
                            <TextField
                                margin="normal"
                                fullWidth
                                id="address_line_2"
                                label="Address Line 2"
                                name="address_line_2"
                                autoComplete="address-line2"
                                value={formData.address_line_2}
                                onChange={handleChange}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="city"
                                label="City"
                                name="city"
                                autoComplete="city"
                                value={formData.city}
                                onChange={handleChange}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="state"
                                label="State"
                                name="state"
                                autoComplete="state"
                                value={formData.state}
                                onChange={handleChange}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="country"
                                label="Country"
                                name="country"
                                autoComplete="country"
                                value={formData.country}
                                onChange={handleChange}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="phone_number"
                                label="Phone Number"
                                name="phone_number"
                                autoComplete="tel"
                                value={formData.phone_number}
                                onChange={handleChange}
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign Up
                            </Button>
                            <Grid container>
                                <Grid item>
                                    <Link to="/login" variant="body2">
                                        Already have an account? Login
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}

export default Signup;

