import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import ArrowLeftBlack from "../images/arrow-left-black.svg"
import ArrowRightBlack from "../images/arrow-right-black.svg"


function HeroSlider() {
  const [index, setIndex] = useState(0)
  const { allFile } = useStaticQuery(
    graphql`
      query {
        allFile(
          sort: { fields: name, order: ASC }
          filter: { relativeDirectory: { eq: "hero-images" } }
        ) {
          edges {
            node {
              id
              name
              childImageSharp {
                fluid(maxWidth: 1920, quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `
  )
  //Minus 1 for array offset from 0
  const length = allFile.edges.length - 1
  const handleNext = () =>
    index === length ? setIndex(0) : setIndex(index + 1)
  const handlePrevious = () =>
    index === 0 ? setIndex(length) : setIndex(index - 1)
  const { node } = allFile.edges[index]
  console.log(index)
  console.log(length)
  return (
    <div className="hero-home">
        <Img
          fluid={node.childImageSharp.fluid}
          key={node.id}
          alt={node.name.replace(/-/g, " ").substring(2)}
        className="hero-image"/>
      <div className="hero-navigation">
        <div className="columns is-multiline">
            <div className="column is-10 is-offset-1">
              <h2 className="hero-title">Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit</h2>
                <span class="dot-active"></span>
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
            </div>
            <div className="column is-2">
              <button onClick={() => handlePrevious()} className="prev-slide"><img src={ArrowLeftBlack} alt="prev"/></button>
            </div>
            <div className="column is-2">
              <button onClick={() => handleNext()} className="next-slide"><img src={ArrowRightBlack} alt="next"/></button>
            </div>
          </div>
        </div>
      </div>
  )
}


export default HeroSlider;