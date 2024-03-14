import React from "react";
import {Link} from 'react-router-dom/';

function Header(){

    const scrollToAbout = () => {
        const aboutSection = document.getElementById('about');
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    };

    return(
        <nav className="header">
            <img src="/logo.jpg" alt="Logo" class="logo" /> 
            <div class="logo-tag">
                <p class="p1">Bookish</p>
                <p class="p2">Explore, Discover, Read</p>
            </div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/category">Category</Link></li>
                <li><a href="/books">Search</a></li>
                <li><a href="/Register">Register</a></li>
                <li><Link to="/Login">Login</Link></li>
            </ul>
    </nav>
    )

}

export default Header;