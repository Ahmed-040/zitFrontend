import React from 'react';
import Header from './Header';
import Plans from './Plans';
import MyOrders from './MyOrders';
import Footer from './Footer';
import Testimonials from './Testimonial';
import Faq from './Faq'
import { Fab } from '@mui/material';
import Carousel from './Carousel';
import Features from './Features';
const Hi = () => {
    // Sample plans data
   

    return (
        
        <div className="landing-page">
          
            <Header></Header>
            <Carousel></Carousel>
            <Features></Features>
            <Testimonials></Testimonials>
           
             <Faq></Faq>
            <footer className="footer">
               
             <Footer></Footer>
            </footer>
        </div>
    );
};

export default Hi;

