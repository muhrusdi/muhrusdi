import React from "react"
import {
  Banner,
  SectionStore,
  SectionNews,
  SectionTemplate,
  SectionContact,
} from "Components"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "Containers/layout"

const Home = () => {
  const data = useStaticQuery(graphql`
    query SectionNewsQuery {
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
    <Layout>
      <Banner />
      <SectionStore />
      <SectionNews
        title="Blog"
        desc="Articles about CSS, HTML, JavaScript, and all things related to web design and development."
        path="/blog"
        data={dataPosts}
      />
      <SectionTemplate
        title="Template"
        desc="A list of Themes, Templates and Starters for JAMstack Sites"
        path="/template"
      />
      <SectionContact />
    </Layout>
  )
}

export default Home
