import React from 'react';
import '../components/style.scss';
import { graphql } from 'gatsby'
import Helmet from '../components/helmet';
import NavbarPhotography from '../components/navbar-photography';
import SideMenu from '../components/side-menu';
import Footer from '../components/footer';
import Img from "gatsby-image";
import { Link } from 'gatsby';
import ArrowRBlack from '../images/arrow-right-black.svg';
import NextPhotography from "../components/next-photography.js";



export const query = graphql`
    query(
        $slug: String!
    )
    {
            regular:markdownRemark( fields:{ slug:{ eq: $slug } } )
            {
                fields{
                        slug
                }
                frontmatter{
                    title
                    category
                    quote
                    tags
                    author
                    totalImages
                    date(formatString: "MMMM D, YYYY")
                    featuredImage{
                        childImageSharp {
                            fluid(maxWidth: 1280, quality: 90) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                    thumbnail1{
                        childImageSharp {
                            fluid(maxWidth: 400, quality: 80) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                    thumbnail2{
                        childImageSharp {
                            fluid(maxWidth: 400, quality: 80) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                    thumbnail3{
                        childImageSharp {
                            fluid(maxWidth: 400, quality: 80) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                    thumbnail4{
                        childImageSharp {
                            fluid(maxWidth: 400, quality: 80) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                    thumbnail5{
                        childImageSharp {
                            fluid(maxWidth: 400, quality: 80) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
                html
            }

    }
`

const photography = (props) => {
    return(

        <div className="columns is-gapless">
            <div className="column side-menu">
                <SideMenu/>
            </div>	
            <div className="column is-rest">	
                <Helmet />
                <nav className="is-hidden-mobile navbar-general">
                    <NavbarPhotography/>
                    <div className="sidemenu-label">MENU</div>
                </nav>
                <div className="columns is-multiline is-centered no-bot-margin photography">
                    <div className="column is-10">
                        <div className="post-title">
                            <p>{props.data.regular.frontmatter.category}</p>
                            <h1>{props.data.regular.frontmatter.title}</h1>
                        </div>
                        <div className="featured-image">
                            <Img className="image"  fluid={props.data.regular.frontmatter.featuredImage.childImageSharp.fluid}/>
                        </div>
                        <div className="columns border-author">
                            <div className="column is-6">
                                <p className="proj-date">{props.data.regular.frontmatter.date}</p> 
                                {/* <p className="proj-hour">16:30</p> */}
                            </div>
                            <div className="column is-6">
                                <p className="author">{props.data.regular.frontmatter.author}</p>
                            </div>
                        </div>
                    </div>
                    <div className="column is-8">
                        <p className="quote">{props.data.regular.frontmatter.quote}</p>
                    </div>
                    <div className="column is-10">
                        <div className="columns border-gallery-thumb">
                            <div className="column is-5">
                                <h3 className="second-post-title">{props.data.regular.frontmatter.title}</h3>
                            </div>
                            <div className="column is-7 thumbnail-gallery no-bot-padding">
                                <div className="columns">
                                    <div className="column is-6 no-bot-padding">
                                        <p className="gallery-title">GALLERY</p>
                                    </div>
                                    <div className="column is-6 no-bot-padding">
                                        <p className="images-count">{props.data.regular.frontmatter.totalImages} IMAGES</p>
                                    </div>
                                </div>
                                <div className="columns is-multiline">
                                    <div className="column is-4">
                                        <Link to={`/photography/${props.data.regular.fields.slug}_carousel/`} state={{ modal: true }}>
                                            <Img className="image"  fluid={props.data.regular.frontmatter.thumbnail1.childImageSharp.fluid}/>
                                        </Link>
                                    </div>
                                    <div className="column is-4">
                                        <Link to={`/photography/${props.data.regular.fields.slug}_carousel/`} state={{ modal: true }}>
                                            <Img className="image"  fluid={props.data.regular.frontmatter.thumbnail2.childImageSharp.fluid}/>
                                        </Link>
                                    </div>
                                    <div className="column is-4">
                                        <Link to={`/photography/${props.data.regular.fields.slug}_carousel/`} state={{ modal: true }}>
                                            <Img className="image"  fluid={props.data.regular.frontmatter.thumbnail3.childImageSharp.fluid}/>
                                        </Link>
                                    </div>
                                    <div className="column is-4">
                                        <Link to={`/photography/${props.data.regular.fields.slug}_carousel/`} state={{ modal: true }}>
                                            <Img className="image"  fluid={props.data.regular.frontmatter.thumbnail4.childImageSharp.fluid}/>
                                        </Link>
                                    </div>
                                    <div className="column is-4">
                                        <Link to={`/photography/${props.data.regular.fields.slug}_carousel/`} state={{ modal: true }}>
                                            <Img className="image"  fluid={props.data.regular.frontmatter.thumbnail5.childImageSharp.fluid}/>
                                        </Link>
                                    </div>
                                    <div className="column is-4">
                                        <div className="see-all-thumb">
                                            <div className="columns">
                                                <div className="column is-8">
                                                    <div>
                                                        <Link to={`/photography/${props.data.regular.fields.slug}_carousel/`} state={{ modal: true }} > 
                                                            See All Images
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="column is-4">
                                                    <img className="image" src={ArrowRBlack} alt="Arrow Right" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column is-7 body-post">
                        <div dangerouslySetInnerHTML={{ __html: props.data.regular.html }}></div>
                    </div>  
                    <div className="column is-10 border-tag">
                        <div className="tags">
                                
                            {props.data.regular.frontmatter.tags.map((tag) => [
                                <span className="tag">
                                    {tag}
                                </span>
                            ])}

                        </div>
                    </div>

                    <NextPhotography/>

                </div>
                
                    <Footer/>

            </div>
        </div>
 
    )
}

export default photography