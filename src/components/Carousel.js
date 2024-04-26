import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import '../styles/carousel.css';

const Carousel = () => {
    const items = [
        <img key="image1" src="./invest1.jpeg" alt="Image 1" />,
        <img key="image2" src="./invest.jpeg" alt="Image 2" />,
        <img key="image3" src="./invest2.jpeg" alt="Image 3" />,
        
    ];

    return (
        <div style={{marginTop:"100px"}}>
            <h2>Explore from a variety of Plans</h2>
             <AliceCarousel
            autoPlay
            autoPlayInterval={1500}
            infinite
            disableButtonsControls
            items={items}
        />
        </div>
       
    );
}

export default Carousel;
