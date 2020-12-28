import React from "react";
import Nav from '../components/nav';
import Footer from '../components/footer';
import Waffle from '../../assets/KvO_waffle.jpg'

export default function Miscellany() {
  return (
    <div>
        <Nav/>
        <div className='main'>
            <h1>MISCELLANY</h1>
            <div className= 'page-content'>
                <div className='text-content-left'>
                    <h3>A random sampling of things I’ve written over the years.</h3>
                    <br/>
                    <p><a href='https://github.com/ljg2gb/Candle' target="_blank" rel="noreferrer">The Difference Between Men and Women, a.k.a. The “Lice Epidemic”</a></p>
                    <p>Real Simple</p>
                    <br/>
                    <p><a href='https://github.com/ljg2gb/Candle' target="_blank" rel="noreferrer">Why Ambition Isn’t Working for Women</a></p>
                    <p>Time</p>
                    <br/>
                    <p><a href='https://github.com/ljg2gb/Candle' target="_blank" rel="noreferrer">Why I’d Rather Stand Up Straight Than Lean In</a></p>
                    <p>Huffpost</p>
                    <br/>
                    <p><a href='https://github.com/ljg2gb/Candle' target="_blank" rel="noreferrer">After the World Cup: Looking for Reasons to Go On</a></p>
                    <p>Real Simple</p>
                    <br/>
                    <p><a href='https://github.com/ljg2gb/Candle' target="_blank" rel="noreferrer">The Most Important Difference Between an Elite Athlete and a Middle-Aged Writer</a></p>
                    <p>Time</p>
                    <br/>
                    <p><a href='https://github.com/ljg2gb/Candle' target="_blank" rel="noreferrer">What It’s Like to Give Your Dog a Personality Test</a></p>
                    <p>Real Simple</p>
                    <br/>
                    <p><a href='https://github.com/ljg2gb/Candle' target="_blank" rel="noreferrer">A Son Has Gone to College, Leaving His Adoring Mother Behind…Wait, Did I Have Three Kids?</a></p>
                    <p>Real Simple</p>
                    <br/>
                    <p><a href='https://github.com/ljg2gb/Candle' target="_blank" rel="noreferrer">How this Family of Worrywarts Copes In an Age of Anxiety</a></p>
                    <p>Time</p>
                    <br/>
                    <p><a href='https://github.com/ljg2gb/Candle' target="_blank" rel="noreferrer">Invasion of the Garden Snatcher and Other Tales of Suburban Apocalypse</a></p>
                    <p>Time</p>
                    <br/>
                    <p><a href='https://github.com/ljg2gb/Candle' target="_blank" rel="noreferrer">Hey! You! Get Off of My Cloud! And Other Tales from the Family-Data-Sharing Economy</a></p>
                    <p>Time</p>
                    <br/>
                    <p><a href='https://github.com/ljg2gb/Candle' target="_blank" rel="noreferrer">What Do I Do Now? A Midlife Career Change May Be Just the Challenge You Need</a></p>
                    <p>Time</p>
                    <br/>
                    <p><a href='https://github.com/ljg2gb/Candle' target="_blank" rel="noreferrer">My Household Get-out-the-vote Campaign Hits a Teen Roadblock</a></p>
                    <p>Time</p>
                    <br/>
                    <p><a href='https://github.com/ljg2gb/Candle' target="_blank" rel="noreferrer">My Last Year in Office as Mom-in-Chief</a></p>
                    <p>Time</p>
                    <br/>
                    <p><a href='https://github.com/ljg2gb/Candle' target="_blank" rel="noreferrer">Reality Check: A Rallying Cry Against Faux-Perfection on Social Media</a></p>
                    <p>Huffpost</p>
                    <br/>
                    <p><a href='https://github.com/ljg2gb/Candle' target="_blank" rel="noreferrer">We Are All Ordinary, and We Are All Superheroes</a></p>
                    <p>Huffpost</p>
                    <br/>
                    <p><a href='https://github.com/ljg2gb/Candle' target="_blank" rel="noreferrer">Head Case</a></p>
                    <p>Vogue</p>
               </div>
                <div className='media-content-right'>
                    <img src={Waffle} alt="Pureed hospital waffle molded back to a waffle"></img>
                    <caption>Do you think this is a waffle?  Ha!  It’s what a hospital kitchen sends to try to cheer you up, or maybe trick you, when you can only eat pureed food.  See my second book for details.</caption>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
    
  )
}