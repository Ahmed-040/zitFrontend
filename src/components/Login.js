    // // Login.js
    // import React, { useState } from 'react';
    // import { useNavigate } from 'react-router-dom';
    // import { Link } from 'react-router-dom';
    // import '../styles/login.css';

    // const Login = () => {
    //     const navigate = useNavigate(); // Hook for navigation
    //     const [formData, setFormData] = useState({
    //         username: '',
    //         password: ''
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
    //         // console.log("Form Data:", formData); // Log form data for debugging

    //         // Simulate successful login
    //         // For real-world usage, you'll need to send a request to your backend for authentication
    //         // For example, you can use fetch or Axios to make a POST request to your backend API
    //         // If login is successful, navigate to the "Hi" page
    //         // navigate('/hi');
    //         try {
    //             const response = await fetch('https://fullstackzit.onrender.com/api/customers/login', {
    //                 method: 'POST',
    //                 headers: {
    //                     'Content-Type': 'application/json'
    //                 },
    //                 body: JSON.stringify(formData)
    //             });
                
    //             if (response.ok) {
    //                 const data = await response.json();
    //                 console.log('Token data:', data);
    //                 // Save the token in localStorage or sessionStorage
    //                 // localStorage.setItem('token', data.token);
    //                 // localStorage.setItem('token', JSON.stringify({ token: data.token }));
    //                 localStorage.setItem('token', JSON.stringify(data));
    //                 // Redirect to another page or display a success message
    //                 window.location.href = '/Hi';
    //             } else {
    //                 // If login failed, show an error message
    //                 const msg=await response.text()
    //                 alert('Login failed:'+msg);
    //                 // console.error('Login failed:', await response.text());
    //             }
    //         } catch (error) {
    //             console.error('Error logging in:', error);
    //             // Show an error message to the user
    //         }
    //     };

    //     return (
    //         // <div>
    //         //     <h2>Login</h2>
    //         //     <form onSubmit={handleSubmit}>
    //         //         <div>
    //         //             <label>Username:</label>
    //         //             <input type="text" name="username" value={formData.username} onChange={handleChange} />
    //         //         </div>
    //         //         <div>
    //         //             <label>Password:</label>
    //         //             <input type="password" name="password" value={formData.password} onChange={handleChange} />
    //         //         </div>
    //         //         <button type="submit">Login</button>
    //         //     </form>
    //         // </div>
    //         <div className="login-container">
    //             <h2 className="login-heading">Login</h2>
    //             <form onSubmit={handleSubmit} className="login-form">
    //                 <div className="form-group">
    //                     <label className="form-label">Username:</label>
    //                     <input type="text" name="username" value={formData.username} onChange={handleChange} className="form-input" required />
    //                 </div>
    //                 <div className="form-group">
    //                     <label className="form-label">Password:</label>
    //                     <input type="password" name="password" value={formData.password} onChange={handleChange} className="form-input" required />
    //                 </div>
    //                 <button type="submit" className="form-button">Login</button>
    //                 <p className="form-link">New user? </p>
    //                 <Link to="/"className="button-link">Signup</Link>
    //             </form>
    //         </div>
    //     );
    // };

    // export default Login;
    import * as React from 'react';
    import { useState } from 'react';
    import { useNavigate } from 'react-router-dom';
    import { Link } from 'react-router-dom';
    import Avatar from '@mui/material/Avatar';
    import Button from '@mui/material/Button';
    import CssBaseline from '@mui/material/CssBaseline';
    import TextField from '@mui/material/TextField';
    import FormControlLabel from '@mui/material/FormControlLabel';
    import Checkbox from '@mui/material/Checkbox';
    import Grid from '@mui/material/Grid';
    import Paper from '@mui/material/Paper';
    import Box from '@mui/material/Box';
    import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
    import Typography from '@mui/material/Typography';
    import { createTheme, ThemeProvider } from '@mui/material/styles';
    import '../styles/login.css';
    
    const theme = createTheme();
    
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
                    localStorage.setItem('token', JSON.stringify(data));
                    window.location.href = '/Hi';
                } else {
                    const msg = await response.text();
                    alert('Login failed: ' + msg);
                }
            } catch (error) {
                console.error('Error logging in:', error);
            }
        };
    
        return (
            <ThemeProvider theme={theme}>
                <Grid container component="main" sx={{ height: '100vh' }}>
                    <CssBaseline />
                    {/* <Grid item xs={false} sm={4} md={7} className="login-background" /> */}
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
                                Login
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
                                    autoComplete="current-password"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                                <FormControlLabel
                                    control={<Checkbox value="remember" color="primary" />}
                                    label="Remember me"
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Login
                                </Button>
                                <Grid container>
                                    <Grid item xs>
                                        <Link href="#" variant="body2">
                                            Forgot password?
                                        </Link>
                                    </Grid>
                                    <Grid item>
                                        <Link to="/" variant="body2">
                                            {"Don't have an account? Sign Up"}
                                        </Link>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </ThemeProvider>
        );
    };
    
    export default Login;
    