import React from 'react'
// import Link from 'gatsby-link'
import { Link, Img } from 'gatsby'


const NavLink = props => {
  if (!props.test) {
    return <Link to={props.url}>{props.text}</Link>
  } else {
    return <span>{props.text}</span>
  }
}

const Listing = ({pageContext}) => {
    const { group, index, first, last, pageCount } = pageContext
    const previousUrl = index - 1 == 1 ? '/journal/' : "/journal/"+(index - 1).toString()
    const nextUrl = "/journal/" + (index + 1).toString()
  
  return (
    <div>
        <h4>{pageCount} Pages</h4>
        

        {group.map(({ node }) => (
        <div key={node.id} className="blogListing">
                <Link to={`/journal/${node.fields.slug}`}>
                    <div>
                        {node.frontmatter.title}
                        {node.frontmatter.category}
                        {/* <img src={node.frontmatter.featuredImage.publicURL} /> */}
                        <img src={node.frontmatter.featuredImage.childImageSharp.fluid.src}/>
                    </div>
                </Link>
        </div>
        ))}

    
    <div className="previousLink">
        <NavLink test={first} url={previousUrl} text="Go to Previous Page" />
    </div>
    <div className="nextLink">
        <NavLink test={last} url={nextUrl} text="Go to Next Page" />
    </div>


    </div>
  )
}



export default Listing