import React from 'react'
import styled from '@emotion/styled'
import { minLG, minSM, maxSM } from 'Utils/media-queries'
import { Container, Row, Col } from 'Components'

const Footer = styled.footer`
  padding: 60px 0;
`

const FooterList = styled.ul`
  list-style: none;
  li {
    padding: 8px 0;
    a {
      color: inherit;
      text-decoration: none;
      color: ${ ({theme}) => theme.colorSecondary };
    }
  }
`

const FooterInitial = styled.div`
  margin-bottom: 20px;
  h4 {
    font-size: 18px;
  }
`

const ColInner = styled.div`
  ${ maxSM } {
    margin-bottom: 20px;
  }
`

const Globalfooter = () => {
  return (
    <Footer>
      <Container>
        <FooterInitial>
          <h4>MR</h4>
        </FooterInitial>
        <Row>
          <Col sm={ 6 } md={ 3 }>
            <ColInner>
              <FooterList>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Berita</a>
                </li>
                <li>
                  <a href="#">Store</a>
                </li>
                <li>
                  <a href="#">Library</a>
                </li>
              </FooterList>
            </ColInner>
          </Col>
          <Col sm={ 6 } md={ 3 }>
            <ColInner>
              <FooterList>
                <li>
                  <a href="#">Template</a>
                </li>
                <li>
                  <a href="#">Reus Design</a>
                </li>
              </FooterList>
            </ColInner>
          </Col>
          <Col sm={ 6 } md={ 3 }>
            <ColInner>
              <FooterList>
                <li>
                  <a href="#">Facebook</a>
                </li>
                <li>
                  <a href="#">Twitter</a>
                </li>
                <li>
                  <a href="#">Linkedin</a>
                </li>
                <li>
                  <a href="#">Instgram</a>
                </li>
              </FooterList>
            </ColInner>
          </Col>
          <Col sm={ 6 } md={ 3 }>
            <ColInner>
              <FooterList>
                <li>
                  <a href="#">Youtube</a>
                </li>
                <li>
                  <a href="#">Github</a>
                </li>
              </FooterList>
            </ColInner>
          </Col>
        </Row>
      </Container>
    </Footer>
  )
}

export default Globalfooter