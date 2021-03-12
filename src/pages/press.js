import { graphql } from 'gatsby';
import { RichText } from 'prismic-reactjs';
import React from "react";
import Footer from '../components/footer';
import Nav from '../components/nav';


export const Press = ({ data }) => {
  if (!data) return null
  const document = data.allPrismicPage.nodes[0].data

  return (
    <div>
        <Nav/>
        <div className='main'>
        <div className="header">
                <h1>{document.title.text}</h1>
                <img src={document.page_illustration.url} alt={document.page_illustration.alt}></img>
            </div>
            <div className= 'page-content'>
                <div className='text-content-left'>
                    <RichText render={document.body.raw}/>
               </div>
                <div className='media-content-right'>
                    <img src={document.image.url} alt={document.image.alt}></img>
                    <caption><RichText render={document.caption.raw}/></caption>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export const query = graphql`
  query PressQuery {
  allPrismicPage(filter: {uid: {eq: "press"}}) {
    nodes {
      uid
      data {
        title {
          text
        }
        body {
          raw
        }
        caption {
          raw
        }
        image {
          alt
          url
        }
        page_illustration {
          alt
          url
        }
      }
    }
  }
}`

export default Press