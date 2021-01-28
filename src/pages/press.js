import React from "react";
import Nav from '../components/nav';
import Footer from '../components/footer';
import Ina from '../../assets/Kristin+Ina.jpg'
import Illustration from '../../assets/final_bw_illustrations/ChrisPorterIllustrations-07.png';


export default function Press() {
  return (
    <div>
        <Nav/>
        <div className='main'>
        <div className="header">
                <h1>PRESS</h1>
                <img src={Illustration} alt="Press illustration"/>
            </div>
            <div className= 'page-content'>
                <div className='text-content-left'>
                    <h3><i>Random stuff, written about me:</i></h3>
                    <br/>
                    <p><a href='https://www.chicagotribune.com/lifestyles/ct-xpm-2010-05-06-sc-fam-0506-midlife-mom-20100506-story.html' target="_blank" rel="noreferrer">Midlife Moms</a></p>
                    <p><i>Chicago Tribune</i></p>
                    <br/>
                    <p><a href='https://news.darden.virginia.edu/2016/09/26/real-simple-gwib/' target="_blank" rel="noreferrer">Former Real Simple Editor Offers Darden Students Advice on Work-Life Balance</a></p>
                    <p><i>UVA Today</i></p>
                    <br/>
                    <p><a href='https://live.washingtonpost.com/home-front-20151112.html' target="_blank" rel="noreferrer">Kristin van Ogtrop on Surviving the Holidays</a></p>
                    <p><i>Washington Post</i></p>
                    <br/>
                    <p><a href='https://www.politico.com/media/story/2015/03/the-60-second-interview-kristin-van-ogtrop-editor-real-simple-003558/' target="_blank" rel="noreferrer">The 60-second interview: Kristin van Ogtrop, Editor, Real Simple</a></p>
                    <p><i>Politico</i></p>
                    <br/>
                    <p><a href='https://www.adweek.com/digital/longtime-real-simple-editor-steps-down-amid-changes-time-inc-173074/' target="_blank" rel="noreferrer">Longtime Real Simple Editor Steps Down Amid Changes at Time Inc.</a></p>
                    <p><i>AdWeek</i></p>
                    <br/>
                    <p><a href='https://wwd.com/business-news/media/real-simples-editor-in-chief-kristin-van-ogtrop-out-sarah-collins-interim-editor-10511805/' target="_blank" rel="noreferrer">Real Simple’s Editor in Chief Kristin van Ogtrop Departs Time Inc.</a></p>
                    <p><i>WWD</i></p>
                    <br/>
                    <p><a href='https://westchestermagazine.com/uncategorized/top-5-kristin-van-ogtrop/' target="_blank" rel="noreferrer">Top 5: Kristin van Ogtrop</a></p>
                    <p><i>Westchester Magazine</i></p>
                    <br/>
                    <p><a href='https://uvamagazine.org/articles/outdoor_entertaining_made_simple' target="_blank" rel="noreferrer">Outdoor Entertaining Made Simple</a></p>
                    <p><i>Virginia Magazine</i></p>
               </div>
                <div className='media-content-right'>
                    <img src={Ina} alt="Sitting with the Barefoot Contessa"></img>
                    <caption><i>Once, during my years as a magazine editor, I got to sit next to Ina Garten at a fancy dinner.  She was just as warm and wonderful as I had always imagined, and now I can die happy.</i></caption>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}