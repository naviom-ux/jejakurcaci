import React from "react"
import PropTypes from "prop-types"

// Utilities
import kebabCase from "lodash/kebabCase"

// Components
import { Link, graphql } from "gatsby"
// import Img from "gatsby-image";
import NavbarCategoryPhotography from '../components/navbar-category-photography';
import Helmet from '../components/helmet';
import SideMenu from '../components/side-menu';
import Footer from '../components/footer';
import Img from "gatsby-image";

const CategoryPhotographyPage = ({
  data: {
    allMarkdownRemark: { group },
  }, data
}) => (
    <div className="columns is-gapless">
      <div className="column side-menu">
          <SideMenu/>
      </div>
      <div className="column is-rest">	
        <Helmet />
        <nav className="is-hidden-mobile navbar-general">
            <NavbarCategoryPhotography/>
            <div className="sidemenu-label">MENU</div>
        </nav>
        <div className="columns journal-list is-centered">
          <div className="column is-10">
            <div className="filter-section">
              {group.map(category => (
                <button key={category.fieldValue} className="filter">
                    <Link to={`/photography/${kebabCase(category.fieldValue)}/`}>
                      {category.fieldValue} <span className="hashtag">({category.totalCount})</span>
                    </Link>
                </button>
              ))}
            </div>

            <div className="columns is-multiline">
              {data.allMarkdownRemark.edges.map((edge) => {
              return(

                  <div className="column is-4">
                      <div className="card-image">
                          <Link to={`/photography/${edge.node.fields.slug}`}>
                              <Img className="image"  fluid={edge.node.frontmatter.featuredImage.childImageSharp.fluid}/>
                          </Link>
                      </div>
                      <div className="card-content">
                          <Link to={`/photography/${edge.node.fields.slug}`}>
                              <p className="proj-date">{edge.node.frontmatter.date}</p>
                              <p className="proj-cat">{edge.node.frontmatter.category}</p>
                              <p className="proj-title">
                                  {edge.node.frontmatter.title}
                              </p>
                          </Link>
                      </div>
                  </div>

                    )
                })}
            </div>
          
          </div>
        </div>
    <Footer/>
      </div>
    <div>
    </div>
  </div>
)

CategoryPhotographyPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}

export default CategoryPhotographyPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      limit: 2000
      filter: { frontmatter: { type: { eq: "photography" } } }
      ) {
      group(field: frontmatter___category) {
        fieldValue
        totalCount
      }
      edges{
        node{
            frontmatter{
                title
                category
                featuredImage{
                    childImageSharp {
                        fluid(maxWidth: 600, quality:80) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
            fields{
                slug
            }
        }
    }
    }
  }
`