import React, { Component } from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import BackgroundImage from 'gatsby-background-image'

import { AboutWrap, StyledCol } from './style'

class About extends Component {
  render() {
    const { data } = this.props
    return (
      <AboutWrap>
        <Container>
          <Row>
            <StyledCol sm={12} lg={6}>
              <div className="small-col">
                <Link to="#">
                  <BackgroundImage
                    fadeIn
                    Tag="div"
                    className="about-image small-image"
                    fluid={data.about1.childImageSharp.fluid}
                  ></BackgroundImage>
                  <h4>
                    NU Creative - London
                    <span>
                      <FontAwesomeIcon icon={faPlus} />
                    </span>
                  </h4>
                </Link>
              </div>
            </StyledCol>
            <StyledCol sm={12} lg={6}>
              <Link to="#">
                <BackgroundImage
                  fadeIn
                  Tag="div"
                  className="about-image tall-image"
                  fluid={data.about2.childImageSharp.fluid}
                ></BackgroundImage>
                <h4>
                  Just a COVID screen? How about a long term solution.
                  <span>
                    <FontAwesomeIcon icon={faPlus} />
                  </span>
                </h4>
              </Link>
            </StyledCol>
          </Row>
          <Row>
            <StyledCol sm={12} lg={6}>
              <Link to="#">
                <BackgroundImage
                  fadeIn
                  Tag="div"
                  className="about-image mid-image"
                  fluid={data.about3.childImageSharp.fluid}
                ></BackgroundImage>
                <h4>
                  Hex - A conceptual shelving unit
                  <span>
                    <FontAwesomeIcon icon={faPlus} />
                  </span>
                </h4>
              </Link>
            </StyledCol>
            <StyledCol className="block-quote" sm={12} lg={6}>
              <h3>
                "Exactly what we wanted. Great product and helpful guys, would
                highly recommend"
                <br />
                <br />
                Summit Campers
              </h3>
              <Link to="#">
                What we do
                <span>
                  <FontAwesomeIcon icon={faLongArrowAltRight} />
                </span>
              </Link>
            </StyledCol>
          </Row>
        </Container>
      </AboutWrap>
    )
  }
}

export default (props) => (
  <StaticQuery
    query={graphql`
      query About {
        about1: file(relativePath: { eq: "about/1.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2500, maxHeight: 1673) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
        about2: file(relativePath: { eq: "about/2.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2500, maxHeight: 1673) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
        about3: file(relativePath: { eq: "about/3.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2500, maxHeight: 1673) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    `}
    render={(data) => <About data={data} {...props} />}
  />
)
