import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";
import Helmet from '../components/helmet';
import NavbarTags from '../components/navbar-tags';
import SideMenu from '../components/side-menu';
import Footer from '../components/footer';


const Tags = ({ pageContext, data }) => {
    const { tag } = pageContext
    const { edges, totalCount } = data.allMarkdownRemark
    const tagHeader = `${totalCount} post${
      totalCount === 1 ? "" : "s"
    } tagged with`
    // const tagHeader = `${tag} (${totalCount})`
    return (
      <div className="columns is-gapless">
        <div className="column side-menu">
            <SideMenu/>
        </div>	
        <div className="column is-rest">	
            <Helmet />
              <nav className="is-hidden-mobile navbar-general">
                  <NavbarTags/>
                  <div className="sidemenu-label">MENU</div>
              </nav>
              <div className="columns journal-list is-centered">
                <div className="column is-10">
                  <div className="columns is-multiline">
                      
                      <section className="column is-12 tags-line-head">
                        <div className="level featured-heading">
                          <div className="level-left">
                            <h2 className="level-item tags-title">{tagHeader} <span className="hashtag">#{tag}</span></h2>
                          </div>
                          <div className="level-right">
                            <div class="tags">
                              <Link to="/tags" className="tag">See All Tags</Link>
                            </div>
                          </div>
                        </div>
                      </section>  

                      {edges.map(({ node }) => {
                        const { slug } = node.fields
                        const { title, type, category } = node.frontmatter
                          
                          if (type === "photography") {
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
                              } else {
                                return(
                                  <div className="column is-4">
                                    <div className="card-image">
                                      <Link to={`journal/${slug}`}>
                                        <Img className="image" fluid={node.frontmatter.featuredImage.childImageSharp.fluid}/>
                                      </Link>
                                    </div>
                                    <div className="card-content">
                                      <Link key={slug} to={`journal/${slug}`}>
                                        <p className="proj-cat">{category}</p>
                                        <p className="proj-title">{title}</p>
                                      </Link> 
                                    </div>
                                  </div>  
                                )
                              }
                            })}

                        </div>
                      </div>
                    </div>

                <Footer/>
              </div>
        </div>
       
    )
  }
  Tags.propTypes = {
    pageContext: PropTypes.shape({
      tag: PropTypes.string.isRequired,
    }),
    data: PropTypes.shape({
      allMarkdownRemark: PropTypes.shape({
        totalCount: PropTypes.number.isRequired,
        edges: PropTypes.arrayOf(
          PropTypes.shape({
            node: PropTypes.shape({
              frontmatter: PropTypes.shape({
                title: PropTypes.string.isRequired,
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
  export default Tags


  export const pageQuery = graphql`
    query($tag: String) {
      allMarkdownRemark(
        limit: 2000
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { 
          frontmatter: { 
            tags: { in: [$tag] } 
            # If you want to filter based on type journal
            # type: { in: ["journal"] }
          } 
        }
      ) {
        totalCount
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              category
              type
              tags
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