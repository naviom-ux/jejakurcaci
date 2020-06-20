import React from "react"
import Pager from '../components/pager';
import { Link, graphql } from "gatsby"

export const pageQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "photography" } category: { eq: "Folks & Families" } } },
        sort: { fields: [frontmatter___date], order: DESC},
        skip: $skip,
        limit: $limit
        ) {
        edges {
          node{
              frontmatter{
                  title
                  category
                  type
                  featuredImage{
                      childImageSharp {
                          fluid(maxWidth: 600, quality:80) {
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
`;

const PhotographyIndexA = ({ data, pageContext, location }) => {
    const posts = data.allMarkdownRemark.edges;

    return (
      <div location={location}>
        {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <article key={node.fields.slug}>
                <header>
                  <h3>
                    <Link to={`${node.frontmatter.type}/${node.fields.slug}`}> {title} </Link>
                  </h3>
                  <small>{node.frontmatter.date}</small>
                </header>
                <section>
                  <p dangerouslySetInnerHTML={{ __html: node.frontmatter.description || node.excerpt }} />
                </section>
              </article>
            )
        })}

        <Pager pageContext={pageContext} />
      </div>
    )
};

export default PhotographyIndexA;