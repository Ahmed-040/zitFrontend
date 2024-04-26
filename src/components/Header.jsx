// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import Logout from './Logout'; 
// import '../styles/header.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faUser } from '@fortawesome/free-solid-svg-icons';
// const Header = () => {
//     const [showDropdown, setShowDropdown] = useState(false);

//     const toggleDropdown = () => {
//         setShowDropdown(!showDropdown);
//     };

//     return (
//         <header className='header'>
//             <div className="header-left">
//                 <Link to="/" className="logo">
//                     Site Name
//                 </Link>
//             </div>
//             <div className="header-middle">
//                 <img src="/path/to/your/icon.png" alt="Icon" className="icon" />
//             </div>
//             <div className="header-right">
//                 <div className="header-links">
//                     <Link to="/Hi" className="header-link">Home</Link>
//                     <Link to="/plans" className="header-link">Plans</Link>
//                     <Link to="/MyOrders" className="header-link">My Orders</Link>
//                 </div>
//                 <div className="user-icon" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
//                 <FontAwesomeIcon icon={faUser} className="user-icon-image" />
                   
//                     {showDropdown && (
//                         <div className="dropdown">
//                             <Logout />
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </header>
//     );
// };

// export default Header;
// import React, { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import Logout from './Logout'; 
// import '../styles/header.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faUser } from '@fortawesome/free-solid-svg-icons';

// const Header = () => {
//     const [showDropdown, setShowDropdown] = useState(false);
//     const location = useLocation();
//     const token = localStorage.getItem('token');

//     const toggleDropdown = () => {
//         setShowDropdown(!showDropdown);
//     };

//     return (
//         <header className='header'>
//             <div className="header-left">
//                 <Link to="/" className="logo">
//                     Site Name
//                 </Link>
//             </div>
//             <div className="header-middle">
//                 <img src="/path/to/your/icon.png" alt="Icon" className="icon" />
//             </div>
//             <div className="header-right">
//                 <div className="header-links">
//                     <Link to="/Hi" className={`header-link ${location.pathname === '/Hi' ? 'active' : ''}`}>Home</Link>
//                     <Link to="/plans" className={`header-link ${location.pathname === '/plans' ? 'active' : ''}`}>Plans</Link>
//                     <Link to="/MyOrders" className={`header-link ${location.pathname === '/MyOrders' ? 'active' : ''}`}>My Orders</Link>
//                 </div>
//                 {!token && (
//                     <Link to="/login" style={{marginLeft:"10px"}} className="signup-button">Login</Link>
//                 )}
//                 <div className="user-icon" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
//                     <FontAwesomeIcon icon={faUser} className="user-icon-image" />
//                     {showDropdown && (
//                         <div className="dropdown">
//                             <Logout />
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </header>
//     );
// };

// export default Header;
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logout from './Logout'; 
import '../styles/header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const location = useLocation();
    const token = localStorage.getItem('token');

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <header className='header'>
            <div className="header-left">
                <Link to="/Hi" className="logo">
                Fortune's Forge
                </Link>
            </div>
            <div className="header-middle">
                <img src="/iccon.png" alt="Icon" className="icon" />
            </div>
            <div className="header-right">
                <div className="header-links">
                    <Link to="/Hi" className={`header-link ${location.pathname === '/Hi' ? 'active' : ''}`}>Home</Link>
                    <Link to="/plans" className={`header-link ${location.pathname === '/plans' ? 'active' : ''}`}>Plans</Link>
                    <Link to="/MyOrders" className={`header-link ${location.pathname === '/MyOrders' ? 'active' : ''}`}>My Orders</Link>
                </div>
                {!token && (
                    <Link to="/login" style={{marginLeft:"15px"}} className="signup-button">Login</Link>
                )}
                {token && (
                    <div className="user-icon" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
                        <FontAwesomeIcon icon={faUser} className="user-icon-image" />
                        {showDropdown && (
                            <div className="dropdown">
                                <Logout />
                            </div>
                        )}
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
