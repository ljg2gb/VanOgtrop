import React from "react";
import { Link } from "gatsby";
import Nav from '../components/nav';
import Footer from '../components/footer';
import JustLetMe from '../../assets/JustLetMe.jpg'
import DidISayThatOutloud from '../../assets/DidISayThatOutloud.jpg'

export default function Books() {
  return (
    <div>
        <Nav/>
        <div className='main'>
            <h1>Books</h1>
            <div className="page-content vertical-center">
                <Link to="/book" className="book">
                    <img src={JustLetMe} alt="Book cover: Just Let Me Lie Down"></img>
                </Link>
                <Link to="/book" className="book">
                    <img src={DidISayThatOutloud} alt="Book cover: Did I Say That Outloud?"></img>
                </Link>
                <h2 className="large-quote"><i>“Van Ogtrop nails with a generous, wisecracking charm what we couldn’t —even with sleep- articulate.”
                    — Elissa Schappell,</i> Vanity Fair
                </h2>
            </div>
        </div>
        <Footer/>
    </div>
  )
}