import React from 'react'
import styled from 'react-emotion'
import { Container, Row, Col } from 'reus'
import { BlogItem } from 'Components/Blog'

const Blog = () => {

  const BlogWrapper = styled('div')`
    background: #f2f2f2;
  `

  const BannerBlog = styled('div')`
    background: #fff;
    height: 450px;
    display: flex;
    align-items: center;
    color: #333;
    justify-content: center;
  `

  const BlogWrapInner = styled('div')`
    padding: 20px 0;
  `

  const H2 = styled('h2')`
    font-size: 50px;
    text-align: center;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: bold;
  `

  const Tags = styled('ul')`
    margin: 30px 0 0 0;
    list-style: none;
    text-align: center;
    li {
      a {
        margin: 5px;
        font-size: 14px;
        display: inline-block;
        padding: 7px 17px;
        background: #efefef;
        border-radius: 40px;
      }
    }
 `
  
  return (
    <BlogWrapper>
      <BannerBlog>
        <Container lg>
          <H2>Artikel Seputar Front End & iOS Development</H2>
          <Tags>
            <li>
              <a href="#">Reactjs</a>
              <a href="#">GraphQL</a>
              <a href="#">Nodejs</a>
              <a href="#">Express</a>
              <a href="#">Vuejs</a>
            </li>
          </Tags>
        </Container>
      </BannerBlog>
      <BlogWrapInner>
        <Container xl gutter={20}>
          <Row gutter={10}>
            <Col lg={6} md={6} sm={12}>
              <BlogItem/>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <BlogItem/>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <BlogItem/>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <BlogItem/>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <BlogItem/>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <BlogItem/>
            </Col>
          </Row>
        </Container>
      </BlogWrapInner>
    </BlogWrapper>
  )
}

export default Blog