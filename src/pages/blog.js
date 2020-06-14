import React from 'react'
import { graphql } from 'gatsby'
import Helmet from '../components/helmet';
import NavbarListingJournal from '../components/navbar-listing-journal';
import SideMenu from '../components/side-menu';
import Subscription from '../components/subscription';
import Footer from '../components/footer';

// import Img from "gatsby-image"
import BlogItems from "../templates/blog-list-template"


const Blog = ({ data }) => {
  
  return (
    <div className="columns is-gapless">
        <div className="column side-menu">
            <SideMenu/>
        </div>	
        <div className="column is-rest">	
            <Helmet />
            <div className="columns">
                <div className="column is-12">
                    <nav className="is-hidden-mobile navbar-general">
                        <NavbarListingJournal/>
                        <div className="sidemenu-label">MENU</div>
                    </nav>
                </div>
            </div>
            <div className="columns journal-list is-centered">
                <div className="column is-10">
                    <div className="columns is-multiline">
                        <BlogItems items={data} />
                    </div>
                </div>
            </div>
            <Subscription/>
            <Footer/>
        </div>
    </div>
  )
}

export default Blog

export const query = graphql`
    query {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            frontmatter {
              title
              category
              type
              featuredImage {
                childImageSharp {
                  fluid(maxWidth: 750, quality: 80) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            excerpt
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `
