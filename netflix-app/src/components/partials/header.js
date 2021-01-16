import React from 'react';
import Logo from './logo';
import Navigation from './navigation';
import Search from './search';
import UserProfile from './user-profile';

const Header = ({onSubmit}) => {
    return (
        <header className="Header">
            <Logo />
            <Navigation />
            <Search onSubmit={onSubmit} />
            <UserProfile />
        </header>
    )
}

export default Header;