import React from 'react'
import styled from '@emotion/styled'
import { Container, Row, Col } from 'reus'

const Globalfooter = () => {
  const List = styled.ul`
    margin: 0;
    list-style: none;
    li {
      margin-bottom: 10px;
      a {
        color: #757575;
        font-size: 14px;
        text-transform: uppercase;
      }
    }
  `

  const GnTopInner = () => (
    <Row gutter={20}>
      <Col>
        <List>
          <li>
            <a href="#">Works</a>
          </li>
        </List>
      </Col>
      <Col>
        top
      </Col>
      <Col>
        top
      </Col>
    </Row>
  )

  const GnFooterInner = () => (
    <div>
      adf
    </div>
  )

  const Footer = styled.footer`
    padding: 30px 0;
  `

  const GnTop = styled(GnTopInner)`
    padding: 10px 0;
  `

  const GnFooter = styled(GnFooterInner)`
    padding: 10px;
  `

  return (
    <Footer>
      <Container xl gutter={20}>
        <GnTop/>
        <GnFooter/>
      </Container>
    </Footer>
  )
}

export default Globalfooter