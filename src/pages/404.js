import React from 'react'
import { Link } from 'gatsby';
import Helmet from '../components/helmet';
import SideMenu from '../components/side-menu';
import Footer from '../components/footer';
import NavbarHome from '../components/navbar-home';
import ArrowLBlack from '../images/arrow-left-black.svg';

const NotFoundPage = () => (

  <div className="columns is-gapless">
      <div className="column side-menu">
          <SideMenu/>
      </div>	
      <div className="column is-rest">	

          <Helmet />

          <nav className="is-hidden-mobile navbar-general">
              <NavbarHome/>
          </nav>

          <div className="columns is-multiline is-centered no-bot-margin not-found">
              <div className="column is-10">
                <h1>404</h1>
                <h2>The page you requested could not be found</h2>
                <p><Link to="/" className="button back-button"><img src={ArrowLBlack} className="see-all" alt="back arrow"/> Back to Homepage</Link></p>
              </div>  
          </div>

          <Footer/>
      </div>
  </div>
  
)

export default NotFoundPage
