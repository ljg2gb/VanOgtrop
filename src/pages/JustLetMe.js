import React from "react";
import Nav from '../components/nav';
import Footer from '../components/footer';
import JustLetMe from '../../assets/JustLetMe.jpg'

export default function JustLetMeLieDown() {
  return (
    <div>
      <Nav/>
        <div className='main'>
            <h1>Just Let Me Lie Down</h1>
            <div className="page-content">
              <div className='media-content-left'>
                <div className="book">
                    <img src={JustLetMe} alt="Book cover: Just Let Me Lie Down"></img>
                </div>
              </div>
              <div className='text-content-right'>
                <h2>Purchase Now</h2>
                <div>
                <button>
                    <a href='https://www.northshire.com/book/9780316068291'
                        className="button-text"
                        target="_blank" 
                        rel="noreferrer">
                        Northshire Books
                    </a>
                  </button>
                  <button>
                    <a href='https://www.indiebound.org/book/9780316068291'
                        className="button-text"
                        target="_blank" 
                        rel="noreferrer">
                        IndieBound
                    </a>
                  </button>
                  <button>
                    <a href='https://www.amazon.com/Just-Let-Lie-Down-Half-Insane/dp/0316068292/ref=sr_1_1?dchild=1&keywords=just+let+me+lie+down+kristin+van+ogtrop&qid=1611517750&sr=8-1'  
                        className="button-text"
                        target="_blank" 
                        rel="noreferrer">
                        Amazon
                    </a>
                  </button>
                  <button>
                    <a href='https://www.barnesandnoble.com/w/just-let-me-lie-down-kristin-van-ogtrop/1100053605?ean=9780316068291'  
                        className="button-text"
                        target="_blank" 
                        rel="noreferrer">
                        Barnes & Noble
                    </a>
                  </button>
                  <button>
                    <a href='https://www.target.com/p/just-let-me-lie-down-by-kristin-van-ogtrop-paperback/-/A-79261684#lnk=sametab'  
                        className="button-text"
                        target="_blank" 
                        rel="noreferrer">
                        Target
                    </a>
                  </button>
                  <button>
                    <a href='https://www.walmart.com/ip/Just-Let-Me-Lie-Down-Necessary-Terms-for-the-Half-Insane-Working-Mom-Paperback-9780316068291/15182939'  
                        className="button-text"
                        target="_blank" 
                        rel="noreferrer">
                        Walmart
                    </a>
                  </button>
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