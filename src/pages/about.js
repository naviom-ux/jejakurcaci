import React from 'react'
import '../components/style.scss';
import { graphql, useStaticQuery } from 'gatsby';
import Helmet from '../components/helmet';
import SideMenu from '../components/side-menu';
import Footer from '../components/footer';
import NavbarAbout from '../components/navbar-about';
import Image1 from '../images/slides/nakul&adit/jejakurcaci_nakul_adit_couplesession-39.jpg';

const About = () => {

    return(
        <div className="columns is-gapless">
            <div className="column side-menu">
                <SideMenu/>
            </div>	
            <div className="column is-rest">	

                <Helmet />

                <nav className="is-hidden-mobile navbar-general">
                    <NavbarAbout/>
                </nav>

                <div className="columns is-multiline is-centered no-bot-margin about">
                    <div className="column is-10">
                        <div className="columns">
                            <div className="column is-6 about-desc">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do euismod  tempor incididunt ut labore et dolore magna aliqua.<br/><br/></p>
                                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi  ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate  velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            </div>  
                            <div className="column is-6">
                                <img className="featured-image" src={Image1} alt="Featured Image" />	
                            </div>  
                        </div>  
                    </div>  
                </div>

                <Footer/>
            </div>
        </div>
    )}

export default About
