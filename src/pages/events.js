import React from "react";
import Nav from '../components/nav';
import Footer from '../components/footer';
import Fair from '../../assets/KvO_stateFair.jpeg'
import Illustration from '../../assets/final_bw_illustrations/ChrisPorterIllustrations-02.png';

export default function Events() {
  return (
    <div>
        <Nav/>
        <div className='main'>
            <div className="header">
                <h1>EVENTS</h1>
                <img src={Illustration} alt="Events illustration"/>
            </div>
            <div className= 'page-content'>
                <div className='text-content-left'>
                    <p>No upcoming events. Follow me on&nbsp;  
                        <a href='https://www.facebook.com/kristinvanogtroprealsimple'>Facebook</a>,&nbsp;  
                        <a href='https://www.instagram.com/kvanogtrop/'>Instagram</a>, or&nbsp;  
                        <a href='https://twitter.com/kvanogtrop'>Twitter</a> for the latest happenings.</p>
               </div>
                <div className='media-content-right'>
                    <img src={Fair} alt="Winning the blue ribbon for a casserole"></img>
                    <caption><i>Sometime in the 1970s, when I won a blue ribbon at the Delaware State Fair for a recipe that—naturally—had Campbell’s Cream of Mushroom soup in it. (See</i> Did I Say That Out Loud <i>for details.)</i></caption>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}