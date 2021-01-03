import React from "react";
import { Link } from "gatsby";
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
                <Link to="/book" className="book">
                    <img src={DidISayThat} alt="Book cover: Did I Say That Out Loud?"></img>
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
                <h3><i>“Full of humor, heart, and humility, Kristin van Ogtrop’s essays capture the mantra of the first piece in this perfect collection of meditations on middle age: Just happy to be here. I loved this book.” —Laura Zigman, author of </i><span> </span> Separation Anxiety</h3>
                <p>Do you hate the term “middle age?” So does Kristin van Ogtrop, who is still trying to come up with a less annoying way to describe those years when you find yourself both satisfied and outraged, confident and confused, full of appreciation but occasional disdain for the world around you. Like an intimate chat with your best friend, this mostly funny, sometimes sad, always affirming volume is a celebration of that period of life when mild humiliations are significantly outweighed by a self-actualized triumph of the spirit. Finally!  Featuring stories from her own life, as well as anecdotes from her unwitting friends and family, van Ogtrop encourages you to laugh at the small irritations of midlife: neglectful children, stealth insomnia, forks that try to kill you, t.v. remotes that won’t find Netflix, abdominal muscles that can’t seem to get the job done. But also to acknowledge the things you may have lost:  innocence, unbridled optimism, smooth skin. Dear friends. Parents. It’s all here: the sublime and the ridiculous, living together in the pages of this book as they do in your heart, like a big messy family, in this no-better-term-for-it middle age.</p>
              </div>  
            </div>
        </div>
        <Footer/>
    </div>
  )
}