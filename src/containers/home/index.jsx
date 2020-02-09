import React from "react"
import {
  Banner,
  SectionStore,
  SectionNews,
  SectionTemplate,
  SectionContact,
  SectionWork,
} from "Components"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "Containers/layout"

const Home = () => {
  const data = useStaticQuery(graphql`
    query SectionHomeQuery {
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
        dataWorks: works(first: 6) {
          edges {
            node {
              title
              slug
              date
              excerpt
              link_live {
                fieldGroupName
                link
              }
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

  const { dataPosts, dataWorks } = data.wpgraphql

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
      {/* <SectionTemplate
        title="Template"
        desc="A list of Themes, Templates and Starters for JAMstack Sites"
        path="/template"
      /> */}
      <SectionWork
        title="Works"
        desc="A list of portfolio, projects and products"
        path="/work"
        data={dataWorks}
      />
      <SectionContact />
    </Layout>
  )
}

export default Home
