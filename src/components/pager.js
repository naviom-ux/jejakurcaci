import React from 'react';
import { Link } from 'gatsby';
import ArrowRBlack from '../images/arrow-right-black.svg';
import ArrowLBlack from '../images/arrow-left-black.svg';


const Pager = ({ pageContext }) => {
//   console.log(pageContext);
const { previousPagePath, nextPagePath, numberOfPages, humanPageNumber } = pageContext;
const NavLinkLeft = props => {
    if (humanPageNumber === 1){
        return <span className="opacity30"><img src={props.src} alt="Arrow"/></span>
    } else {
        return <Link to={props.url}><img src={props.src} alt="Arrow"/></Link>
    }
}
const NavLinkRight = props => {
    if (humanPageNumber !== numberOfPages){
        return <Link to={props.url}><img src={props.src} alt="Arrow"/></Link>
    } else {
        return <span className="opacity30"><img src={props.src} alt="Arrow"/></span>
    }
}

// console.log(humanPageNumber, "================")

  return (
    // <nav style={{ display: 'flex', justifyContent: 'space-between' }}>
    //   <div>
    //     {previousPagePath && (
    //       <Link to={previousPagePath}>
    //         <button>← Newer Posts</button>
    //       </Link>
    //     )}
    //   </div>
    //   <div>
    //       {numberOfPages}
    //   </div>

    //   <div style={{ justifySelf: 'flex-end' }}>
    //     {nextPagePath && (
    //       <Link to={nextPagePath}>
    //         <button>Older Posts →</button>
    //       </Link>
    //     )}
    //   </div>
    // </nav>

    <div className="columns is-multiline pagination-section">
        <div className="column is-12">
            <span>
                <button className="arrow-r">
                    {/* <Link to={previousPagePath}>
                        <img className="image see-all" src={ArrowLBlack} alt="Prev" />
                    </Link> */}
                    <NavLinkLeft url={previousPagePath} src={ArrowLBlack}></NavLinkLeft>
                </button>

                <span className="page">PAGE<span className="page-number"> {humanPageNumber}/{numberOfPages} </span></span>

                <button className="arrow-l">
                    {/* <Link to={nextPagePath}>
                        <img className="image see-all" src={ArrowRBlack} alt="Next" />
                    </Link> */}
                    <NavLinkRight url={nextPagePath} src={ArrowRBlack}></NavLinkRight>
                </button>
            </span>
            
        </div>
    </div>
  );
};

export default Pager;