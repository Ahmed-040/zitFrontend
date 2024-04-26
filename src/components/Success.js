// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import Header from './Header';
// import '../styles/success.css'; 

// const Success = () => {
//     const location = useLocation();
//     const planName = location.state && location.state.planName;

//     return (
//         <div className="success-page">
//         <div className="success-container">
//             <Header />
//             <h2 className="success-heading">Order Placed Successfully</h2>
//             {planName && <p className="success-message">You have purchased the {planName} plan.</p>}
//             <p className="success-message">Thank you for your purchase!</p>
//             <Link to="/myorders" className="success-link">View My Orders</Link>
//         </div>
//     </div>
//     );
// };

// export default Success;
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Header from './Header';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import '../styles/success.css'; 

const Success = () => {
    const location = useLocation();
    const planName = location.state && location.state.planName;

    return (
        <div className="success-page">
            <Header />
            <Container maxWidth="sm" className="success-container">
                <Typography className='success-heading' variant="h4" align="center" gutterBottom>
                    Order Placed Successfully
                </Typography>
                {planName && 
                <Typography variant="body1" align="center" gutterBottom>
                    You have purchased the <strong>{planName}</strong> plan.
                </Typography>
                }
                <Typography variant="body1" align="center">
                    Thank you for your purchase!
                </Typography>
                <Box mt={4} display="flex" justifyContent="center">
                    <Button component={Link} to="/myorders" variant="contained" color="primary">
                        View My Orders
                    </Button>
                </Box>
            </Container>
        </div>
    );
};

export default Success;
