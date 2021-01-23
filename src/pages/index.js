import React from "react";
import { Link } from 'gatsby';
import '../styles/index.sass';
import "fontsource-eb-garamond";
import Footer from "../components/footer";

import Geanie1 from '../../assets/final_bw_illustrations/Porter_KvO_About_closed.png';
import Geanie2 from '../../assets/final_bw_illustrations/Porter_KvO_About_open.png';

import Typewriter1 from '../../assets/final_bw_illustrations/Porter_KvO_Books_closed.png';
import Typewriter2 from '../../assets/final_bw_illustrations/Porter_KvO_Books_open.png';

import Drawer1 from '../../assets/final_bw_illustrations/Porter_KvO_Miscellany_closed.png';
import Drawer2 from '../../assets/final_bw_illustrations/Porter_KvO_Miscellany_open.png';

import Dog1 from '../../assets/final_bw_illustrations/Porter_KvO_Press_closed.png';
import Dog2 from '../../assets/final_bw_illustrations/Porter_KvO_Press_open.png';

import Party1 from '../../assets/final_bw_illustrations/Porter_KvO_Events_closed.png';
import Party2 from '../../assets/final_bw_illustrations/Porter_KvO_Events_open.png';

import Pigeon1 from '../../assets/final_bw_illustrations/Porter_KvO_contact_closed.png';
import Pigeon2 from '../../assets/final_bw_illustrations/Porter_KvO_Contact_open.png';

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
      <Link to="/about" className="home-title">
        <h1 className="home-header">Kristin van Ogtrop</h1>
      </Link>
      <Footer/>
    </div>
  )
}
