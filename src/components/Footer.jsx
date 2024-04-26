// import React from 'react';
// import '../styles/Footer.css'; // Import your footer styles

// const Footer = () => {
//     return (
//         <footer className="footer">
//             <div className="footer-content">
//                 <div className="footer-section about">
//                     <h2 className="footer-heading">About Us</h2>
//                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//                     <div className="contact">
//                         <span><i className="fas fa-phone"></i> +1234567890</span>
//                         <span><i className="fas fa-envelope"></i> info@example.com</span>
//                     </div>
//                     <div className="socials">
//                         <a href="#"><i className="fab fa-facebook"></i></a>
//                         <a href="#"><i className="fab fa-twitter"></i></a>
//                         <a href="#"><i className="fab fa-instagram"></i></a>
//                         <a href="#"><i className="fab fa-linkedin"></i></a>
//                     </div>
//                 </div>

//                 <div className="footer-section links">
//                     <h2 className="footer-heading">Quick Links</h2>
//                     <ul>
//                         <li><a href="#">Home</a></li>
//                         <li><a href="#">Plans</a></li>
//                         <li><a href="#">My Orders</a></li>
//                         <li><a href="#">About</a></li>
//                         <li><a href="#">Contact</a></li>
//                     </ul>
//                 </div>

//                 <div className="footer-section contact-form">
//                     <h2 className="footer-heading">Contact Us</h2>
//                     <form action="#">
//                         <input type="email" name="email" className="text-input contact-input" placeholder="Your email address" />
//                         <textarea name="message" className="text-input contact-input" placeholder="Your message"></textarea>
//                         <button type="submit" className="btn btn-primary">Send</button>
//                     </form>
//                 </div>
//             </div>

//             <div className="footer-bottom">
//                 &copy; 2024 Fortune's Forge. All rights reserved.
//             </div>
//         </footer>
//     );
// };

// export default Footer;
import React from 'react';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

const Footer = () => {
    return (
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: { xs: 4, sm: 8 },
                py: { xs: 8, sm: 10 },
                textAlign: { sm: 'center', md: 'left' },
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    width: '100%',
                    justifyContent: 'space-between',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 4,
                        minWidth: { xs: '100%', sm: '60%' },
                    }}
                >
                    <Box sx={{ ml: '-15px' }}>
                        <img
                            src={
                                '/iccon.png'
                            }
                            style={{ width: '140px', height: 'auto' }}
                            alt="logo of sitemark"
                        />
                    </Box>
                    <Typography variant="body2" fontWeight={600} gutterBottom>
                        Newsletter
                    </Typography>
                    <Typography variant="body2" color="text.secondary" mb={2}>
                        Subscribe to our newsletter for weekly updates and promotions.
                    </Typography>
                    <Stack direction="row" spacing={1} useFlexGap>
                        <TextField
                            id="outlined-basic"
                            hiddenLabel
                            size="small"
                            variant="outlined"
                            fullWidth
                            aria-label="Enter your email address"
                            placeholder="Your email address"
                            inputProps={{
                                autocomplete: 'off',
                                ariaLabel: 'Enter your email address',
                            }}
                        />
                        <Button variant="contained" color="primary" sx={{ flexShrink: 0 }}>
                            Subscribe
                        </Button>
                    </Stack>
                </Box>
                <Box
                    sx={{
                        display: { xs: 'none', sm: 'flex' },
                        flexDirection: 'column',
                        gap: 1,
                    }}
                >
                    <Typography variant="body2" fontWeight={600}>
                        Product
                    </Typography>
                    <Link color="text.secondary" href="#">
                        Features
                    </Link>
                    <Link color="text.secondary" href="#">
                        Testimonials
                    </Link>
                    <Link color="text.secondary" href="#">
                        Highlights
                    </Link>
                    <Link color="text.secondary" href="#">
                        Pricing
                    </Link>
                    <Link color="text.secondary" href="#">
                        FAQs
                    </Link>
                </Box>
                <Box
                    sx={{
                        display: { xs: 'none', sm: 'flex' },
                        flexDirection: 'column',
                        gap: 1,
                    }}
                >
                    <Typography variant="body2" fontWeight={600}>
                        Company
                    </Typography>
                    <Link color="text.secondary" href="#">
                        About us
                    </Link>
                    <Link color="text.secondary" href="#">
                        Careers
                    </Link>
                    <Link color="text.secondary" href="#">
                        Press
                    </Link>
                </Box>
                <Box
                    sx={{
                        display: { xs: 'none', sm: 'flex' },
                        flexDirection: 'column',
                        gap: 1,
                    }}
                >
                    <Typography variant="body2" fontWeight={600}>
                        Legal
                    </Typography>
                    <Link color="text.secondary" href="#">
                        Terms
                    </Link>
                    <Link color="text.secondary" href="#">
                        Privacy
                    </Link>
                    <Link color="text.secondary" href="#">
                        Contact
                    </Link>
                </Box>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    pt: { xs: 4, sm: 8 },
                    width: '100%',
                    borderTop: '1px solid',
                    borderColor: 'divider',
                }}
            >
                <div>
                    <Link color="text.secondary" href="#">
                        Privacy Policy
                    </Link>
                    <Typography display="inline" sx={{ mx: 0.5, opacity: 0.5 }}>
                        &nbsp;•&nbsp;
                    </Typography>
                    <Link color="text.secondary" href="#">
                        Terms of Service
                    </Link>
                    <Typography variant="body2" color="text.secondary" mt={1}>
                        {'Copyright © '}
                        <Link href="/hi">Fortune'sForge&nbsp;</Link>
                        {new Date().getFullYear()}
                    </Typography>
                </div>
                <Stack
                    direction="row"
                    justifyContent="left"
                    spacing={1}
                    useFlexGap
                    sx={{
                        color: 'text.secondary',
                    }}
                >
                    <IconButton
                        color="inherit"
                        href="https://github.com/mui"
                        aria-label="GitHub"
                        sx={{ alignSelf: 'center' }}
                    >
                        <FacebookIcon />
                    </IconButton>
                    <IconButton
                        color="inherit"
                        href="https://twitter.com/MaterialUI"
                        aria-label="X"
                        sx={{ alignSelf: 'center' }}
                    >
                        <TwitterIcon />
                    </IconButton>
                    <IconButton
                        color="inherit"
                        href="https://www.linkedin.com/company/mui/"
                        aria-label="LinkedIn"
                        sx={{ alignSelf: 'center' }}
                    >
                        <LinkedInIcon />
                    </IconButton>
                </Stack>
            </Box>
        </Container>
    );
}

export default Footer;
