import React from 'react';

const Footer = () => {
    return (
        <footer className="blog-footer">
            <nav className="footer-nav">
                <ul>
                    <li><a href="/womens">Women's</a></li>
                    <li><a href="/mens">Men's</a></li>
                    <li><a href="/on-the-street">On the Street</a></li>
                    <li><a href="/thecatwalk">The Catwalk</a></li>
                    <li><a href="/adwatch">AdWatch</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/tips">Tips</a></li>
                </ul>
            </nav>
            <h2 className='copyright'>©️ 2013 Valet Industries, Inc.</h2>
        </footer>
    );
};

export default Footer;