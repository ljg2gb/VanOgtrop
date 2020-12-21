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
        <Link className='home logo' to='/about'>Kristin Van Ogtrop</Link>
        <div className="header-links-container">
          <Link to="/about" className="header-link">About</Link>
          <Link to="/books" className="header-link">Books</Link>
          <Link to="/miscellany" className="header-link">Miscellany</Link>
          <Link to="/press" className="header-link">Press</Link>
          <Link to="/events" className="header-link">Events</Link>
          <Link to="/contact" className="header-link">Contact</Link>
        </div>
      </nav>
    )
}