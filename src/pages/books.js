import React from "react";
import { Link } from "gatsby";
import Nav from '../components/nav';
import Footer from '../components/footer';

export default function Books() {
  return (
    <div>
        <Nav/>
        <div className='main'>
            <h1>Books</h1>
            <Link to="/book">Book Component</Link>
        </div>
        <Footer/>
    </div>
  )
}