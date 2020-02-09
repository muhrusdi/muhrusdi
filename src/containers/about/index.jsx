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
          padding-right: 20px;
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
      <AboutInner>
        <Container type="md">
          <Row gutter={20} align="center">
            <Col md={4}>
              <div>
                <Img
                  style={{ borderRadius: 14, maxWidth: 223 }}
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
        </Container>
        {/* <Img fluid={data.illus.childImageSharp.fluid} /> */}
        <div>
          <svg
            width="100%"
            height="301"
            viewBox="0 0 1440 301"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M290.276 287.202C156.426 322.466 0 275.994 0 275.994V136.805C0 136.805 174.423 198.056 290.276 198.012C458.352 197.948 533.195 56.3132 700.808 68.7961C828.515 78.3069 879.686 188.809 1007.67 184.41C1157.14 179.274 1194.25 -3.44318 1343.75 0.787681C1382.66 1.88888 1442.16 16.6564 1442.16 16.6564V124.679C1442.16 124.679 1396.04 98.7842 1363.88 89.199C1221.87 46.88 1155.85 220.351 1007.67 219.951C882.191 219.613 826.269 126.882 700.808 124.679C528.406 121.653 457.015 243.273 290.276 287.202Z"
              fill="url(#paint0_linear)"
            />
            <defs>
              <linearGradient
                id="paint0_linear"
                x1="222.271"
                y1="-128.429"
                x2="1401.08"
                y2="270.554"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#5E96E9" />
                <stop offset="0.26639" stop-color="#66EBFD" />
                <stop offset="0.5" stop-color="#EBDC8B" />
                <stop offset="1" stop-color="#F83FB9" />
              </linearGradient>
            </defs>
          </svg>
        </div>
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
          {/* <List>
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
          </List> */}
          <List>
            <li>
              <span>Skills</span>
            </li>
            <li>
              <span>Web Development</span>
              <span>JavaScript . TypeScript . React . GraphQL</span>
            </li>
            <li>
              <span>Mobile Development</span>
              <span>React Native . iOS Development: Swift and Objective-C</span>
            </li>
            <li>
              <span>Design</span>
              <span>Figma . Sketch . Adobe XD</span>
            </li>
          </List>
          <List>
            <li>
              <span>Experience</span>
            </li>
            <li>
              <span>Now</span>
              <span>Front End Engineer Freelancer</span>
            </li>
            <li>
              <span>2016-2019</span>
              <span>
                PT. Docotel Teknologi Celebes - Front End Engineer Manager
              </span>
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
    </Layout>
  )
}

export default About
