import React from 'react';
import './style.scss';
import Helmet from './helmet';
import HeroSlider from './hero-slider';
import SideMenu from './side-menu';
import NavbarHome from './navbar-home';
import Footer from './footer';
import ReadTheStories from './read-the-stories';
import Subscription from './subscription';
import RecentWorks from './recent-works';
import { graphql } from 'gatsby';



const LayoutHome = ({ children }) => (
	<div className="columns is-gapless">
		<div className="column side-menu">
			<SideMenu/>
			<div className="sidemenu-label">MENU</div>
		</div>	
		<div className="column is-rest">	

			<Helmet />
			<nav className="is-hidden-mobile navbar-home">
				<NavbarHome/>
			</nav>
			<HeroSlider/>

			<RecentWorks/>

			<section className="section read-the-stories">
				<div className="level featured-heading">
					<div className="level-left">
						<h2 className="is-size-2 level-item group-list-title">Read the Stories</h2>
					</div>
				</div>
			</section>

				<ReadTheStories />
				<Subscription />
				<Footer />

		</div>
	</div>
);


const indexQuery = graphql`
    query{
        allMarkdownRemark(limit : 5){
			totalCount
            edges{
                node{
                    id
                    frontmatter{
                    title
                    date
                    author
					category
                    }
                    excerpt
                }
            }
        }
    }
`


export default LayoutHome;