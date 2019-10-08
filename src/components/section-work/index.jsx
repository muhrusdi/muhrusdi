import React from "react"
import styled from "@emotion/styled"
import { minLG, minSM, maxSM } from "Utils/media-queries"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { SectionLayout } from "../shared"

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

DateTags.Link = styled.a`
  transition: all 0.3s ease;
  &:hover {
    opacity: 0.7;
  }
`

const CardItem = ({ title, desc, date, tag, image }) => (
  <Card>
    <CardFlex>
      <CardImage>
        <Img
          objectFit="cover"
          objectPosition="50% 50%"
          fluid={image.childImageSharp.fluid}
        />
      </CardImage>
      <CardText>
        <DateTags>
          <div>
            <DateTagsDate>{title}</DateTagsDate>
          </div>
          <div>
            <div>
              <DateTags.Link href="#" target="_blank">
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-labelledby="eyeIconTitle"
                  stroke="#909090"
                  stroke-width="1"
                  stroke-linecap="square"
                  stroke-linejoin="miter"
                  fill="none"
                  color="#909090"
                >
                  {" "}
                  <title id="eyeIconTitle">See</title>{" "}
                  <path d="M22 12C22 12 19 18 12 18C5 18 2 12 2 12C2 12 5 6 12 6C19 6 22 12 22 12Z" />{" "}
                  <circle cx="12" cy="12" r="3" />{" "}
                </svg>
              </DateTags.Link>
            </div>
          </div>
        </DateTags>
      </CardText>
    </CardFlex>
  </Card>
)

const SectionTemplate = ({ title, desc, path }) => {
  const data = useStaticQuery(graphql`
    query WorkQuery {
      jam: file(relativePath: { eq: "jamstack.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      jam2: file(relativePath: { eq: "jamstack-1-1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <SectionLayout title={title} desc={desc} path={path}>
      <Grid>
        <CardItem
          title="Modana"
          desc="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium"
          date="Company Profile"
          tag="Preview"
          image={data.jam}
        />
        <CardItem
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          desc="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium"
          date="12 Septemeber 2019"
          tag="Reactjs"
          image={data.jam2}
        />
        <CardItem
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          desc="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium"
          date="12 Septemeber 2019"
          tag="Reactjs"
          image={data.jam2}
        />
        <CardItem
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          desc="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium"
          date="12 Septemeber 2019"
          tag="Reactjs"
          image={data.jam2}
        />
      </Grid>
    </SectionLayout>
  )
}

export default SectionTemplate
