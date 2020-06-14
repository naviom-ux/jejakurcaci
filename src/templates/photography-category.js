import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";
import Helmet from '../components/helmet';
import NavbarCategoryPhotography from '../components/navbar-category-photography';
import SideMenu from '../components/side-menu';
import Footer from '../components/footer';



const PhotographyCategory = ({ pageContext, data }) => {
    // const { category } = pageContext
    const { edges, totalCount } = data.allMarkdownRemark
    const categoryHeader = `Showing Result ${totalCount} Result${
      totalCount === 1 ? "" : "s"
    }`
    // const categoryHeader = `${tag} (${totalCount})`
    return (
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
                  <div className="columns is-multiline">
                      
                      {/* <section className="column is-12 tags-line-head">
                        <div className="level featured-heading">
                          <div className="level-left">
                            <h2 className="level-item tags-title">{categoryHeader} <span className="hashtag">{category}</span></h2>
                          </div>
                          <div className="level-right">
                            <div class="tags">
                              <Link to="/categories" className="tag">See All Category</Link>
                            </div>
                          </div>
                        </div>
                      </section>   */}

                      <div className="columns is-multiline filter-section">
                        <div className="column is-12">
                            <Link to="photography" className="filter filter-active">ALL</Link>
                            <Link to="photography/couples-lovebirds" className="filter">COUPLES & LOVEBIRDS</Link>
                            <Link to="photography/ceremonials" className="filter">CEREMONIALS</Link>
                            <Link to="photography/tying-the-knot" className="filter">TYING THE KNOT</Link>
                            <Link to="photography/folks-families" className="filter">FOLKS & FAMILIES</Link>
                        </div>
                        <div className="column is-6 label-section show-results margin-top-1">
                            <p> {categoryHeader} </p>
                        </div>
                        <div className="column is-6 label-section reset-filter">
                            {/* <p><button className="reset-button">RESET FILTER</button></p> */}
                        </div>
                    </div>    
                     

                      {edges.map(({ node }) => {
                        const { slug } = node.fields
                        const { title, category } = node.frontmatter
                          
                          return(
                            <div className="column is-4">
                                <div className="card-image">
                                  <Link to={`photography/${slug}`}>
                                    <Img className="image" fluid={node.frontmatter.featuredImage.childImageSharp.fluid}/>
                                  </Link>
                                </div>
                                <div className="card-content">
                                  <Link key={slug} to={`photography/${slug}`}>
                                    <p className="proj-cat">{category}</p>
                                    <p className="proj-title">{title}</p>
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
        </div>
       
    )
  }
  PhotographyCategory.propTypes = {
    pageContext: PropTypes.shape({
      category: PropTypes.string.isRequired,
    }),
    data: PropTypes.shape({
      allMarkdownRemark: PropTypes.shape({
        totalCount: PropTypes.number.isRequired,
        edges: PropTypes.arrayOf(
          PropTypes.shape({
            node: PropTypes.shape({
              frontmatter: PropTypes.shape({
                title: PropTypes.string.isRequired,
                category: PropTypes.string.isRequired,
              }),
              fields: PropTypes.shape({
                slug: PropTypes.string.isRequired,
              }),
            }),
          }).isRequired
        ),
      }),
    }),
  }
  export default PhotographyCategory



  export const pageQuery = graphql`
    query($category: String) {
      allMarkdownRemark(
        limit: 2000
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { 
          frontmatter: { 
            category: { in: [$category] } 
            # If you want to filter based on type journal
            # type: { in: ["journal"] }
          } 
        }
      ) {
        totalCount
        group(field: frontmatter___category) {
          fieldValue
          totalCount
        }
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              category
              featuredImage{
                childImageSharp {
                  fluid(maxWidth: 480, quality:80) {
                      ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }

    }
  `
