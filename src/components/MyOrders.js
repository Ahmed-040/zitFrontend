import React, { useState, useEffect } from 'react';
import OrderCard from './OrderCard';
import Header from './Header';
import '../styles/OrderCard.css'
import Footer from './Footer';
const MyOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    throw new Error('Token not found');
                }

                const response = await fetch('https://fullstackzit.onrender.com/api/orders/customers', {
                    headers: {
                        'Authorization': token
                    }
                });
                if (response.ok) {
                    const data = await response.json();
                    setOrders(data);
                } else {
                    console.error('Failed to fetch orders:', response.statusText);
                }
            } catch (error) {
                console.error('Error fetching orders:', error);
            }
        };

        fetchOrders();
    }, []);

    return (
        <div className="orders-container">
            <Header></Header>
            <h2>My Orders</h2>
            <div className="order-cards">
                {orders.map(order => (
                    <OrderCard key={order.order_id} order={order} />
                ))}
            </div>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default MyOrders;
