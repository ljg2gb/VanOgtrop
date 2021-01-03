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
            <h1>BOOKS</h1>
            <div className="page-content vertical-center">
            <div className='media-content-left book-covers'>
                <Link to="/JustLetMe" className="book-cover">
                    <img src={JustLetMe} alt="Book cover: Just Let Me Lie Down"></img>
                </Link>
                <Link to="/DidISayThatOutLoud" className="book-cover">
                    <img src={DidISayThatOutloud} alt="Book cover: Did I Say That Outloud?"></img>
                </Link>
            </div>
            <div className='text-content-right'>
                <h2 className="large-quote"><i>“Van Ogtrop nails with a generous, wisecracking charm what we couldn’t —even with sleep- articulate.”
                    — Elissa Schappell,</i> Vanity Fair
                </h2>
            </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}