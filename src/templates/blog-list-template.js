import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Img from "gatsby-image"

// function that will grab these categories
const getCategories = items => {
    let categoryItems = items.map(item => {
      return item.node.frontmatter.category
    })
    let uniqueCategories = new Set(categoryItems)
    let categories = Array.from(uniqueCategories)
    categories = ["all posts", ...categories]
    return categories
  }

export default class BlogList extends React.Component {
    state = {
        items: this.props.data.allMarkdownRemark.edges,
        blogPostItems: this.props.data.allMarkdownRemark.edges,
        categories: getCategories(this.props.data.allMarkdownRemark.edges),
        selectedItem: getCategories(this.props.data.allMarkdownRemark.edges) && getCategories(this.props.data.allMarkdownRemark.edges)[0],
      }

      handleItems = category => {
        if (category === "all posts") {
          this.setState({
            blogPostItems: [...this.state.items],
            selectedItem: category,
          })
        } else {
          this.setState({
            blogPostItems: [
              ...this.state.items.filter(edge => {
                return edge.node.frontmatter.category === category
              }),
            ],
            selectedItem: category,
          })
        }
      } 
    
    render() {

    const { currentPage, numPages } = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString()
    const nextPage = (currentPage + 1).toString()

    // console.log(this.props.pageContext, "DSINI=======");
    const posts = this.props.data.allMarkdownRemark.edges
    return (
    <div className="columns is-multiline">
        <div className="column is-12">
          <div className="filterButton">
            {this.state.categories.map((category, index) => {
              return (
                <button
                    type="button"
                    key={index}
                    onClick={() => this.handleItems(category)}
                    style={this.state.selectedItem === category ? activeButtonClass : null}
                  >
                  {category}
                </button>
              )
            })}
          </div>
        </div>

            {this.state.blogPostItems.map(edge => {
            return (
                <div className="column is-4" key={edge.node.id}>
                
                    {edge.node.frontmatter.featuredImage && (
                    <div className="card-image">
                        <Link to={`/${edge.node.frontmatter.type}/${edge.node.fields.slug}/`}>
                        <Img
                            fluid={edge.node.frontmatter.featuredImage.childImageSharp.fluid}
                            alt={edge.node.frontmatter.title}
                        />
                        </Link>
                    </div>
                    )}
                    <div className="card-content">
                    <Link to={`/${edge.node.frontmatter.type}/${edge.node.fields.slug}/`}>
                        <p className="proj-cat">{edge.node.frontmatter.category}</p>
                        <p className="proj-title">
                        
                            {edge.node.frontmatter.title}
                        </p>
                    </Link>
                </div>
                </div>
            )
            })}
        
        {/* <div className="column is-12">
            {posts.map(({ node }) => {
                const title = node.frontmatter.title || node.fields.slug
                return <div key={node.fields.slug}>{title}</div>
            })}
        </div> */}

        <div className="column is-12">
            {!isFirst && (
                <Link to={`blog-list/${prevPage}`} rel="prev">
                ← Previous Page
                </Link>
            )}
            <span> {currentPage} </span>
            {!isLast && (
                <Link to={`blog-list/${nextPage}`} rel="next">
                Next Page →
                </Link>
            )}
        </div>

      </div>
      
    )
  }
}

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
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
        }
      }
    }
  }
`

const activeButtonClass = {
    backgroundColor: "#555",
    color: "#fff",
  }