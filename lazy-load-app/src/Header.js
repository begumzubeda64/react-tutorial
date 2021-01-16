import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="menu-container">
            <Link className="btn-primary" to="/">Home</Link>
            <Link className="btn-primary" to="/home">Another</Link>
        </div>
    )
}

export default Header;