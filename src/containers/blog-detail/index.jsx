import React, { createElement } from 'react'
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
`

const BlockImage = styled.div`
  margin: 30px 0;
  position: relative;
  line-height: 0;
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

  const convertDate = (date) => {
    return new Date(date).toDateString('id-ID')
  }

  const compile = marksy({
    createElement,
    elements: {
      h1({id, children}) {
        return <BlockContent><h1>{ children }</h1></BlockContent>
      },
      h2({id, children}) {
        return <BlockContent><h2>{ children }</h2></BlockContent>
      },
      ol({id, children}) {
        return <BlockContent><ol>{ children }</ol></BlockContent>
      },
      table({id, children}) {
        return <BlockContent><table>{ children }</table></BlockContent>
      },
      code({language, code}) {
        return <BlockCode><pre><code dangerouslySetInnerHTML={{__html: hljs.highlight(language, code).value}}/></pre></BlockCode>
      },
      p({children}) {
        let result = children.some(val => typeof val === 'object')
        if (!result)
          return <BlockContent><p>{ children }</p></BlockContent>
        return children
      },
      img: ({src, alt}) => {
        return (
          <BlockImage>
            <img src={ src }/>
            <BlockImageTitle>
              <span>{ alt }</span>
            </BlockImageTitle>
          </BlockImage>
        )
      }
    }
  })

  const compiled = compile(data.detail.content.childMarkdownRemark.rawMarkdownBody)

  return (
    <div>
      <Helmet>
        <script rel="preconnect" async dangerouslySetInnerHTML={{
          __html: ` /**
          *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
          *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables*/
        
          var disqus_config = function () {
          this.page.url = '/article';  // Replace PAGE_URL with your page's canonical URL variable
          this.page.identifier = 'PAGE_IDENTIFIER'; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
          };
        
          (function() { // DON'T EDIT BELOW THIS LINE
          var d = document, s = d.createElement('script');
          s.src = 'https://muhrusdi.disqus.com/embed.js';
          s.setAttribute('data-timestamp', +new Date());
          (d.head || d.body).appendChild(s);
          })();`
        }}/>
        <noscript rel="preconnect" async dangerouslySetInnerHTML={{__html: `Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a>`}}/>
        <script rel="preconnect" async id="dsq-count-scr" src="//muhrusdi.disqus.com/count.js" async></script>
      </Helmet>
      <Container type="lg">
        <Header>
          <Title>{ data.detail.title }</Title>
          <Desc>{ data.detail.description }</Desc>
          <Info>
            <Row>
              <Col>
                <div>
                  <span>Penulis</span>
                  <span>{ `${data.detail.author.firstName} ${data.detail.author.lastName}` }</span>
                </div>
              </Col>
              <Col>
                <div>
                  <span>Diterbitkan</span>
                  <span>{ convertDate(data.detail.createdAt) }</span>
                </div>
              </Col>
              <Col>
                <div>
                  <span>Diperbarui</span>
                  <span>{ convertDate(data.detail.updatedAt) }</span>
                </div>
              </Col>
            </Row>
          </Info>
          <Tags>
            <Row gutter={ 6 }>
              {
                data.detail.category.map((item, i) => (
                  <Col key={ i }>
                    <a href="#">
                      { item.title }
                    </a>
                  </Col>
                ))
              }
            </Row>
          </Tags>
          <ImageFeatured fluid={ data.detail.image.fluid }/>
        </Header>
      </Container>
      <div>
        <Container type="md">
          <Content>
            {
              compiled.tree
            }
          </Content>
        </Container>
        <div id="disqus_thread"></div>
      </div>
    </div>
  )
}

export default BlogDetail