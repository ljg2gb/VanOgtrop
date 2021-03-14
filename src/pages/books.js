import React from "react";
import { graphql, Link } from "gatsby";
import { RichText } from 'prismic-reactjs';
import Nav from '../components/nav';
import Footer from '../components/footer';

export const Books = ({data}) => {
  if (!data) return null
  const document = data.prismicBooks.data
  return (
    <div>
        <Nav/>
        <div className='main'>
            <div className="header">
                <h1>{document.title.text}</h1>
                <img src={document.page_illustration.url} alt={document.page_illustration.alt}/>
            </div>
            <div className="page-content vertical-center">
            <div className='media-content-left book-covers'>
                <Link to="/JustLetMe" className="book-cover">
                    <img src={document.book_cover1.url} alt={document.book_cover1.alt} className="book-hover"></img>
                </Link>
                <Link to="/DidISayThatOutLoud" className="book-cover">
                    <img src={document.book_cover2.url} alt={document.book_cover2.alt} className="book-hover"></img>
                </Link>
            </div>
            <div className='text-content-right'>
              <h2 className="large-quote"><RichText render={document.quote.raw}/></h2>
            </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export const query = graphql`
  query NavQuery {
    prismicBooks {
      data {
        title {
          text
        }
        page_illustration {
          alt
          url
        }
        book_cover1 {
          alt
          url
        }
        book_cover2 {
          alt
          url
        }
        quote {
          raw
        }
      }
    }
  }
`

export default Books;