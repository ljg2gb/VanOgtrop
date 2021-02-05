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
                    <form action="https://getform.io/f/0f5f9cb0-d5a4-4576-89e9-adc5d357b9b0" method="POST" className="contact-form">
                        <input type="text" name="name" placeholder="Name"/>
                        <input type="email" name="email" placeholder="Email"/>
                        <textarea type="text" name="message" rows="4" placeholder="Type any kind of message to me here, even if it’s just to tell me your favorite color."/>
                        <button type="submit">Send</button>
                    </form>
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