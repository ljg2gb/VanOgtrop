import React from "react";
import Nav from '../components/nav';
import Footer from '../components/footer';
import Wagon from '../../assets/KvO_wagon.jpeg'
import Illustration from '../../assets/final_bw_illustrations/ChrisPorterIllustrations-03.png';

export default function Contact() {
  return (
    <div>
        <Nav/>
        <div className='main'>
            <div className="header">
                <h1>CONTACT</h1>
                <img src={Illustration} alt="Contact illustration"/>
            </div>
            <div className="page-content">
                <div className='text-content-left'>
                    <form action="https://getform.io/f/dd7bda21-ece7-455d-94fa-92a841559309" method="POST" className="contact-form">
                        <input type="text" name="name" placeholder="Name"/>
                        <input type="email" name="email" placeholder="Email"/>
                        <textarea type="text" name="message" rows="4" placeholder="Type any kind of message to me here, even if it’s just to tell me your favorite color."/>
                        <button type="submit">Send</button>
                    </form>
                    {/* <p>Send a message to me at <a href="mailto:hellokvo@gmail.com" target="_blank" rel="noreferrer">hellokvo@gmail.com</a>, even if it’s just to tell me your favorite color.</p> */}
                </div>
                <div className='media-content-right'>
                    <img src={Wagon} alt='childhood photo of Kristin van Ogtrop in wagon'></img>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}