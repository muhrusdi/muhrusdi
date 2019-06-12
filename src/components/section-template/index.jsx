import React from 'react'
import styled from '@emotion/styled'
import { minLG, minSM, maxSM } from 'Utils/media-queries'
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from 'gatsby-image'
import { SectionLayout } from '../shared'

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  ${ minSM } {
    grid-template-columns: repeat(2, 1fr);
  }
  ${ minLG } {
    grid-template-columns: repeat(3, 1fr);
  }
  grid-auto-rows: 280px;
  grid-gap: 16px;
`

const CardImage = styled.div`
  height: 220px;
  flex: none;
  background: ${ ({theme}) => theme.backgroundPrimary };
  transition: all .3s ease;
  will-change: all;
  & > div {
    height: 100%;
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
  color: ${ ({theme}) => theme.colorSecondary };
  opacity: 0;
  transition: opacity .3s ease;
  will-change: opacity;
`

const Card = styled.div`
  overflow: hidden;
  &:hover {
    ${ CardImage } {
      height: 210px;
    }
    ${ CardTextDesc } {
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
  ${ ({theme}) => theme.colorAnimation }
`

const CardItem = ({title, desc, date, tag, image}) => (
  <Card>
    <CardFlex>
      <CardImage>
        <Img
          objectFit="cover"
          objectPosition="50% 50%"
          fluid={ image.childImageSharp.fluid }/>
      </CardImage>
      <CardText>
        <DateTags>
          <div>
            <DateTagsDate>{ date }</DateTagsDate>
          </div>
          <div>
            <DateTagsDate>{ tag }</DateTagsDate>
          </div>
        </DateTags>
      </CardText>
    </CardFlex>
  </Card>
)

const SectionTemplate = () => {
  const data = useStaticQuery(graphql`
    query TemplateQuery {
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
    <SectionLayout
      title="Template"
      desc="Kumpulan template web base React"
      path="/"
    >
      <Grid>
        <CardItem
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          desc="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium"
          date="Company Profile"
          tag="Preview"
          image={ data.jam }
        />
        <CardItem
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          desc="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium"
          date="12 Septemeber 2019"
          tag="Reactjs"
          image={ data.jam2 }
        />
        <CardItem
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          desc="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium"
          date="12 Septemeber 2019"
          tag="Reactjs"
          image={ data.jam2 }
        />
        <CardItem
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          desc="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium"
          date="12 Septemeber 2019"
          tag="Reactjs"
          image={ data.jam2 }
        />
      </Grid>
    </SectionLayout>
  )
}

export default SectionTemplate