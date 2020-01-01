import React from "react"
import { Container, Row, Col, Button } from "Components"
import { maxSM } from "Utils/media-queries"
import styled from "@emotion/styled"
import { ButtonRadius } from "Components/button"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const SectionStoreWrap = styled.div`
  background: ${({ theme }) => theme.backgroundPrimary};
  border-radius: ${({ theme }) => theme.radius};
  /* box-shadow: 0px 51px 61px -48px #d7d7d7; */
  overflow: hidden;
`
const SectionTextWrap = styled.div`
  padding: 20px 60px;
  ${maxSM} {
    padding: 20px;
  }
`
const SectionTitle = styled.h2`
  font-size: 40px;
  text-transform: uppercase;
  font-weight: 900;
  line-height: 1.2;
`
const SectionDesc = styled.div`
  p {
    font-size: 18px;
    margin-top: 18px;
    color: ${({ theme }) => theme.colorSecondary};
  }
`
const ColStyled = styled(Col)`
  ${maxSM} {
    display: none;
  }
`
// const ButtonStore = Button.Radius

const SectionStore = () => {
  const data = useStaticQuery(graphql`
    query SectionStoreQuery {
      wpgraphql {
        banner: bannerstoreBy(slug: "mr-store") {
          title
          excerpt
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
  `)

  const { banner } = data.wpgraphql

  return (
    <div>
      <Container>
        <SectionStoreWrap>
          <Row height={360} gutter={0} align="center">
            <Col md={6}>
              <SectionTextWrap>
                <SectionTitle>{banner.title}</SectionTitle>
                <SectionDesc
                  dangerouslySetInnerHTML={{ __html: banner.excerpt }}
                />
                <ButtonRadius>Get Starated</ButtonRadius>
              </SectionTextWrap>
            </Col>
            <ColStyled md={6}>
              <div>
                <Img
                  objectFit="cover"
                  style={{ height: 360 }}
                  objectPosition="50% 50%"
                  fluid={banner.featuredImage.imageFile.childImageSharp.fluid}
                />
              </div>
            </ColStyled>
          </Row>
        </SectionStoreWrap>
      </Container>
    </div>
  )
}

export default SectionStore
