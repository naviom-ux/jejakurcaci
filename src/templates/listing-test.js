import React from 'react'
import { Link } from 'gatsby'
import Helmet from '../components/helmet';
import NavbarListingJournal from '../components/navbar-listing-journal';
import SideMenu from '../components/side-menu';
import Subscription from '../components/subscription';
import Footer from '../components/footer';
import ArrowRBlack from '../images/arrow-right-black.svg';
import ArrowLBlack from '../images/arrow-left-black.svg';


const NavLink = props => {
  if (!props.test) {
    return <Link to={props.url}><img src={props.src} alt="Arrow"/></Link>
  } else {
    return <span className="opacity30"><img src={props.src} alt="Arrow"/></span>
  }
}

const Listing = ({pageContext}) => {
    const { group, index, first, last, pageCount } = pageContext
    const previousUrl = index - 1 === 1 ? '/journal/' : "/journal/"+(index - 1).toString()
    const nextUrl = "/journal/" + (index + 1).toString()
  
  return (
    <div className="columns is-gapless">
      <div className="column side-menu">
          <SideMenu/>
      </div>	
      <div className="column is-rest">	
          <Helmet />
          <div className="columns">
              <div className="column is-12">
                  <nav className="is-hidden-mobile navbar-general">
                      <NavbarListingJournal/>
                      <div className="sidemenu-label">MENU</div>
                  </nav>
              </div>
          </div>
        
          <div className="columns journal-list is-centered">
            <div className="column is-10">
                <div className="columns is-multiline">

                    <div className="column is-12">
                      <div className="filter-section">
                          <button className="filter filter-active">ALL</button>
                          <button className="filter">PLACE</button>
                          <button className="filter">PEOPLE</button>
                      </div>
                      <div className="column is-12 label-section show-results">
                          <p>SHOWING XX RESULTS</p>
                      </div>
                      {/* <div className="column is-6 label-section reset-filter">
                          <p><button className="reset-button">RESET FILTER</button></p>
                      </div> */}
                  </div>

                  {group.map(({ node }) => (
                    <div key={node.id} className="column is-4">
                      <div className="card-image">
                          <Link to={`/journal/${node.fields.slug}`}>
                            <img src={node.frontmatter.featuredImage.childImageSharp.fluid.src} alt="Thumbnail"/>
                          </Link>
                      </div>
                      <div className="card-content">
                          <Link to={`/journal/${node.fields.slug}`}>
                              <p className="proj-cat">{node.frontmatter.category}</p>
                              <p className="proj-title">
                                {node.frontmatter.title}
                              </p>
                          </Link>
                      </div>
                    </div>
                    ))}

                </div>
              </div>
            </div>

            <div className="columns is-multiline pagination-section">
                <div className="column is-12">
                    <span>
                        <button className="arrow-l"><NavLink test={first} url={previousUrl} src={ArrowLBlack}></NavLink></button>
                        <span className="page">PAGE<span className="page-number"> {index}/{pageCount} </span></span>
                        <button className="arrow-r"><NavLink test={last} url={nextUrl} src={ArrowRBlack}></NavLink></button>
                    </span>
                    
                </div>
            </div>
            <Subscription/>


    
        <Footer/>
          </div>
      </div>


  )
}



export default Listing