import React from 'react';
import '../Footer/styles.css';

const Footer = () => {
    return (
    <footer className="footer footer-center p-5 bg-base-300 text-base-content rounded">
        <nav className="grid grid-flow-col">
            <a className="link link-hover">A Propos</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Condition d'utilisation</a>
        </nav> 
        <aside>
            <p>Copyright © 2023 - All right reserved by Loc'Event</p>
        </aside>
    </footer>
    );
};

export default Footer;