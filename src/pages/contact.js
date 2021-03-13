import { graphql } from "gatsby";
import React from "react";
import Footer from '../components/footer';
import Nav from '../components/nav';

export const Contact = ({ data }) => {
  if (!data) return null
  const document = data.prismicContact.data
  return (
    <div>
        <Nav/>
        <div className='main'>
            <div className="header">
                <h1>{document.title.text}</h1>
                <img src={document.illustration.url} alt={document.illustration.alt}/>
            </div>
            <div className="page-content">
                <div className='text-content-left'>
                    <form action="https://getform.io/f/0f5f9cb0-d5a4-4576-89e9-adc5d357b9b0" method="POST" className="contact-form">
                        <input type="text" name="name" placeholder={document.input_placeholder_name.text}/>
                        <input type="email" name="email" placeholder={document.input_placeholder_email.text}/>
                        <textarea type="text" name="message" rows="4" placeholder={document.input_placeholder_message.text}/>
                        <button type="submit">Send</button>
                    </form>
                </div>
                <div className='media-content-right'>
                    <img src={document.image.url} alt={document.image.alt}></img>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export const query = graphql`
query ContactQuery {
  prismicContact {
    data {
      image {
        alt
        url
      }
      input_placeholder_email {
        text
      }
      input_placeholder_message {
        text
      }
      input_placeholder_name {
        text
      }
      title {
        text
      }
      illustration {
        alt
        url
      }
    }
  }
}
`

export default Contact;