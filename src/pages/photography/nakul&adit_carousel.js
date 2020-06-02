import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import ArrowLeftBlack from "../../images/arrow-left-black.svg"
import ArrowRightBlack from "../../images/arrow-right-black.svg"
// import PropTypes from "prop-types"
import Helmet from '../../components/helmet';
import {Link} from 'gatsby';
import PinterestBlack from '../../images/pinterest-black.svg';
import FacebookBlack from '../../images/facebook-black.svg';
import InstagramBlack from '../../images/instagram-black.svg';
import CloseBlack from '../../images/close-black.svg';
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing'



function SlideShow() {
  const [index, setIndex] = useState(0)
  const data = useStaticQuery(
    graphql`
      query{

        description:allMarkdownRemark(
            filter: {
                frontmatter: {title: {eq: "Nakul & Adit, Bandung"}}
            }
        ){
            edges{
                node{
                    frontmatter{
                        title
                        quote
                    }
                    # excerpt(pruneLength: 250)
                    fields{
                        slug
                    }
                }
            }
        } 

        photos:allFile(
          sort: { fields: name, order: ASC }
          filter: { relativeDirectory: { eq: "slides/nakul&adit" } }
        ) {
          edges {
            node {
              id
              name
              childImageSharp {
                fluid(maxWidth: 1920, quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `
  )
  //Minus 1 for array offset from 0
  const length = data.photos.edges.length - 1
  const handleNext = () =>
    index === length ? setIndex(0) : setIndex(index + 1)
  const handlePrevious = () =>
    index === 0 ? setIndex(length) : setIndex(index - 1)
  const { node } = data.photos.edges[index]
  console.log(index)
  console.log(length)
  return (
    <div>
        <Helmet />
        <ModalRoutingContext.Consumer>
          {({ closeTo }) => (
            <section className="project-carousel">
                <div className="columns no-bot-margin no-top-margin">
                    <Link to={closeTo} state={{ noScroll: true}}>
                        <img src={CloseBlack} className="close-btn" alt="close button"/>
                    </Link>
                
                    <div className="column is-7">
                        <div className="left-side">
                        <div>
                          <div>
                            <Img
                              fluid={node.childImageSharp.fluid}
                              key={node.id}
                              alt={node.name.replace(/-/g, " ").substring(2)}
                            />
                          </div>
                          <div>
                            <button onClick={() => handlePrevious()} className="prev-slide"><img src={ArrowLeftBlack} alt="prev"/></button>
                            <button onClick={() => handleNext()} className="next-slide"><img src={ArrowRightBlack} alt="next"/></button>
                          </div>
                        </div>
                        </div>
                    </div>
                    <div className="column is-5">
                        <div className="right-side">
                            <p className="pages">{index+1}<span>/{data.photos.edges.length}</span></p>
                            {data.description.edges.map((edge) => {
                                return(
                                  <div>
                                    <h1 className="title">{edge.node.frontmatter.title}</h1>
                                    <p className="caption">{edge.node.frontmatter.quote}</p>
                                  </div>
                                )
                            })}
                            <div className="share">
                                <p>SHARE</p>
                                <a href="https://www.facebook.com/Jejakurcaci-289920665021670/" target="_blank" rel="noopener noreferrer">
                                    <img className="image social-logo" src={FacebookBlack} alt="Facebook Icon" />
                                </a>
                                <a href="https://id.pinterest.com/effendidani/jejakurcaci/" target="_blank" rel="noopener noreferrer">
                                    <img className="image social-logo" src={PinterestBlack} alt="Pinterest Icon" />
                                </a>
                                <a href="https://www.instagram.com/jejakkurcaci/" target="_blank" rel="noopener noreferrer">
                                    <img className="image social-logo" src={InstagramBlack} alt="Instagram Icon" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            )}
            </ModalRoutingContext.Consumer>
      </div>
    
  )
}
export default SlideShow