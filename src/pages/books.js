import React from "react";
import { Link } from "gatsby";
import Nav from '../components/nav';
import Footer from '../components/footer';
import JustLetMe from '../../assets/JustLetMe.jpg'
import DidISayThatOutloud from '../../assets/DidISayThatOutloud.jpg'
import Illustration from '../../assets/final_bw_illustrations/ChrisPorterIllustrations-04.png';

export default function Books() {
  return (
    <div>
        <Nav/>
        <div className='main'>
            <div className="header">
                <h1>BOOKS</h1>
                <img src={Illustration} alt="Books illustration"/>
            </div>
            <div className="page-content vertical-center">
            <div className='media-content-left book-covers'>
                <Link to="/JustLetMe" className="book-cover">
                    <img src={JustLetMe} alt="Book cover: Just Let Me Lie Down" className="book-hover"></img>
                </Link>
                <Link to="/DidISayThatOutLoud" className="book-cover">
                    <img src={DidISayThatOutloud} alt="Book cover: Did I Say That Outloud?" className="book-hover"></img>
                </Link>
            </div>
            <div className='text-content-right'>
                <h2 className="large-quote"><i>“Van Ogtrop nails with a generous, wisecracking charm what we couldn’t <span>&#8208;</span>even with sleep<span>&#8208;</span> articulate.”
                <span>&nbsp; &#8208;</span>Elissa Schappell,</i> Vanity Fair
                </h2>
            </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}