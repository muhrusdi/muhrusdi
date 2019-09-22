import React from 'react'
import { Banner, SectionStore, SectionNews, SectionTemplate, SectionContact } from 'Components'
import { useStaticQuery, graphql } from "gatsby"
import Layout from 'Containers/layout'

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
    <>
      <Banner/>
      <SectionStore/>
      <SectionNews
        title="Artikel"
        desc="Artikel seputar pengembangan web dan perkembangan teknologi"
        path="/blog"
        data={dataPosts}
      />
      <SectionTemplate/>
      <SectionContact/>
    </>
  )
}

export default Home