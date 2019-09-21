import React, { useState } from 'react'
import styled from '@emotion/styled'
import { Container, Row, Col, SectionStore, SectionNews, Button } from 'Components'
import { CustomDate, Tags } from 'Components/shared'
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from 'gatsby-image'

const Banner = styled.div`
  padding-top: 20px;
`

const BannerText = styled.div`
  align-self: center;
  padding: 0 40px;
  flex-basis: 50%;
  position: relative;
`

const BannerImage = styled(Img)`
  height: 100%;
  flex-basis: 50%;
`

const BannerGrid = styled.div`
  background: ${ ({theme}) => theme.backgroundPrimary };
  display: flex;
  border-radius: ${ ({theme}) => theme.radius };
  overflow: hidden;
  & > div {
    transition: all .3s ease;
    will-change: all;
  }
  &:hover {
    ${ BannerImage } {
      flex-basis: 40%;
    }
    ${ BannerText } {
      flex-basis: 60%;
    }
  }
  height: 400px;
`

const Title = styled.h1`
  font-size: 40px;
  font-weight: 900;
  line-height: 1.3;
  margin-top: 14px;
`

const Description = styled.p`
  font-size: 18px;
  margin-top: 20px;
  color: ${ ({theme}) => theme.colorSecondary };
`

const ImageWrap = styled.div`
  align-self: center;
`

const Date = styled.div`
  span {
    ${ ({theme}) => theme.colorAnimation }
  }
`

const Grid = styled.div`
  display: grid;
  grid-auto-rows: 100px;
`

const BlogItem = styled.div`

`

const ButtonWrap = styled.div`
  margin-bottom: 60px;
`

const ButtonStyled = styled(Button)({
  borderRadius: 30,
  height: 42,
  minWidth: 120,
  marginTop: 10,
  background: 'transparent'
},
({theme}) => ({borderColor: theme.borderColorPrimary}),
)


const Blog = () => {
  const [blogs] = useState([
    {
      title: 'Lorem ipsum dolor is simply',
      image: 'jam2',
      date: '12 January 2019'
    },
    {
      title: 'Lorem ipsum dolor is simply',
      image: 'jam2',
      date: '12 January 2019'
    },
    {
      title: 'Lorem ipsum dolor is simply',
      image: null,
      date: '12 January 2019'
    },
    {
      title: 'Lorem ipsum dolor is simply',
      image: 'jam2',
      date: '12 January 2019'
    }
  ])

  const data = useStaticQuery(graphql`
    query BlogsQuery {
      wpgraphql {
        dataPosts: posts(first: 6) {
          edges {
            node {
              title
              excerpt
              date
              modified
              slug
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

  const { dataPosts } = data.wpgraphql
  
  return (
    <>
      <Banner>
        <Container>
          <BannerGrid>
            <BannerText>
              <CustomDate fontSize={ 14 }>
                {/* { data.detail.createdAt } */}
              </CustomDate>
              {/* <Title marginTop={ 20 }>{ data.detail.title }</Title> */}
              {/* <Description>{ data.detail.description }</Description> */}
              <Tags position="relative" margin="20px 0 0 0">
                {/* {
                  data.detail.category.map((item, i) => (
                    <Tags.Tag key={ i } padding="8px 18px">
                      { item.title }
                    </Tags.Tag>
                  ))
                } */}
              </Tags>
            </BannerText>
            <BannerImage fluid={ data.jam2.childImageSharp.fluid }/>
          </BannerGrid>
        </Container>
      </Banner>
      {/* <Container type="lg">
        <Grid>
          {
            blogs.map((item, i) => (
              <BlogItem>
                test
              </BlogItem>
            ))
          }
        </Grid>
      </Container> */}
      <SectionNews
        title="Artikel"
        desc="Artikel seputar pengembangan web dan perkembangan teknologi"
        marginBottom={ 30 }
        data={dataPosts}
      />
      <ButtonWrap>
        <Container>
          <Row justify="space-between">
            <Col>
              <div>
                <ButtonStyled>Sebelumnya</ButtonStyled>
              </div>
            </Col>
            <Col>
              <div>
                <ButtonStyled>Selanjutnya</ButtonStyled>
              </div>
            </Col>
          </Row>
        </Container>
      </ButtonWrap>
      <SectionStore/>
    </>
  )
}

export default Blog