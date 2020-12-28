import React from "react";
import Nav from '../components/nav';
import Footer from '../components/footer';
import Ina from '../../assets/Kristin+Ina.jpg'

export default function Press() {
  return (
    <div>
        <Nav/>
        <div className='main'>
            <h1>PRESS</h1>
            <div className= 'page-content'>
                <div className='text-content-left'>
                    <p><a href='https://github.com/ljg2gb/Candle' target="_blank" rel="noreferrer">Midlife Moms</a></p>
                    <p><i>Chicago Tribune</i></p>
                    <br/>
                    <p><a href='https://github.com/ljg2gb/Candle' target="_blank" rel="noreferrer">Former Real Simple Editor Offers Darden Students Advice on Work-Life Balance</a></p>
                    <p><i>UVA Today</i></p>
                    <br/>
                    <p><a href='https://github.com/ljg2gb/Candle' target="_blank" rel="noreferrer">Kristin Van Ogtrop on Surviving the Holidays</a></p>
                    <p><i>Washington Post</i></p>
                    <br/>
                    <p><a href='https://github.com/ljg2gb/Candle' target="_blank" rel="noreferrer">The 60-second interview: Kristin van Ogtrop, Editor, Real Simple</a></p>
                    <p><i>Politico</i></p>
                    <br/>
                    <p><a href='https://github.com/ljg2gb/Candle' target="_blank" rel="noreferrer">Longtime Real Simple Editor Steps Down Amid Changes at Time Inc.</a></p>
                    <p><i>AdWeek</i></p>
                    <br/>
                    <p><a href='https://github.com/ljg2gb/Candle' target="_blank" rel="noreferrer">Real Simple’s Editor in Chief Kristin van Ogtrop Departs Time Inc.</a></p>
                    <p><i>WWD</i></p>
                    <br/>
                    <p><a href='https://github.com/ljg2gb/Candle' target="_blank" rel="noreferrer">Top 5: Kristin van Ogtrop</a></p>
                    <p><i>Westchester Magazine</i></p>
                    <br/>
                    <p><a href='https://github.com/ljg2gb/Candle' target="_blank" rel="noreferrer">Outdoor Entertaining Made Simple</a></p>
                    <p><i>Virginia Magazine</i></p>
               </div>
                <div className='media-content-right'>
                    <img src={Ina} alt="Sitting with the Barefoot Contessa"></img>
                    <caption>Once, during my years as a magazine editor, I got to sit next to Ina Garten at a fancy dinner.  She was just as warm and wonderful as I had always imagined, and now I can die happy.</caption>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}