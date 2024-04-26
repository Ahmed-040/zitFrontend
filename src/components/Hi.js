import React from 'react';
import Header from './Header';
import Plans from './Plans';
import MyOrders from './MyOrders';
import Footer from './Footer';
const Hi = () => {
    // Sample plans data
   

    return (
        
        <div className="landing-page">
            {/* Header */}
            <Header></Header>

            {/* Content */}
            {/* <main className="content">
                <h2>Plans Available</h2>
                <div className="plans-container">
                 
                    {plans.map(plan => (
                        <div key={plan.id} className="plan">
                            <h3>{plan.name}</h3>
                            <p>{plan.price}</p>
                            <ul>
                                {plan.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                            <button>Subscribe</button>
                        </div>
                    ))}
                </div>
            </main> */}
            <Plans></Plans>
            <MyOrders></MyOrders>

            {/* Footer */}
            <footer className="footer">
               
             <Footer></Footer>
            </footer>
        </div>
    );
};

export default Hi;
