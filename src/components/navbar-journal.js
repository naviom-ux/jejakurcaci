import React from 'react';
import './style.scss';
import { Link } from 'gatsby';

import BrandLogo from '../images/logo-black-center.svg';
import SearchBlack from '../images/search-black.svg';
import PinterestBlack from '../images/pinterest-black.svg';
import FacebookBlack from '../images/facebook-black.svg';
import InstagramBlack from '../images/instagram-black.svg';

const NavbarJornal = () => (
	<div>
		<nav className="navbar border-bottom">
			<div className="container">
				<div className="navbar-menu columns is-multiline">
					<div className="column is-12 first-row">
						<div className="level">
							<div className="level-item">
								<Link to="/">
									<img className="image brand-logo" src={BrandLogo} alt="Brand Logo" />	
								</Link>
							</div>
							<Link to="/search" className="search-top-right">
								<span className="navbar-item">
									<img className="image search" src={SearchBlack} alt="Search Icon" />	
								</span>
							</Link>
						</div>
					</div>
					<div className="column is-12 second-row">
					<div className="columns">
						<div className="column is-4">
							<div class="breadcrumb" >
								<ul>
									<li><Link to="/">Home</Link></li>
									<li><Link to="/journal-list/">Journal</Link></li>
									<li class="is-active"><Link to="/page" aria-current="page">Page</Link></li>
								</ul>
							</div>
						</div>
						<div className="column is-4">
							
						</div>
						<div className="column is-4">
							<div className="level-right">
								<span className="social-logo">
									<a href="https://www.instagram.com/jejakkurcaci/" target="_blank" rel="noopener noreferrer">
										<img className="image social-logo" src={InstagramBlack} alt="Instagram Icon" />	
									</a>
								</span>
								<span className="social-logo">
									<a href="https://www.facebook.com/Jejakurcaci-289920665021670/" target="_blank" rel="noopener noreferrer">
										<img className="image social-logo" src={FacebookBlack} alt="Facebook Icon" />
									</a>
								</span>
								<span className="social-logo">
									<a href="https://id.pinterest.com/effendidani/jejakurcaci/" target="_blank" rel="noopener noreferrer">
										<img className="image social-logo" src={PinterestBlack} alt="Pinterest Icon" />
									</a>
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		</nav>
	</div>
);

export default NavbarJornal;
