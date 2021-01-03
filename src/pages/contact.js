import React from "react";
import Nav from '../components/nav';
import Footer from '../components/footer';
import Wagon from '../../assets/KvO_wagon.jpeg'

export default function Contact() {
  return (
    <div>
        <Nav/>
        <div className='main'>
            <h1>CONTACT</h1>
            <div className="page-content">
                <div className='text-content-left'>
                    <p>Send a message to me at <u>hellokvo@gmail.com</u>, even if it’s just to tell me your favorite color.</p>
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