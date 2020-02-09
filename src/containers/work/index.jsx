import React from "react"
import Layout from "Containers/layout"
import styled from "@emotion/styled"
import { Container, Row, Col, Button, SEO } from "Components"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { SectionWork } from "Components"

const HeroBanner = styled.div`
  position: relative;
  &:after {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    content: "";
    background: rgb(255, 255, 255);
    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 1) 100%
    );
  }
`
const ImgStyled = styled(Img)`
  height: 500px;
`

const Work = () => {
  const data = useStaticQuery(graphql`
    query WorksQuery {
      banner: file(relativePath: { eq: "hero-banner.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      wpgraphql {
        works(first: 1000) {
          edges {
            node {
              title
              slug
              date
              excerpt
              link_live {
                fieldGroupName
                link
              }
              featuredImage {
                sourceUrl
                imageFile {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <HeroBanner>
        <ImgStyled
          objectFit="cover"
          objectPosition="50% 50%"
          fluid={data.banner.childImageSharp.fluid}
        />
      </HeroBanner>
      <SectionWork
        title="Works"
        desc="A list of portfolio, projects and products"
        data={data.wpgraphql.works}
      />
    </Layout>
  )
}

export default Work
