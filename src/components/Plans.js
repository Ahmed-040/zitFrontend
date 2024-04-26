import React, { useState, useEffect } from 'react';
import PlanCard from './Plancard';
import Header from './Header';
import '../styles/plancard.css';
import Footer from './Footer';
const Plans = () => {
    const [plans, setPlans] = useState([]);

    useEffect(() => {
        const fetchPlans = async () => {
            try {
                const response = await fetch('https://fullstackzit.onrender.com/api/plans');
                if (response.ok) {
                    const data = await response.json();
                    setPlans(data);
                } else {
                    console.error('Failed to fetch plans:', response.statusText);
                }
            } catch (error) {
                console.error('Error fetching plans:', error);
            }
        };

        fetchPlans();
    }, []);

    return (
        <div>
            <Header></Header>
             <div className="plans-container">
            <h2>Plans Available</h2>
            <div className="plan-cards">
                {plans.map(plan => (
                    <PlanCard key={plan.id} plan={plan} />
                ))}
            </div>
            <Footer></Footer>
        </div>
       

        </div>
       
    );
};

export default Plans;
