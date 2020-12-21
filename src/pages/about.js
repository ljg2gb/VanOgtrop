import React from "react";
import Nav from '../components/nav';
import Footer from '../components/footer';
import schoolPhoto from '../../assets/KvO_school_photo.jpeg'

export default function About() {
  return (
    <div>
        <Nav/>
        <div className='main'>
            <h1>ABOUT</h1>
            <div className= 'page-content'>
                <div className='text-content'>
                    <h3>Officially, as in careerish stuff:</h3>
                    <p>After getting my B.A. in English from the University of Virginia and my M.A. in English from Columbia University, I began working in magazines as an assistant to the managing editor of Vogue.  I subsequently worked at Premiere, Travel & Leisure, Vogue (again) and Glamour. In 2003, I was named editor in chief of Real Simple, a job I held until 2016.  Along the way I wrote for various publications, contributed essays to the books Child of Mine and The Bitch in the House, wrote The Amateur column for Time and the book Just Let Me Lie Down:  Necessary Terms for the Half-Insane Working Mom.  In 2018, I began a new career as a literary agent at InkWell Management.</p>
                    <br/>
                    <h3>Unofficially:</h3>
                    <p>I grew up in Delaware and sort of wish I still lived there.  I am allergic to penicillin.  I never had any wisdom teeth.  If I could only eat one food for the rest of my life, it would be potato chips.  Or maybe french fries.  Hopefully I’ll never have to choose.</p>
                </div>
                <div className='media-box'>
                    <img src={schoolPhoto} alt='school photo of Kristin van Ogtrop'></img>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}