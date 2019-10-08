import React from "react"
import Layout from "Containers/layout"
import styled from "@emotion/styled"
import { graphql } from "gatsby"

const DemoStyled = styled.div`
  height: 100vh;
  position: relative;
  padding-top: 60px;
  iframe {
    border: none;
    width: 100%;
    height: 100%;
  }
`

const Demo = ({ data }) => {
  const { workBy } = data.wpgraphql
  return (
    <Layout>
      <DemoStyled>
        <iframe src={workBy.link_live.link} />
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
