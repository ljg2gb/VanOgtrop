import React from "react";
import Nav from '../components/nav';
import Footer from '../components/footer';
import { graphql } from 'gatsby';
import { RichText } from 'prismic-reactjs';

export const DidISayThatOutLoud = ({data}) => {
  if (!data) return null
  const document = data.prismicBookPage.data
  return (
    <div>
      <Nav/>
        <div className='main'>
            <h1>{document.title.text}</h1>
            <div className="page-content">
              <div className='media-content-left'>
                <div className="book">
                    <img src={document.image.url} alt={document.image.alt}></img>
                </div>
              </div>
              <div className='text-content-right'>
                <h2>{document.heading_2.text}</h2>
                <div>
                  <button>
                    <a href={document.buttons[0].buttonlink.url}  
                        className="button-text"
                        target="_blank" 
                        rel="noreferrer">
                        {document.buttons[0].buttontext.text}
                    </a>
                  </button>
                  <button>
                    <a href={document.buttons[1].buttonlink.url} 
                        className="button-text"
                        target="_blank" 
                        rel="noreferrer">
                        {document.buttons[1].buttontext.text} 
                    </a>
                  </button>
                  <button>
                    <a href={document.buttons[2].buttonlink.url} 
                        className="button-text"
                        target="_blank" 
                        rel="noreferrer">
                        {document.buttons[2].buttontext.text} 
                    </a>
                  </button>
                  <button>
                    <a href={document.buttons[3].buttonlink.url}   
                        className="button-text"
                        target="_blank" 
                        rel="noreferrer">
                        {document.buttons[3].buttontext.text} 
                    </a>
                  </button>
                  <button>
                    <a href={document.buttons[4].buttonlink.url} 
                        target="_blank" 
                        rel="noreferrer">
                        {document.buttons[4].buttontext.text} 
                    </a>
                  </button>
                  <button>
                    <a href={document.buttons[5].buttonlink.url} 
                        className="button-text"
                        target="_blank" 
                        rel="noreferrer">
                        {document.buttons[5].buttontext.text} 
                    </a>
                  </button>
                </div>
                <br/>
                <RichText render={document.reviews[0].review.raw}/>
                <RichText render={document.summary.raw}/>
              </div>  
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export const query = graphql`
  query DidIQuery {
    prismicBookPage(uid: {eq: "did-i-say-that-out-loud"}) {
      id
      uid
      data {
        title {
          text
        }
        summary {
          raw
        }
        reviews {
          review {
            raw
          }
        }
        image {
          url
          alt
        }
        heading_2 {
          text
        }
        buttons {
          buttonlink {
            url
          }
          buttontext {
            text
          }
        }
      }
    }
  }
`

export default DidISayThatOutLoud;