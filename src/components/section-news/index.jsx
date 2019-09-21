import React from 'react'
import styled from '@emotion/styled'
import { minLG, minSM, maxSM } from 'Utils/media-queries'
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from 'gatsby-image'
import { SectionLayout } from '../shared'
import Ellipsis from "../ellipsis"
import { convertDate } from "Utils"

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  ${ minSM } {
    grid-template-columns: repeat(2, 1fr);
  }
  ${ minLG } {
    grid-template-columns: repeat(3, 1fr);
  }
  grid-auto-rows: 400px;
  grid-gap: 24px;
`

const CardImage = styled.div`
  height: 232px;
  flex: none;
  transition: all .3s ease;
  will-change: all;
  & > div {
    height: 100%;
    border-radius: ${ ({theme}) => theme.radius };
  }
`

const CardText = styled.div`
  padding: 20px 0;
  a {
    color: inherit;
    text-decoration: none;
  }
  h3 {
    margin-top: 10px;
    font-weight: normal;
  }
`

const CardTextDesc = styled.span`
  p {
    font-size: 14px;
    margin-top: 10px;
    color: ${ ({theme}) => theme.colorSecondary };
    opacity: 0;
    transition: opacity .3s ease;
    will-change: opacity;
  }
`

const Card = styled.div`
  /* background: ${ ({theme}) => theme.backgroundPrimary }; */
  overflow: hidden;
  position: relative;
  &:hover {
    ${ CardImage } {
      height: 178px;
    }
    ${ CardTextDesc } {
      p {
        opacity: 1;
      }
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

const Tags = styled.div`
  position: absolute;
  bottom: 0;
  padding: 20px 0;
  display: flex;
  right: 0;
  left: 0;
  overflow: hidden;
  background: ${ ({theme}) => theme.background };
  &:after {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 20px;
    background: ${ ({theme}) => theme.background };
    background: linear-gradient(90deg, ${ ({theme}) => theme.background }00 0%, ${ ({theme}) => theme.background } 100%);
    content: '';
  }
  a {
    &:not(:first-of-type) {
      margin-left: 10px;
    }
  }
`

const Tag = styled(Link)`
  font-size: 12px;
  text-decoration: none;
  font-weight: bold;
  text-transform: uppercase;
  color: ${ ({theme}) => theme.colorSecondary };
  padding: 4px 14px;
  border: 1px solid ${ ({theme}) => theme.borderColorPrimary };
  border-radius: 30px;
  background: ${ ({theme}) => theme.background };
  transition: all .3s ease;
  will-change: all;
  &:hover {
    border: 1px solid;
  }
`

const CardItem = ({title, desc, date, link, tag, image}) => (
  <Card>
    <CardFlex>
      <CardImage>
        {
          image && (
            <Img
              objectFit="cover"
              objectPosition="50% 50%"
              fluid={ image.imageFile.childImageSharp.fluid }/>
          )
        }
      </CardImage>
      <CardText>
        <div>
          <DateTagsDate>{ convertDate(date) }</DateTagsDate>
        </div>
        <Link to={ link }>
          <Ellipsis clamp={2}>
            <h3>{ title }</h3>
          </Ellipsis>
        </Link>
        <CardTextDesc dangerouslySetInnerHTML={{__html: desc}}/>
      </CardText>
      <Tags>
        <Tag>{ tag }</Tag>
        <Tag>{ tag }</Tag>
        <Tag>{ tag }</Tag>
      </Tags>
    </CardFlex>
  </Card>
)

const SectionNews = ({title, desc, path, children, data, ...props}) => {
  // const dataInner = useStaticQuery(graphql`
  //   query NewsQuery {
  //     jam: file(relativePath: { eq: "jamstack.png" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 800) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //     jam2: file(relativePath: { eq: "jamstack-1-1.jpg" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 800) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //   }
  // `)

  return (
    <SectionLayout
      title={ title }
      desc={ desc }
      path={ path }
      {...props}
    >
      <Grid>
        {
          data.edges.map(item => (
            <CardItem
              title={item.node.title}
              desc={item.node.excerpt}
              date={item.node.date}
              link={`/blog/${item.node.slug}`}
              tag="Reactjs"
              image={ item.node.featuredImage }
            />
          ))
        }
        {/* <CardItem
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          desc="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium"
          date="12 Septemeber 2019"
          link="/blog/detail"
          tag="Reactjs"
          image={ data.jam2 }
        />
        <CardItem
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          desc="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium"
          date="12 Septemeber 2019"
          link="/blog/detail"
          tag="Reactjs"
          image={ data.jam2 }
        />
        <CardItem
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          desc="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium"
          date="12 Septemeber 2019"
          link="/blog/detail"
          tag="Reactjs"
          image={ data.jam2 }
        />
        <CardItem
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          desc="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium"
          date="12 Septemeber 2019"
          link="/blog/detail"
          tag="Reactjs"
          image={ data.jam }
        />
        <CardItem
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          desc="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium"
          date="12 Septemeber 2019"
          link="/blog/detail"
          tag="Reactjs"
          image={ data.jam2 }
        /> */}
      </Grid>
    </SectionLayout>
  )
}

export default SectionNews