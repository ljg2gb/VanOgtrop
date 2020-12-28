import React from "react";
import { Link } from "gatsby";
import Nav from '../components/nav';
import Footer from '../components/footer';
import JustLetMe from '../../assets/JustLetMe.jpg'

export default function Book() {
  return (
    <div>
      <Nav/>
        <div className='main'>
            <h1>Book</h1>
            <div className="page-content">
              <div className='media-content-left'>
                <Link to="/book" className="book">
                    <img src={JustLetMe} alt="Book cover: Just Let Me Lie Down"></img>
                </Link>
              </div>
              <div className='text-content-right'>
                <h2>PURCHASE NOW</h2>
                <div>
                  <button>Northshire Books</button>
                  <button>IndieBound</button>
                  <button>Amazon</button>
                  <button>Barnes & Noble</button>
                  <button>Target</button>
                  <button>Walmart</button>
                </div>
                <br/>
                <h3><i>“A hysterical and touching handbook for frantic working moms.”</i> — Self magazine</h3>
                <h3 className="mb-1"><i>“A witty lexicon of marriage and motherhood.”</i> — Vogue</h3>
                <p>Kristin van Ogtrop knows she’s lucky-fulfilling career, great husband, three healthy kids, and, depending on the hamster count, an impressive roster of pets. You could also say she’s half-insane, but name one working mom who isn’t.  Using stories and insights from her own life, van Ogtrop offers a lexicon for working moms everywhere. Terms and concepts illustrate the highs (kids who know where their soccer cleats are, coworkers who don’t hit “Reply All,” dogs who helpfully eat whatever falls from the table) and the lows (getting out of the house in the morning, getting along with everyone at the office, getting willful kids into bed) of balancing work and family.</p>
              </div>  
            </div>
        </div>
        <Footer/>
    </div>
  )
}