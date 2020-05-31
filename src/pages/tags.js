import React from "react"
import PropTypes from "prop-types"

// Utilities
import kebabCase from "lodash/kebabCase"

// Components
import { Link, graphql } from "gatsby"
import Img from "gatsby-image";
import Helmet from '../components/helmet';
import NavbarAllTags from '../components/navbar-all-tags';
import SideMenu from '../components/side-menu';
import Footer from '../components/footer';

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
    <div className="columns is-gapless">
      <div className="column side-menu">
          <SideMenu/>
      </div>
      <div className="column is-rest">	
        <Helmet />
        <nav className="is-hidden-mobile navbar-general">
            <NavbarAllTags/>
            <div className="sidemenu-label">MENU</div>
        </nav>
        <div className="columns journal-list is-centered">
          <div className="column is-10">
            <div className="columns is-multiline">
              <section className="column is-12 tags-line-head">
                <div className="level featured-heading">
                  <div className="level-left">
                    <h2 className="level-item tags-title">All Tags #</h2>
                  </div>
                </div>
              </section>
              <section className="column is-10">
                  <ul className="tags tags-vertical-list">
                    {group.map(tag => (
                      <li key={tag.fieldValue}>
                        <Link to={`/tags/${kebabCase(tag.fieldValue)}/`} className="tag margin-r-1">
                          {tag.fieldValue} <span className="hashtag">({tag.totalCount})</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
              </section>
            </div>
          </div>
        </div>
    <Footer/>
      </div>
    <div>
    </div>
  </div>
)

TagsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}

export default TagsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 2000
      # If you want to filter by journal type
      # filter: { frontmatter: { type: { eq: "journal" } } }
      ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`