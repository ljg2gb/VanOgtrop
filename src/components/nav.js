import React from "react";
import { Link } from 'gatsby';
import '../pages/index';
import '../pages/about';
import '../pages/books';
import '../pages/miscellany';
import '../pages/press';
import '../pages/press';
import '../pages/contact';

export default function Nav() {
    return (
      <nav>
        <Link className='home logo' to='/'>Kristin van Ogtrop</Link>
        <div className="header-links-container">
          <Link to="/about" 
            className="header-link"
            activeStyle={{
              color: "#e9d14d"
            }}
          >About</Link>
          <Link to="/books" 
            className="header-link" 
            activeStyle={{
              color: "#e9d14d"
            }}
          >Books</Link>
          <Link to="/miscellany" 
            className="header-link"
            activeStyle={{
              color: "#e9d14d"
            }}
            >Miscellany</Link>
          <Link to="/press" 
            className="header-link" 
            activeStyle={{
              color: "#e9d14d"
            }}
          >Press</Link>
          <Link to="/events" 
            className="header-link" 
            activeStyle={{
              color: "#e9d14d"
            }}
          >Events</Link>
          <Link to="/contact" 
            className="header-link" 
            activeStyle={{
              color: "#e9d14d"
            }}
          >Contact</Link>
        </div>
      </nav>
    )
}