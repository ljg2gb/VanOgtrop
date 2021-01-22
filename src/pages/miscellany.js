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
                    <h3><i>Random stuff, written by me:</i></h3>
                    <br/>
                    <p><a href='https://www.realsimple.com/work-life/life-strategies/difference-between-men-women-lice-epidemic' target="_blank" rel="noreferrer">The Difference Between Men and Women, a.k.a. The “Lice Epidemic”</a></p>
                    <p><i>Real Simple</i></p>
                    <br/>
                    <p><a href='https://time.com/4038107/why-ambition-isnt-working-for-women/' target="_blank" rel="noreferrer">Why Ambition Isn’t Working for Women</a></p>
                    <p><i>Time</i></p>
                    <br/>
                    <p><a href='https://www.huffpost.com/entry/lean-in-stand-up_b_2971009?guccounter=1' target="_blank" rel="noreferrer">Why I’d Rather Stand Up Straight Than Lean In</a></p>
                    <p><i>HuffPost</i></p>
                    <br/>
                    <p><a href='https://archive.vogue.com/article/1999/10/head-case' target="_blank" rel="noreferrer">Head Case</a></p>
                    <p><i>Vogue</i></p>
                    <br/>
                    <p><a href='https://www.realsimple.com/work-life/life-strategies/after-world-cup-reasons-go-on' target="_blank" rel="noreferrer">After the World Cup: Looking for Reasons to Go On</a></p>
                    <p><i>Real Simple</i></p>
                    <br/>
                    <p><a href='https://time.com/4688233/the-most-important-difference-between-an-elite-athlete-and-a-middle-aged-writer/' target="_blank" rel="noreferrer">The Most Important Difference Between an Elite Athlete and a Middle-Aged Writer</a></p>
                    <p><i>Time</i></p>
                    <br/>
                    <p><a href='https://www.realsimple.com/work-life/family/pets/kristin-van-ogtrop-dog-personality-test' target="_blank" rel="noreferrer">What It’s Like to Give Your Dog a Personality Test</a></p>
                    <p><i>Real Simple</i></p>
                    <br/>
                    <p><a href='https://www.realsimple.com/work-life/life-strategies/a-son-has-gone-to-college-leaving-his-adoring-mother-behind-wait-did-i' target="_blank" rel="noreferrer">A Son Has Gone to College, Leaving His Adoring Mother Behind…Wait, Did I Have Three Kids?</a></p>
                    <p><i>Real Simple</i></p>
                    <br/>
                    <p><a href='https://time.com/4876092/how-this-family-of-worrywarts-copes-in-an-age-of-anxiety/' target="_blank" rel="noreferrer">How this Family of Worrywarts Copes In an Age of Anxiety</a></p>
                    <p><i>Time</i></p>
                    <br/>
                    <p><a href='https://time.com/4810467/invasion-of-the-garden-snatcher-and-other-tales-of-suburban-apocalypse/' target="_blank" rel="noreferrer">Invasion of the Garden Snatcher and Other Tales of Suburban Apocalypse</a></p>
                    <p><i>Time</i></p>
                    <br/>
                    <p><a href='https://time.com/4960646/hey-you-get-off-of-my-cloud/' target="_blank" rel="noreferrer">Hey! You! Get Off of My Cloud! And Other Tales from the Family-Data-Sharing Economy</a></p>
                    <p><i>Time</i></p>
                    <br/>
                    <p><a href='https://time.com/4904283/midlife-crisis-career-change/' target="_blank" rel="noreferrer">What Do I Do Now? A Midlife Career Change May Be Just the Challenge You Need</a></p>
                    <p><i>Time</i></p>
                    <br/>
                    <p><a href='https://time.com/4529452/my-household-get-out-the-vote-campaign-hits-a-teen-roadblock/' target="_blank" rel="noreferrer">My Household Get-out-the-vote Campaign Hits a Teen Roadblock</a></p>
                    <p><i>Time</i></p>
                    <br/>
                    <p><a href='https://time.com/4188338/my-last-year-in-office-a-lame-duck-mother-assesses-her-tenure/' target="_blank" rel="noreferrer">My Last Year in Office as Mom-in-Chief</a></p>
                    <p><i>Time</i></p>
                    <br/>
                    <p><a href='https://www.huffpost.com/entry/social-media-perfection_b_4571068' target="_blank" rel="noreferrer">Reality Check: A Rallying Cry Against Faux-Perfection on Social Media</a></p>
                    <p><i>HuffPost</i></p>
                    <br/>
                    <p><a href='https://www.huffpost.com/entry/we-are-all-ordinary-and-w_b_5256471' target="_blank" rel="noreferrer">We Are All Ordinary, and We Are All Superheroes</a></p>
                    <p><i>HuffPost</i></p>
               </div>
                <div className='media-content-right'>
                    <img src={Waffle} alt="Pureed hospital waffle molded back to a waffle"></img>
                    <caption><i>Do you think this is a waffle?  Ha!  It’s what a hospital kitchen sends to try to cheer you up, or maybe trick you, when you can only eat pureed food.  See </i>Did I Say That Out Loud <i>for details.</i></caption>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
    
  )
}