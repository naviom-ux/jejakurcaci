import React from "react"
import Pager from '../components/pager';
import { Link, graphql } from "gatsby"
import NavbarCategoryPhotography from '../components/navbar-category-photography';
import Helmet from '../components/helmet';
import SideMenu from '../components/side-menu';
import Footer from '../components/footer';
import Img from "gatsby-image";


export const pageQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "photography" } } },
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

const PhotographyIndex = ({ data, pageContext, location }) => {
    const posts = data.allMarkdownRemark.edges;

    return (
      // <div location={location}>
      //   {posts.map(({ node }) => {
      //       const title = node.frontmatter.title || node.fields.slug
      //       return (
      //         <article key={node.fields.slug}>
      //           <header>
      //             <h3>
      //               <Link to={`${node.frontmatter.type}/${node.fields.slug}`}> {title} </Link>
      //             </h3>
      //             <small>{node.frontmatter.date}</small>
      //           </header>
      //         </article>
      //       )
      //   })}

      //   <Pager pageContext={pageContext} />
      // </div>



      <div className="columns is-gapless">
        <div className="column side-menu">
            <SideMenu/>
        </div>
        <div className="column is-rest">	
          <Helmet />
          <nav className="is-hidden-mobile navbar-general">
              <NavbarCategoryPhotography/>
              <div className="sidemenu-label">MENU</div>
          </nav>
          <div className="columns photography-list is-centered">
            <div className="column is-10">

              <div className="columns is-multiline">
                {data.allMarkdownRemark.edges.map(({ node }) => {
                  const title = node.frontmatter.title || node.fields.slug
                    return(

                        <div className="column is-4">
                            <div className="card-image">
                                <Link to={`${node.frontmatter.type}/${node.fields.slug}`}>
                                    <Img className="image"  fluid={node.frontmatter.featuredImage.childImageSharp.fluid}/>
                                </Link>
                            </div>
                            <div className="card-content">
                                <Link to={`/photography/${node.fields.slug}`}>
                                    <p className="proj-date">{node.frontmatter.date}</p>
                                    <p className="proj-cat">{node.frontmatter.category}</p>
                                    <p className="proj-title">
                                        {node.frontmatter.title}
                                    </p>
                                </Link>
                            </div>
                        </div>

                          )
                      })}
                  </div>
                  <Pager pageContext={pageContext} />
                </div>
              </div>
              <Footer/>
          </div>
          <div>
        </div>
      </div>
)
};

export default PhotographyIndex;