import React from "react";
import { Link } from 'gatsby';
import { graphql } from 'gatsby';
import { RichText } from 'prismic-reactjs';
import '../pages/index';
import '../pages/about';
import '../pages/books';
import '../pages/miscellany';
import '../pages/press';
import '../pages/press';
import '../pages/contact';

export const Nav = ({ data }) => {
  if (!data) return null
  const document = data.allPrismicPage.nodes[0].data
  return (
    <nav>
      <Link className='home logo' to='/'>Kristin van Ogtrop</Link>
      <div className="header-links-container">
        <div className="header-links-sub-container">
        <Link to="/about" 
          className="header-link"
          activeStyle={{
            color: "#e9d14d"
          }}
        >{document.page_illustration.url}</Link>
        <Link to="/books" 
          className="header-link" 
          activeStyle={{
            color: "#e9d14d"
          }}
        >Books</Link>
        <Link to="/miscellany" 
          className="header-link"
          activeStyle={{
            color: "#e9d14d"
          }}
          >Miscellany</Link>
        </div>
        <div className="header-links-sub-container">
          <Link to="/press" 
            className="header-link" 
            activeStyle={{
              color: "#e9d14d"
            }}
          >Press</Link>
          <Link to="/events" 
            className="header-link" 
            activeStyle={{
              color: "#e9d14d"
            }}
          >Events</Link>
          <Link to="/contact" 
            className="header-link" 
            activeStyle={{
              color: "#e9d14d"
            }}
          >Contact</Link>
        </div>
      </div>
    </nav>
  )
}

export const query = graphql`
  query NavQuery {
  allPrismicPage(filter: {uid: {eq: "events"}}) {
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

export default Nav;