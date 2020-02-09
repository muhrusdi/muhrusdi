import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { minLG, minSM, maxSM } from "Utils/media-queries"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { SectionLayout } from "../shared"
import { motion } from "framer-motion"

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  ${minSM} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${minLG} {
    grid-template-columns: repeat(3, 1fr);
  }
  grid-auto-rows: 280px;
  grid-gap: 24px;
`

const CardImage = styled.div`
  height: 220px;
  flex: none;
  transition: all 0.3s ease;
  will-change: all;
  & > div {
    height: 100%;
    border-radius: ${({ theme }) => theme.radius};
  }
`

const CardText = styled.div`
  padding: 20px;
  a {
    color: inherit;
    text-decoration: none;
  }
  h3 {
    margin-top: 10px;
    font-weight: normal;
  }
`

const CardTextDesc = styled.p`
  font-size: 14px;
  margin-top: 10px;
  color: ${({ theme }) => theme.colorSecondary};
  opacity: 0;
  transition: opacity 0.3s ease;
  will-change: opacity;
`

const Card = styled.div`
  overflow: hidden;
  &:hover {
    ${CardTextDesc} {
      opacity: 1;
    }
  }
`

const CardFlex = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const DateTags = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const DateTagsDate = styled.span`
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  ${({ theme }) => theme.colorAnimation}
`

DateTags.Link = styled(Link)`
  transition: all 0.3s ease;
  svg {
    vertical-align: middle;
  }
  &:hover {
    opacity: 0.7;
  }
`

const CardItem = ({ title, link, slug, externalLink, image }) => (
  <Card>
    <CardFlex>
      <CardImage>
        <Img
          objectFit="cover"
          objectPosition="50% 50%"
          fluid={image.imageFile.childImageSharp.fluid}
        />
      </CardImage>
      <CardText>
        <DateTags>
          <div>
            <DateTagsDate>{title}</DateTagsDate>
          </div>
          <div>
            <div
              css={css`
                display: flex;
                svg {
                  vertical-align: middle;
                }
                path,
                circle,
                line {
                  fill: none;
                  stroke: #828282;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                  stroke-width: 36px;
                }
              `}
            >
              <a
                href={externalLink}
                target="_blank"
                style={{ marginRight: 15 }}
              >
                <svg width="24px" height="24px" viewBox="0 0 512 512">
                  <path d="M208,352H144a96,96,0,0,1,0-192h64" />
                  <path d="M304,160h64a96,96,0,0,1,0,192H304" />
                  <line x1="163.29" y1="256" x2="350.71" y2="256" />
                </svg>
              </a>
              <DateTags.Link to={`/demo/${slug}`}>
                <svg width="24px" height="24px" viewBox="0 0 512 512">
                  <path d="M255.66,112c-77.94,0-157.89,45.11-220.83,135.33a16,16,0,0,0-.27,17.77C82.92,340.8,161.8,400,255.66,400,348.5,400,429,340.62,477.45,264.75a16.14,16.14,0,0,0,0-17.47C428.89,172.28,347.8,112,255.66,112Z" />
                  <circle cx="256" cy="256" r="80" />
                </svg>
              </DateTags.Link>
            </div>
          </div>
        </DateTags>
      </CardText>
    </CardFlex>
  </Card>
)

const SectionTemplate = ({ title, desc, path, data }) => {
  return (
    <SectionLayout title={title} desc={desc} path={path}>
      <Grid>
        {data.edges.map(({ node }) => (
          <CardItem
            title={node.title}
            link={node.link_live.fieldGroupName}
            externalLink={node.link_live.link}
            slug={node.slug}
            image={node.featuredImage}
          />
        ))}
      </Grid>
    </SectionLayout>
  )
}

export default SectionTemplate
