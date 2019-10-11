import React from "react"
import Layout from "Containers/layout"
import styled from "@emotion/styled"
import { graphql, useStaticQuery } from "gatsby"
import { Container, Row, Col } from "Components"
import Img from "gatsby-image"

const AboutInner = styled.div`
  padding-top: 80px;
`

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  margin-top: 40px;
  li {
    padding-bottom: 10px;
    display: flex;
    span {
      display: block;
    }
    &:first-of-type {
      span {
        color: #9e9e9e;
        text-transform: uppercase;
        font-size: 14px;
        font-weight: bold;
      }
    }
    &:not(:first-of-type) {
      span {
        &:first-of-type {
          width: 30%;
          color: #a0a2a5;
          flex: none;
        }
      }
    }
  }
`

const Desc = styled.div`
  h1 {
    font-size: 50px;
    font-weight: 900;
  }
  p {
    margin-top: 10px;
    color: #808080;
    font-size: 18px;
    b {
      color: #333;
    }
  }
`

const Stack = styled.div`
  display: flex;
  flex-wrap: wrap;
  span {
    display: block;
    width: initial !important;
    border: 1px solid #cacaca;
    border-radius: 50px;
    padding: 3px 10px;
    color: #333 !important;
    height: 32px;
    &:not(:last-of-type) {
      margin-right: 10px;
      margin-bottom: 10px;
    }
  }
`

const About = () => {
  const data = useStaticQuery(graphql`
    query BlgoQuery {
      muhrusdi: file(relativePath: { eq: "muhrusdi-thumb.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Container type="md">
        <AboutInner>
          <Row gutter={20} align="center">
            <Col md={4}>
              <div>
                <Img
                  style={{ borderRadius: 14 }}
                  fluid={data.muhrusdi.childImageSharp.fluid}
                />
              </div>
            </Col>
            <Col md={8}>
              <Desc>
                <h1>Front End Engineer</h1>
                <p>
                  with 3+ years in web development using <b>modern stack</b>.
                  Enthusiastic about <b>design</b> and <b>new technology</b>.
                </p>
              </Desc>
            </Col>
          </Row>
          <Container type="sm">
            <List>
              <li>
                <span>Profile</span>
              </li>
              <li>
                <span>Name</span>
                <span>Muhammad Rusdi</span>
              </li>
              <li>
                <span>Birt of date</span>
                <span>14 September 1992</span>
              </li>
              <li>
                <span>Address</span>
                <span>Jl. Perintis Kemerdekaan, Makassar</span>
              </li>
              <li>
                <span>Email</span>
                <span>muhammadrusdiid@gmail.com</span>
              </li>
            </List>
            <List>
              <li>
                <span>Soft Skill</span>
              </li>
              <li>
                <span>Leadership</span>
                <span>Middle</span>
              </li>
              <li>
                <span>Collaboration</span>
                <span>Advanced</span>
              </li>
              <li>
                <span>Communication</span>
                <span>Middle</span>
              </li>
            </List>
            <List>
              <li>
                <span>Hard Skill</span>
              </li>
              <li>
                <span>Web Development</span>
                <span>JavaScript/TypeScript, React, Vue, GraphQL</span>
              </li>
              <li>
                <span>Mobile Development</span>
                <span>
                  React Native. iOS Development: Swift and Objective-C
                </span>
              </li>
              <li>
                <span>Core Technology</span>
                <span>JavaScript/TypeScript, NodeJS</span>
              </li>
            </List>
            <List>
              <li>
                <span>Experience</span>
              </li>
              <li>
                <span>2016-2019</span>
                <span>
                  PT. Docotel Teknologi Celebes - SVP Front End Developer
                </span>
              </li>
              <li>
                <span>Now</span>
                <span>Freelancer</span>
              </li>
            </List>
            <List>
              <li>
                <span>Education</span>
              </li>
              <li>
                <span>2012-2016</span>
                <span>
                  State Polytechnic of Ujung Pandang - Computer and Network
                  Engineering
                </span>
              </li>
            </List>
            <List>
              <li>
                <span>Stack</span>
              </li>
              <li>
                <Stack>
                  <span>JavaScript</span>
                  <span>TypeScript</span>
                  <span>NodeJS</span>
                  <span>React</span>
                  <span>React Native</span>
                  <span>GraphQL</span>
                  <span>GatsbyJS</span>
                  <span>NextJS</span>
                  <span>ReduxJS</span>
                  <span>VueJS</span>
                  <span>Webpack</span>
                  <span>GraphQl</span>
                  <span>Apollo GraphQL</span>
                  <span>Netlify</span>
                  <span>ZEIT</span>
                  <span>Digital Ocean</span>
                  <span>Github</span>
                </Stack>
              </li>
            </List>
          </Container>
        </AboutInner>
      </Container>
    </Layout>
  )
}

export default About
