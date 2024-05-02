import React from 'react';
import Nav from './Nav';

const Header = () => {
    return (
        <header className="blog-header">
            <h1 className="blog-title">Sartre's List</h1>
            <h2 className="blog-subtitle">Better-Dressed People</h2>
            <Nav />
        </header>
    );
};

export default Header;