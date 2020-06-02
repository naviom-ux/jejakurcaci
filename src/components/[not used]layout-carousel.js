import React from 'react';
import PropTypes from "prop-types"
import Helmet from './helmet';
import {Link} from 'gatsby';
import { StaticQuery, graphql } from "gatsby";
import PinterestBlack from '../images/pinterest-black.svg';
import FacebookBlack from '../images/facebook-black.svg';
import InstagramBlack from '../images/instagram-black.svg';
import CloseBlack from '../images/close-black.svg';
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing'

const LayoutCarousel = ({ children }) => (
    
<StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div>
        <Helmet />
        <ModalRoutingContext.Consumer>
          {({ modal, closeTo }) => (
              <section className="project-carousel">
                  <div className="columns no-bot-margin no-top-margin">
                      <Link to={closeTo}>
                          <img src={CloseBlack} className="close-btn" />
                      </Link>
                      <div className="column is-7">
                          <div className="left-side">
                              {children}
                          </div>
                      </div>
                      <div className="column is-5">
                          <div className="right-side">
                              <p className="pages">5<span>/25</span></p>
                              <h1 className="title">Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit</h1>
                              <p className="caption">Cat ipsum dolor sit amet, mark territory. Pounce on unsuspecting person murr i hate humans they are so annoying so while happily ignoring when being called for making bread on the bathrobe for show belly. Milk the cow scratch the furniture, and get scared by doggo also cucumerro . Scratch the furniture russian blue fight own tail cereal boxes make for five star accommodation and lick human with sandpaper tongue.</p>
                              <div className="share">
                                  <p>SHARE</p>
                                  <a href="https://www.facebook.com/Jejakurcaci-289920665021670/" target="_blank" rel="noopener noreferrer">
                                      <img className="image social-logo" src={FacebookBlack} alt="Facebook Icon" />
                                  </a>
                                  <a href="https://id.pinterest.com/effendidani/jejakurcaci/" target="_blank" rel="noopener noreferrer">
                                      <img className="image social-logo" src={PinterestBlack} alt="Pinterest Icon" />
                                  </a>
                                  <a href="https://www.instagram.com/jejakkurcaci/" target="_blank" rel="noopener noreferrer">
                                      <img className="image social-logo" src={InstagramBlack} alt="Instagram Icon" />
                                  </a>
                              </div>
                          </div>
                      </div>
                  </div>
            
              </section>
           )}
           </ModalRoutingContext.Consumer>
      </div>
    )}
  />
)

LayoutCarousel.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutCarousel;