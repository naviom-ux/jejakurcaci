import React, { Component } from "react"
import { Link } from "gatsby"

import Img from "gatsby-image"
// import blogStyles from "../pages/blog.module.scss"


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

class BlogItems extends Component {
  state = {
    items: this.props.items.allMarkdownRemark.edges,
    blogPostItems: this.props.items.allMarkdownRemark.edges,
    categories: getCategories(this.props.items.allMarkdownRemark.edges),
    selectedItem: getCategories(this.props.items.allMarkdownRemark.edges) && getCategories(this.props.items.allMarkdownRemark.edges)[0],
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
    // console.log(this.state.categories)
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
        </div>
    )
  }
}

const activeButtonClass = {
  backgroundColor: "#555",
  color: "#fff",
}

export default BlogItems