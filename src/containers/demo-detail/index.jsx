import React from "react"
import Layout from "Containers/layout"
import styled from "@emotion/styled"
import { graphql } from "gatsby"

const DemoStyled = styled.div`
  height: 100vh;
  position: relative;
  padding-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f9f9f9;
  iframe {
    border: none;
    width: 100%;
    height: 100%;
  }
`

const DemoResponsive = styled.div(
  {
    width: "100%",
    height: "100%",
    transition: "all .3s ease",
  },
  ({ theme }) => {
    switch (theme.viewPort) {
      case "mobile":
        return {
          maxWidth: 320,
          maxHeight: "80vh",
          boxShadow: "0px 30px 51px -10px #33333347",
        }
      case "tablet":
        return {
          maxWidth: 768,
          maxHeight: "80vh",
          boxShadow: "0px 30px 51px -10px #33333347",
        }
      default:
        return {
          maxWidth: "100%",
        }
    }
  }
)

const Demo = ({ data }) => {
  const { workBy } = data.wpgraphql

  return (
    <Layout>
      <DemoStyled>
        <DemoResponsive>
          <iframe src={workBy.link_live.link} />
        </DemoResponsive>
      </DemoStyled>
    </Layout>
  )
}

export default Demo

export const pageQuery = graphql`
  query DemoDetail($slug: String!) {
    wpgraphql {
      workBy(slug: $slug) {
        title
        link_live {
          link
        }
      }
    }
  }
`
