import React from 'react';
import '../components/style.scss';
import { graphql, Link } from 'gatsby'
import Helmet from '../components/helmet';
import NavbarJournal from '../components/navbar-journal';
import SideMenu from '../components/side-menu';
import Footer from '../components/footer';
import Img from "gatsby-image";
import NextJournal from "../components/next-journal.js";


export const query = graphql`
    query(
        $slug: String!
    )
    {
    markdownRemark(
        fields:{
            slug:{
                eq: $slug
            }
        }
    )
    {
        frontmatter{
            title
            category
            tags
            featuredImage{
                childImageSharp {
                    fluid(maxWidth: 1280, quality: 90) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
        html
    }
    }
`

const journal = (props) => {
    return(

        <div className="columns is-gapless">
            <div className="column side-menu">
                <SideMenu/>
            </div>	
            <div className="column is-rest">	
                <Helmet />
                <nav className="is-hidden-mobile navbar-general">
                    <NavbarJournal/>
                    <div className="sidemenu-label">MENU</div>
                </nav>
                <div className="columns is-multiline is-centered no-bot-margin journal">
                    <div className="column is-10">
                        <div className="post-title">
                            <p>{props.data.markdownRemark.frontmatter.category}</p>
                            <h1>{props.data.markdownRemark.frontmatter.title}</h1>
                        </div>
                        <div className="featured-image">
                            <Img className="image"  fluid={props.data.markdownRemark.frontmatter.featuredImage.childImageSharp.fluid}/>
                        </div>
                        <div className="columns border-author">
                            <div className="column is-6">
                                <p className="proj-date">MONDAY, FEBRUARY 31, 2020</p>
                                <p className="proj-hour">16:30</p>
                            </div>
                            <div className="column is-6">
                                <p className="author">Dani Effendi</p>
                            </div>
                        </div>
                    </div>
                    <div className="column is-7 body-post">
                        <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}></div>
                    </div>  
                    <div className="column is-10 border-tag">
                        <div class="tags">
                            
                            {props.data.markdownRemark.frontmatter.tags.map((tag) => [
                                <Link to={`tags/${tag}`} className="tag">
                                    {tag}
                                </Link>
                            ])}

                        </div>
                    </div>

                    <NextJournal/>

                </div>
                
                    <Footer/>

            </div>
        </div>
 
    )
}

export default journal