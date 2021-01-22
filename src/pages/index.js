import React from "react";
import { Link } from 'gatsby';
import '../styles/index.sass';
import "fontsource-eb-garamond";
// import About from './about';
// import Nav from "../components/nav";
import Footer from "../components/footer";
// import schoolPhoto from '../../assets/KvO_school_photo.jpeg';
import Geanie1 from '../../assets/Kristin_llustrations_v2-11.png';
import Geanie2 from '../../assets/Kristin_llustrations_v2-06.png';

import Typewriter1 from '../../assets/Kristin_llustrations_v2-09.png';
import Typewriter2 from '../../assets/Kristin_llustrations_v2-04.png';

import Drawer1 from '../../assets/Kristin_llustrations_v2-10.png';
import Drawer2 from '../../assets/Kristin_llustrations_v2-05.png';

import Dog1 from '../../assets/Kristin_llustrations_v2-12.png';
import Dog2 from '../../assets/Kristin_llustrations_v2-07.png';

import Party1 from '../../assets/Kristin_llustrations_v2-13.png';
import Party2 from '../../assets/Kristin_llustrations_v2-02.png';

import Pigeon1 from '../../assets/Pigeon1.png';
import Pigeon2 from '../../assets/Pigeon2.png';

// data

// markup
export default function Index() {

  return (
    <div >
      <div className="home-images">
        <Link to="/about" className="home-image">
          <img 
            src={Geanie1} 
            alt="About"
            onMouseOver={e => (e.currentTarget.src = Geanie2)}
            onMouseEnter={e => (e.currentTarget.src = Geanie2)}
            onFocus={e => (e.currentTarget.src = Geanie2)}
            onMouseOut={e => (e.currentTarget.src = Geanie1)}
            onBlur={e => (e.currentTarget.src = Geanie1)}
          />
        </Link>

        <Link to="/books" className="home-image">
          <img 
            src={Typewriter1} 
            alt="Books"
            onMouseOver={e => (e.currentTarget.src = Typewriter2)}
            onMouseEnter={e => (e.currentTarget.src = Typewriter2)}
            onFocus={e => (e.currentTarget.src = Typewriter2)}
            onMouseOut={e => (e.currentTarget.src = Typewriter1)}
            onBlur={e => (e.currentTarget.src = Typewriter1)}
          />
        </Link>

        <Link to="/miscellany" className="home-image">
          <img 
            src={Drawer1} 
            alt="Miscellany"
            onMouseOver={e => (e.currentTarget.src = Drawer2)}
            onMouseEnter={e => (e.currentTarget.src = Drawer2)}
            onFocus={e => (e.currentTarget.src = Drawer2)}
            onMouseOut={e => (e.currentTarget.src = Drawer1)}
            onBlur={e => (e.currentTarget.src = Drawer1)}
          />
        </Link>

        <Link to="/press" className="home-image">
          <img 
            src={Dog1} 
            alt="Press"
            onMouseOver={e => (e.currentTarget.src = Dog2)}
            onMouseEnter={e => (e.currentTarget.src = Dog2)}
            onFocus={e => (e.currentTarget.src = Dog2)}
            onMouseOut={e => (e.currentTarget.src = Dog1)}
            onBlur={e => (e.currentTarget.src = Dog1)}
          />
        </Link>

        <Link to="/events" className="home-image">
          <img 
            src={Party1} 
            alt="Events"
            onMouseOver={e => (e.currentTarget.src = Party2)}
            onMouseEnter={e => (e.currentTarget.src = Party2)}
            onFocus={e => (e.currentTarget.src = Party2)}
            onMouseOut={e => (e.currentTarget.src = Party1)}
            onBlur={e => (e.currentTarget.src = Party1)}
          />
        </Link>

        <Link to="/contact" className="home-image">
          <img 
            src={Pigeon1} 
            alt="Contact"
            onMouseOver={e => (e.currentTarget.src = Pigeon2)}
            onMouseEnter={e => (e.currentTarget.src = Pigeon2)}
            onFocus={e => (e.currentTarget.src = Pigeon2)}
            onMouseOut={e => (e.currentTarget.src = Pigeon1)}
            onBlur={e => (e.currentTarget.src = Pigeon1)}
          />
        </Link>
      </div>
      <h1 className="home-header">Kristin van Ogtrop</h1>
      <Footer/>
    </div>
  )
}
