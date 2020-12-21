import React from "react";
import '../styles/index.sass';
import "fontsource-eb-garamond";
import Nav from "../components/nav";
import Footer from "../components/footer";

// data

// markup
export default function Index() {
  return (
    <div>
      <Nav/>
      <div className='main'>
        <h1>Kristin Van Ogtrop</h1>
      </div>
      <Footer/>
    </div>
  )
}
