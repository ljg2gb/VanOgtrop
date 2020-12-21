import React from "react";
import Nav from '../components/nav';
import Footer from '../components/footer';
import Fair from '../../assets/KvO_stateFair.jpeg'

export default function Events() {
  return (
    <div>
        <Nav/>
        <div className='main'>
            <h1>EVENTS</h1>
            <div className= 'page-content'>
                <div className='text-content'>
                    <p>No upcoming events. Follow me on Facebook, Instagram, or Twitter for the latest happenings.</p>
               </div>
                <div className='media-box'>
                    <img src={Fair} alt="Winning the blue ribbon for a casserole"></img>
                    <caption>Sometime in the 1970s, when I won a blue ribbon at the Delaware State Fair for a recipe that—naturally—had Campbell’s Cream of Mushroom soup in it.  (See Did I Say That Out Loud for details.)</caption>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}