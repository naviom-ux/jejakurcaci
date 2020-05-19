import React from 'react';
import './style.scss';
import Helmet from './helmet';
import NavbarPhotography from './navbar-photography';
import SideMenu from './side-menu';
import Subscription from './subscription';
import Footer from './footer';
import { Link } from 'gatsby';
import ArrowRBlack from '../images/arrow-right-black.svg';
import Image1 from '../images/article/jejakurcaci_masami_daiki_couplesession-3.jpg';

const LayoutGeneral = ({ children }) => (
    <div className="columns is-gapless">
        <div className="column side-menu">
            <SideMenu/>
            <div className="sidemenu-label">MENU</div>
        </div>	
        <div className="column is-rest">	
                <Helmet />
                <nav className="is-hidden-mobile navbar-general">
                    <NavbarPhotography/>
                </nav>
                <div className="columns">
                    <div className="column is-12 post-title">
                        <p>Love Stories → Couples & Lovebirds</p>
                        <h1>Masami & Daiki<br/>Gaienmae, Japan, 2019</h1>
                    </div>  
                </div>
                <div className="columns is-centered no-bot-margin">
                    <div className="column is-10">
                        <img className="featured-image" src={Image1} alt="Featured Image" />	
                        <div className="columns border-author">
                            <div className="column is-6">
                                <p className="proj-date">MONDAY, FEBRUARY 31, 2020</p>
                                <p className="proj-hour">16:30</p>
                            </div>
                            <div className="column is-6">
                                <p className="author">Dani Effendi</p>
                            </div>
                        </div>
                        <div className="columns">
                            <div className="column is-8 is-offset-2">
                                <p className="quote">Cat ipsum dolor sit amet, scratch at fleas, meow until belly rubs, hide behind curtain when vacuum cleaner is on scratch strangers and poo on owners food claw at curtains stretch and yawn nibble on tuna ignore human bite human hand eat a plant, kill a hand.</p>
                            </div>
                        </div> 
                        <div className="columns border-gallery-thumb">
                            <div className="column is-5">
                                <h3 className="second-post-title">Masami & Daiki <br /> Gaienmae, Japan, 2019</h3>
                            </div>
                            <div className="column is-7 thumbnail-gallery no-bot-padding">
                                <div className="columns">
                                    <div className="column is-6 no-bot-padding">
                                        <p className="gallery-title">GALLERY</p>
                                    </div>
                                    <div className="column is-6 no-bot-padding">
                                        <p className="images-count">35 IMAGES</p>
                                    </div>
                                </div>
                                <div className="columns is-multiline">
                                    <div className="column is-4">
                                        <img className="image" src={Image1} alt="Thumbnail" />
                                    </div>
                                    <div className="column is-4">
                                        <img className="image" src={Image1} alt="Thumbnail" />
                                    </div>
                                    <div className="column is-4">
                                        <img className="image" src={Image1} alt="Thumbnail" />
                                    </div>
                                    <div className="column is-4">
                                        <img className="image" src={Image1} alt="Thumbnail" />
                                    </div>
                                    <div className="column is-4">
                                        <img className="image" src={Image1} alt="Thumbnail" />
                                    </div>
                                    <div className="column is-4">
                                        <div className="see-all-thumb">
                                            <div className="columns">
                                                <div className="column is-8">
                                                    <div>
                                                        <Link to="/carousel" data-target="modal">See All Images</Link> 
                                                    </div>
                                                </div>
                                                <div className="column is-4">
                                                    <img className="image" src={ArrowRBlack} alt="Arrow Right" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Carousel Area */}
                        <div className="modal">
                            <div className="modal-background"></div>
                            <div className="modal-content">
                                test
                            </div>
                            <button className="modal-close is-large" aria-label="close"></button>
                        </div>

                        <div className="columns">
                            <div className="column is-8 body-post">
                                <h2>SUBTITLE OR SUBCOPY OF THE ARTICLE</h2>
                        <p>On one fine afternoon in Tokyo, I had a pleasant chance to take a walk with a lovely couple, Masami and Daiki, all the way from Gaienmae to Meiji Jingu. It was rather spontaneous and we had no specific destination - we decided to let the universe do its magic on us. But apparently, sometimes the best plan is having no plan at all because we accidentally discovered so many cute places and ended up with so many wonderful pictures! It was a 2 km walk, but we had so much fun that it didn't feel the slightest bit exhausting!</p>
<br/><p>During our pleasant walk to Meiji Jingu, we happened to pass by a playground. We decided to stop by for a bit since we had no particular destination anyway, and I also suggested that the playground would make a cute backdrop for Masami and Daiki's couple pictures.
Turned out, they were more than happy to! It was as if they were back into the child versions of themselves. I think they enjoyed the swing set the most, which you can see in the pictures. Well, it must be really nice to embrace our inner child once in a while!
</p>
                            </div>
                        </div>
                        <div className="columns">
                            <div className="column is-12 border-tag">
                                <div class="tags">
                                    <span class="tag">PHOTOGRAPHY</span>
                                    <span class="tag">WEDDING</span>
                                    <span class="tag">JAKARTA</span>
                                </div>
                            </div>
                        </div>

                    
                        <div className="columns is-multiline read-next-journal">
                            <div className="column is-12">
                                <section className="read-next-title">
                                    <div className="level featured-heading">
                                        <div className="level-left">
                                            <h2 className="is-size-2 level-item group-list-title">Read Next</h2>
                                        </div>
                                    </div>
                                </section>
                            </div>

                            <div className="columns read-next-thumbnail">
                                <div className="column is-4">
                                    <div className="card-image">
                                        <div className="image">
                                            <Link to="/post">
                                                <img src={Image1} alt=""></img>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="card card-content">
                                        <p className="proj-cat">PROJECTS → EDITORIALS</p>
                                        <p className="proj-title">
                                        Lorem Ipsum Dolor Sit Amet,Consectetur Adipiscing Elit
                                        </p>
                                    </div>
                                </div>
                                <div className="column is-4">
                                    <div className="card-image">
                                        <div className="image">
                                            <Link to="/post">
                                                <img src={Image1} alt=""></img>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="card card-content">
                                        <p className="proj-cat">PROJECTS → EDITORIALS</p>
                                        <p className="proj-title">
                                        Lorem Ipsum Dolor Sit Amet,Consectetur Adipiscing Elit
                                        </p>
                                    </div>
                                </div>
                                <div className="column is-4">
                                    <div className="card-image">
                                        <div className="image">
                                            <Link to="/post">
                                                <img src={Image1} alt=""></img>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="card card-content">
                                        <p className="proj-cat">PROJECTS → EDITORIALS</p>
                                        <p className="proj-title">
                                        Lorem Ipsum Dolor Sit Amet,Consectetur Adipiscing Elit
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            <Subscription />
            <Footer />

        </div>
    </div>
)

export default LayoutGeneral;