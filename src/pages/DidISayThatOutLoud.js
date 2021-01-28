import React from "react";
import Nav from '../components/nav';
import Footer from '../components/footer';
import DidISayThat from '../../assets/DidISayThatOutloud.jpg'

export default function DidISayThatOutLoud() {
  return (
    <div>
      <Nav/>
        <div className='main'>
            <h1>Did I Say That Out Loud?</h1>
            <div className="page-content">
              <div className='media-content-left'>
                <div className="book">
                    <img src={DidISayThat} alt="Book cover: Did I Say That Out Loud?"></img>
                </div>
              </div>
              <div className='text-content-right'>
                <h2>Purchase Now</h2>
                <div>
                  <button>
                    <a href='https://www.northshire.com/book/9780316497497'  
                        className="button-text"
                        target="_blank" 
                        rel="noreferrer">
                        Northshire Books
                    </a>
                  </button>
                  <button>
                    <a href='https://www.indiebound.org/book/9780316497497' 
                        className="button-text"
                        target="_blank" 
                        rel="noreferrer">
                        IndieBound
                    </a>
                  </button>
                  <button>
                    <a href='https://www.amazon.com/Did-Say-That-Out-Loud/dp/0316497495/ref=sr_1_1?crid=14HH0Q18W8OL6&dchild=1&keywords=did+i+say+that+out+loud+kristin+van+ogtrop&qid=1611517524&sprefix=did+I+say+that+out+loud%2Caps%2C148&sr=8-1'  
                        className="button-text"
                        target="_blank" 
                        rel="noreferrer">
                        Amazon
                    </a>
                  </button>
                  <button>
                    <a href='https://www.barnesandnoble.com/w/did-i-say-that-out-loud-kristin-van-ogtrop/1137427890;jsessionid=73171DB0EF6FBE56AFCC6415241FE638.prodny_store02-atgap08?ean=9780316497497'  
                        className="button-text"
                        target="_blank" 
                        rel="noreferrer">
                        Barnes & Noble
                    </a>
                  </button>
                  <button>
                    <a href='https://www.target.com/p/did-i-say-that-out-loud-by-kristin-van-ogtrop-hardcover/-/A-81866085#lnk=sametab'  
                        className="button-text"
                        target="_blank" 
                        rel="noreferrer">
                        Target
                    </a>
                  </button>
                  <button>
                    <a href='https://www.walmart.com/ip/Did-I-Say-That-Out-Loud-Midlife-Indignities-and-How-to-Survive-Them-Hardcover/858714933'  
                        className="button-text"
                        target="_blank" 
                        rel="noreferrer">
                        Walmart
                    </a>
                  </button>
                </div>
                <br/>
                <h3><i>“Full of humor, heart, and humility, Kristin van Ogtrop’s essays capture the mantra of the first piece in this perfect collection of meditations on middle age: Just happy to be here. I loved this book.” —Laura Zigman, author of </i>&nbsp;Separation Anxiety</h3>
                <p>Do you hate the term “middle age?” So does Kristin van Ogtrop, who is still trying to come up with a less annoying way to describe those years when you find yourself both satisfied and outraged, confident and confused, full of appreciation but occasional disdain for the world around you. Like an intimate chat with your best friend, this mostly funny, sometimes sad, always affirming volume is a celebration of that period of life when mild humiliations are significantly outweighed by a self-actualized triumph of the spirit. Finally!  Featuring stories from her own life, as well as anecdotes from her unwitting friends and family, van Ogtrop encourages you to laugh at the small irritations of midlife: neglectful children, stealth insomnia, forks that try to kill you, t.v. remotes that won’t find Netflix, abdominal muscles that can’t seem to get the job done. But also to acknowledge the things you may have lost:  innocence, unbridled optimism, smooth skin. Dear friends. Parents. It’s all here: the sublime and the ridiculous, living together in the pages of this book as they do in your heart, like a big messy family, in this no-better-term-for-it middle age.</p>
              </div>  
            </div>
        </div>
        <Footer/>
    </div>
  )
}