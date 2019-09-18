import React, { useEffect } from 'react'
import styled from '@emotion/styled'
import { Container, Row, Col } from 'Components'
import { maxSM } from 'Utils/media-queries'
import { useStaticQuery, graphql, Link } from "gatsby"
import marksy from 'marksy'
import 'highlight.js/styles/default.css';
import 'highlight.js/styles/atelier-lakeside-light.css';
import Helmet from "react-helmet"
import hljs from 'highlight.js/lib/highlight';
import hljsJavascript from 'highlight.js/lib/languages/javascript'
import Img from 'gatsby-image'
import "./default.css"
import { BlogDetailWrap } from "./styled"

hljs.registerLanguage('javascript', hljsJavascript)

const Header = styled.div`
  margin-top: 60px;
  ${ maxSM } {
    margin-top: 30px;
  }
`

const Title = styled.h1`
  font-size: 50px;
  line-height: 1.1;
  font-weight: 900;
  ${ maxSM } {
    font-size: 38px;
  }
`

const Desc = styled.p`
  font-size: 22px;
  color: ${ ({theme}) => theme.colorSecondary };
  margin-top: 20px;
  ${ maxSM } {
    font-size: 18px;
  }
`

const Info = styled.div`
  margin-top: 30px;
  span {
    &:first-of-type {
      color: ${ ({theme}) => theme.colorSecondary };
      margin-right: 10px;
      ${ maxSM } {
        min-width: 100px;
        display: inline-block;
      }
    }
  }
`

const Tags = styled.div`
  margin-top: 30px;
  a {
    display: block;
    padding: 6px 20px;
    border-radius: 40px;
    font-weight: bold;
    font-size: 14px;
    border: 1px solid #d9d9d9;
    text-transform: uppercase;
    text-decoration: none;
    ${ ({theme}) => theme.colorAnimation };
    transition: all .3s ease;
    will-change: all;
    &:hover {
      border: 1px solid;
    }
  }
`

const ImageFeatured = styled(Img)`
  margin-top: 30px;
  border-radius: ${ ({theme}) => theme.radius };
`

const Content = styled.div`
  line-height: 1.7;
  margin-top: 100px;
  h1 {
    line-height: 1.2;
    margin-bottom: 30px;
  }
  h2 {
    margin-bottom: 10px;
  }
`

const BlockContent = styled.div`
  max-width: 576px;
  margin: 0 auto;
  p {
    margin-bottom: 20px;
  }
`
const BlockImageTitle = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 70px;
  line-height: 1;
  background: ${ ({theme}) => theme.backgroundPrimary };
  display: flex;
  align-items: center;
  opacity: 0;
  transition: opacity .3s ease;
  will-change: opacity;
  padding: 22px;
  margin: 10px;
  border-radius: 8px;
`

const BlockImage = styled.div`
  margin: 30px 0;
  position: relative;
  line-height: 0;
  border-radius: ${ ({theme}) => theme.radius };
  overflow: hidden;
  img {
    max-width: 100%;
  }
  &:hover {
    ${ BlockImageTitle } {
      opacity: 1
    }
  }
`

const BlockCode = styled.div`
    margin-bottom: 1.75rem;
    background: ${ ({theme}) => theme.backgroundPrimary };
    -webkit-overflow-scrolling: touch;
    overflow: auto;
    padding: 20px 30px;
    position: relative;
    border-radius: ${ ({theme}) => theme.radius };
    &:after {
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      content: '';
      width: 4px;
      ${ ({theme}) => theme.bgAnimation }
    }
`

const BlogDetail = () => {
  const data = useStaticQuery(graphql`
    query DetailQuery {
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
      wpgraphql {
        post(id: "cG9zdDox") {
          author {
            name
          }
          date
          categories {
            edges {
              node {
                name
              }
            }
          }
          dateGmt
          excerpt
          content
          title
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
  `)

  useEffect(() => {
    document.querySelectorAll('pre code').forEach((block) => {
      hljs.highlightBlock(block);
    });
  }, [])

  const { post } = data.wpgraphql
  const convertDate = (date) => {
    return new Date(date).toDateString('id-ID')
  }

  // const compile = marksy({
  //   createElement,
  //   elements: {
  //     h1({id, children}) {
  //       return <BlockContent><h1>{ children }</h1></BlockContent>
  //     },
  //     h2({id, children}) {
  //       return <BlockContent><h2>{ children }</h2></BlockContent>
  //     },
  //     ol({id, children}) {
  //       return <BlockContent><ol>{ children }</ol></BlockContent>
  //     },
  //     table({id, children}) {
  //       return <BlockContent><table>{ children }</table></BlockContent>
  //     },
  //     code({language, code}) {
  //       return <BlockCode><pre><code dangerouslySetInnerHTML={{__html: hljs.highlight(language, code).value}}/></pre></BlockCode>
  //     },
  //     p({children}) {
  //       let result = children.some(val => typeof val === 'object')
  //       if (!result)
  //         return <BlockContent><p>{ children }</p></BlockContent>
  //       return children
  //     },
  //     img: ({src, alt}) => {
  //       return (
  //         <BlockImage>
  //           <img src={ src }/>
  //           <BlockImageTitle>
  //             <span>{ alt }</span>
  //           </BlockImageTitle>
  //         </BlockImage>
  //       )
  //     }
  //   }
  // })

  // const compiled = compile(data.detail.content.childMarkdownRemark.rawMarkdownBody)
  console.log(data)
  return (
    <BlogDetailWrap>
      <Helmet>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.10/styles/atom-one-dark.min.css"/>
        <link rel='stylesheet' id='coblocks-frontend-css'  href='https://muhrusdi-425b70.easywp.com/wp-content/plugins/coblocks/dist/blocks.style.build.css?ver=1.13.0' type='text/css' media='all' />
        <script type='text/javascript' src='https://muhrusdi-425b70.easywp.com/wp-content/plugins/coblocks/dist/js/vendors/flickity.min.js?ver=1.13.0'></script>
      </Helmet>
      <Container type="lg">
        <Header>
          <Title>{ post.title }</Title>
          <Desc dangerouslySetInnerHTML={{__html: post.excerpt}}/>
          <Info>
            <Row>
              <Col>
                <div>
                  <span>Penulis</span>
                  <span>{ post.author.name }</span>
                </div>
              </Col>
              <Col>
                <div>
                  <span>Diterbitkan</span>
                  <span>{ convertDate(post.date) }</span>
                </div>
              </Col>
              <Col>
                <div>
                  <span>Diperbarui</span>
                  <span>{ convertDate(post.dateGmt) }</span>
                </div>
              </Col>
            </Row>
          </Info>
          <Tags>
            <Row gutter={ 6 }>
              {
                post.categories.edges.map((item, i) => (
                  <Col key={ i }>
                    <a href="#">
                      { item.node.name }
                    </a>
                  </Col>
                ))
              }
            </Row>
          </Tags>
          <ImageFeatured fluid={ post.featuredImage.imageFile.childImageSharp.fluid }/>
        </Header>
      </Container>
      <div>
        <Container className="entry" type="md">
          <Content className="entry-content" dangerouslySetInnerHTML={{__html: post.content}}/>
        </Container>
        <div id="disqus_thread"></div>
      </div>
    </BlogDetailWrap>
  )
}

export default BlogDetail