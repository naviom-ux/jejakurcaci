import React from 'react';
import '../components/style.scss';
import { Link } from 'gatsby';
import { graphql, useStaticQuery } from 'gatsby';
import Img from "gatsby-image";

const NextJournal = () => {

    const data = useStaticQuery(graphql`
        query{
            allMarkdownRemark(sort: {
                    fields: [frontmatter___date]
                    order: ASC
                },
                filter: {
                    frontmatter: { type: { eq: "journal" } }
                },
                limit : 3){
                edges{
                    node{
                        frontmatter{
                            title
                            category
                            featuredImage{
                                childImageSharp {
                                    fluid(maxWidth: 600) {
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

        <div className="columns is-centered is-multiline">
            <div className="column is-12 read-next-journal">
                <section className="read-next-title">
                    <div className="level featured-heading">
                        <div className="level-left">
                            <h2 className="is-size-2 level-item group-list-title">Read Next</h2>
                        </div>
                    </div>
                </section>
    
                <div className="columns read-next-thumbnail">
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
                                <p className="proj-cat">{edge.node.frontmatter.category}</p>
                                <p className="proj-title">
                                    {edge.node.frontmatter.title}
                                </p>
                            </div>
                        </div>

                        )
                    })}
                </div>
            </div>
        </div>
    
    )
}


export default NextJournal