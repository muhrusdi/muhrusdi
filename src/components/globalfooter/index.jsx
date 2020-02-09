import React from "react"
import styled from "@emotion/styled"
import { minLG, minSM, maxSM } from "Utils/media-queries"
import { Container, Row, Col } from "Components"
import { Link } from "gatsby"

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
      color: ${({ theme }) => theme.colorSecondary};
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
  ${maxSM} {
    margin-bottom: 20px;
  }
`

const GnFooter = styled.div`
  padding-top: 40px;
  span {
    font-size: 14px;
    color: ${({ theme }) => theme.colorSecondary};
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
          <Col sm={6} md={3}>
            <ColInner>
              <FooterList>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <Link to="/">Store</Link>
                </li>
                <li>
                  <Link to="/">Library</Link>
                </li>
              </FooterList>
            </ColInner>
          </Col>
          <Col sm={6} md={3}>
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
          <Col sm={6} md={3}>
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
          <Col sm={6} md={3}>
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
        <GnFooter>
          <span>
            © {new Date().getFullYear()} Designed & Built by Muhammad Rusdi.
          </span>
        </GnFooter>
      </Container>
    </Footer>
  )
}

export default Globalfooter
