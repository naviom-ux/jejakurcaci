// import React from 'react';
// import '../components/style.scss';
// import { graphql, useStaticQuery } from 'gatsby';
// import Helmet from '../components/helmet';
// import SideMenu from '../components/side-menu';
// import Subscription from '../components/subscription';
// import Footer from '../components/footer';
// import { Link } from 'gatsby';
// import Img from "gatsby-image";
// import ArrowRBlack from '../images/arrow-right-black.svg';
// import ArrowLBlack from '../images/arrow-left-black.svg';
// import NavbarListingPhotography from '../components/navbar-listing-photography';

// const PhotographyList = () => {
//     const data = useStaticQuery(graphql`
//         query{
//             regular:allMarkdownRemark(
//                 filter: {
//                     frontmatter: { type: { eq: "photography" } }
//                 }, skip: 1
//             ){
//                 edges{
//                     node{
//                         frontmatter{
//                             title
//                             category
//                             type
//                             date(formatString: "MMMM D, YYYY")
//                             featuredImage{
//                                 childImageSharp {
//                                     fluid(maxWidth: 600, quality:80) {
//                                         ...GatsbyImageSharpFluid
//                                     }
//                                 }
//                             }
//                         }
//                         fields{
//                             slug
//                         }
//                     }
//                 }
//             } 



//             featured:allMarkdownRemark(
//                 filter: {
//                     frontmatter: {category: {in: ["Love Stories → Couples & Lovebirds", "Love Stories → Folks & Families"]}}
//                 },
//                 ,
//                 limit: 1
//             ){
//                 edges{
//                     node{
//                         excerpt(pruneLength: 250)
//                         frontmatter{
//                             title
//                             category
//                             type
//                             date(formatString: "MMMM D, YYYY")
//                             featuredImage{
//                                 childImageSharp {
//                                     fluid(maxWidth: 1920, quality:95) {
//                                         ...GatsbyImageSharpFluid
//                                     }
//                                 }
//                             }
//                         }
//                         fields{
//                             slug
//                         }
//                     }
//                 }
//             } 

//         }
//     `)

//     return(

//         <section className="columns is-gapless">
//             <div className="column side-menu">
//                 <SideMenu/>
//             </div>	
//             <div className="column is-rest">	
//                 <Helmet />
//                 <div className="columns">
//                     <div className="column is-12">
//                         <nav className="is-hidden-mobile navbar-general">
//                             <NavbarListingPhotography/>
//                             <div className="sidemenu-label">MENU</div>
//                         </nav>
//                     </div>
//                 </div>

//                 <div className="columns photography-list is-centered">
//                     <div className="column is-10">
//                     {data.featured.edges.map((edge) => {
//                         return(
//                             <div className="columns">
//                                 <div className="column is-6 no-right-padding">
//                                     <Link to={`/photography/${edge.node.fields.slug}`}>
//                                         <Img className="image featured-image"  fluid={edge.node.frontmatter.featuredImage.childImageSharp.fluid}/>
//                                     </Link>
//                                 </div>
//                                 <div className="column is-6 container-relative">
//                                     <div className="">
//                                         <div className="padding-featured">
//                                             <Link to={`/photography/${edge.node.fields.slug}`}>
//                                                 <p className="proj-date">{edge.node.frontmatter.date}</p>
//                                                 <p className="proj-cat">{edge.node.frontmatter.category}</p>
//                                                 <p className="proj-title">
//                                                     {edge.node.frontmatter.title}
//                                                 </p>
//                                                 <p className="proj-excerpt">
//                                                     {edge.node.excerpt}
//                                                 </p>
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             )
//                         })}


//                         <div className="columns is-multiline filter-section">
//                             <div className="column is-12">
//                                 <button className="filter filter-active">COUPLES & LOVEBIRDS</button>
//                                 <button className="filter">CEREMONIALS</button>
//                                 <button className="filter">TYING THE KNOT</button>
//                                 <button className="filter">FOLKS & FAMILIES</button>
//                             </div>
//                             <div className="column is-6 label-section show-results">
//                                 <p>SHOWING 24 RESULTS</p>
//                             </div>
//                             <div className="column is-6 label-section reset-filter">
//                                 <p><button className="reset-button">RESET FILTER</button></p>
//                             </div>
//                         </div>

//                         <div className="columns is-multiline">
//                             {data.regular.edges.map((edge) => {
//                             return(

//                                 <div className="column is-4">
//                                     <div className="card-image">
//                                         <Link to={`/photography/${edge.node.fields.slug}`}>
//                                             <Img className="image"  fluid={edge.node.frontmatter.featuredImage.childImageSharp.fluid}/>
//                                         </Link>
//                                     </div>
//                                     <div className="card-content">
//                                         <Link to={`/photography/${edge.node.fields.slug}`}>
//                                             <p className="proj-date">{edge.node.frontmatter.date}</p>
//                                             <p className="proj-cat">{edge.node.frontmatter.category}</p>
//                                             <p className="proj-title">
//                                                 {edge.node.frontmatter.title}
//                                             </p>
//                                         </Link>
//                                     </div>
//                                 </div>

//                                 )
//                             })}
//                         </div>
//                     </div>
//                 </div>

//                 <div className="columns is-multiline pagination-section">
//                     <div className="column is-12">
//                         <span>
//                             <button className="arrow-l"><img src={ArrowLBlack} alt="arrow prev" /></button>
//                             <span className="page"> PAGE <span className="page-number"> 1/6 </span></span>
//                             <button className="arrow-r"><img src={ArrowRBlack} alt="arrow next" /></button>
//                         </span>
                        
//                     </div>
//                 </div>


//                 <Subscription/>
//                 <Footer/>
//                 </div>
//             </section>

//     )}

// export default PhotographyList