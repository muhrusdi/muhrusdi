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
    query BlogQuery {
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
      detail: contentfulArticle(id: {eq: "fc7fd50d-62be-58d4-bd7c-3c11dc2e2136"}) {
        id
        title
        description
        createdAt
        updatedAt
        content {
          childMarkdownRemark {
            html
            rawMarkdownBody
          }
        }
        author {
          firstName
          lastName
        }
        category {
          title
        }
        image {
          fluid(maxWidth: 800) {
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
    }
  `)
  
  return (
    <>
      <Banner>
        <Container>
          <BannerGrid>
            <BannerText>
              <CustomDate fontSize={ 14 }>
                { data.detail.createdAt }
              </CustomDate>
              <Title marginTop={ 20 }>{ data.detail.title }</Title>
              <Description>{ data.detail.description }</Description>
              <Tags position="relative" margin="20px 0 0 0">
                {
                  data.detail.category.map((item, i) => (
                    <Tags.Tag key={ i } padding="8px 18px">
                      { item.title }
                    </Tags.Tag>
                  ))
                }
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