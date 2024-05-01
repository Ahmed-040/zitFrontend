import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Hi from './components/Hi'
import Plans from './components/Plans';
import MyOrders from './components/MyOrders';
import Success from './components/Success';
const App = () => {
    return (
      <Router>
        <div style={{ backgroundColor: '#DEF2F1', minHeight: '100vh' }}>
        <Routes>
          <Route path='/' element={<Signup/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/hi" element={<Hi />} />
          <Route path="/plans" element={<Plans></Plans>}/>
          <Route path="/MyOrders" element={<MyOrders></MyOrders>} />
          <Route path="/success/:orderId" element={<Success />} />
      </Routes>
        </div>
     
  </Router>
    )
};

export default App;
