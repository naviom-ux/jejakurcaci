import React from 'react';
import '../components/style.scss';
import { Link } from 'gatsby';
import { graphql, useStaticQuery } from 'gatsby';
import Img from "gatsby-image";
import ArrowRBlack from '../images/arrow-right-black.svg';

const ReadTheStories = () => { 

    const data = useStaticQuery(graphql`
        query{
            allMarkdownRemark(sort: {
                    fields: [frontmatter___date]
                    order: DESC
                },
                filter: {
                    frontmatter: { type: { eq: "journal" } }
                },
                limit : 5){
                edges{
                    node{
                        frontmatter{
                            title
                            category
                            featuredImage{
                                childImageSharp {
                                    fluid(maxWidth: 600, quality: 80) {
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
    `)

    return(
        <div className="section project-thumbnail">
			<div className="columns is-multiline padding-list">
                <div className="column is-12">
                    <div className="columns is-multiline">
                        {data.allMarkdownRemark.edges.map((edge) => {
                            return(
                                <div className="column is-4">
                                    <div className="card-image">
                                        <div className="image">
                                            <Link to={`/journal/${edge.node.fields.slug}`}>
                                                <Img className="image"  fluid={edge.node.frontmatter.featuredImage.childImageSharp.fluid}/>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="card card-content">
                                        <Link to={`/journal/${edge.node.fields.slug}`}>
                                            <p className="proj-cat">{edge.node.frontmatter.category}</p>
                                            <p className="proj-title">
                                                {edge.node.frontmatter.title}
                                            </p>
                                        </Link>
                                    </div>
                                </div>
                            )
                        })}

                                <div className="column is-4">
                                    <Link to="/journal-list">
                                        <div className="see-all-journal">
                                            <div className="columns">
                                                <div className="column is-8">
                                                    <div>
                                                        <Link to="/journal">See All Journal Entries</Link> 
                                                    </div>
                                                </div>
                                                <div className="column is-4">
                                                    <img className="image" src={ArrowRBlack} alt="Arrow Right" />
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
	
export default ReadTheStories;

