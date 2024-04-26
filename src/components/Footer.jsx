import React from 'react';
import '../styles/Footer.css'; // Import your footer styles

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section about">
                    <h2 className="footer-heading">About Us</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className="contact">
                        <span><i className="fas fa-phone"></i> +1234567890</span>
                        <span><i className="fas fa-envelope"></i> info@example.com</span>
                    </div>
                    <div className="socials">
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-linkedin"></i></a>
                    </div>
                </div>

                <div className="footer-section links">
                    <h2 className="footer-heading">Quick Links</h2>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Plans</a></li>
                        <li><a href="#">My Orders</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>

                <div className="footer-section contact-form">
                    <h2 className="footer-heading">Contact Us</h2>
                    <form action="#">
                        <input type="email" name="email" className="text-input contact-input" placeholder="Your email address" />
                        <textarea name="message" className="text-input contact-input" placeholder="Your message"></textarea>
                        <button type="submit" className="btn btn-primary">Send</button>
                    </form>
                </div>
            </div>

            <div className="footer-bottom">
                &copy; 2024 Fortune's Forge. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
