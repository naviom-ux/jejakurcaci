import React from 'react';
import '../components/style.scss';
import { Link } from 'gatsby';
import { graphql, useStaticQuery } from 'gatsby';
import Img from "gatsby-image";
import ArrowRBlack from '../images/arrow-right-black.svg';

const RecentWorks = () => {

    const data = useStaticQuery(graphql`
        query{
            regular: allMarkdownRemark(
                filter: {
                    frontmatter: {category: {in: ["Love Stories → Couples & Lovebirds", "Love Stories → Folks & Families"]}}
                },
                limit: 4,
                skip: 1
            ){
                edges{
                    node{
                        frontmatter{
                            title
                            category
                            featuredImage{
                                childImageSharp {
                                    fluid(maxWidth: 480, quality: 80) {
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


            featured: allMarkdownRemark(
                filter: {
                    frontmatter: {category: {in: ["Love Stories → Couples & Lovebirds", "Love Stories → Folks & Families"]}}
                },
                limit: 1,
            ){
                edges{
                    node{
                        frontmatter{
                            title
                            category
                            featuredImage{
                                childImageSharp {
                                    fluid(maxWidth: 640, quality: 80) {
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                        }
                        fields{
                            slug
                        }
                        excerpt(pruneLength: 180)
                    }
                }
            } 

        }
    `)

    return(
    <section>
        <div className="section recent-works">
            <div className="level featured-heading">
                <div className="level-left">
                    <h2 className="is-size-2 level-item group-list-title">Recent Works</h2>
                </div>
                <div className="level-right">
                    <Link to="/photography-list" class="button is-normal level-item">
                        SEE ALL WORKS
                            <img className="image see-all" src={ArrowRBlack} alt="Arrow Right" />	
                    </Link>
                </div>
            </div>
        </div>

        <div className="section project-thumbnail">
            <div className="columns is-multiline padding-list">
                {data.featured.edges.map((edge) => {
                    return(
                    <div className="column is-5">
                        <div className="card-image">
                            <div className="image">
                                <Link to={`/photography/${edge.node.fields.slug}`}>
                                    <Img className="image"  fluid={edge.node.frontmatter.featuredImage.childImageSharp.fluid}/>
                                </Link>
                            </div>
                        </div>
                        <div className="card card-content">
                            <Link to={`/photography/${edge.node.fields.slug}`}>
                                <p className="proj-cat">{edge.node.frontmatter.category}</p>
                                <p className="proj-title">
                                    {edge.node.frontmatter.title}
                                </p>
                                <p className="proj-excerpt">
                                    {edge.node.excerpt}
                                </p>
                            </Link>
                        </div>
                    </div>
                    )
                })}

                <div className="column is-7">
                    <div className="columns is-multiline">
                        {data.regular.edges.map((edge) => {
                            return(
                                <div className="column is-6">
                                    <div className="card-image">
                                        <div className="image">
                                            <Link to={`/photography/${edge.node.fields.slug}`}>
                                                <Img className="image"  fluid={edge.node.frontmatter.featuredImage.childImageSharp.fluid}/>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="card card-content">
                                        <Link to={`/photography/${edge.node.fields.slug}`}>
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
        </div>

    </section>

    )}

export default RecentWorks