import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'reus'
import { css } from '@emotion/core'
import { Network } from 'Containers/Home/Banner'

const Globalfooter = () => {
  const List = styled.ul`
    margin: 0;
    list-style: none;
    li {
      a {
        color: #333;
        font-size: 18px;
        text-transform: uppercase;
      }
    }
  `
  const StyledTextFooter = styled(Link)`
    font-weight: bold;
    text-transform: uppercase;
  `
  const NetworkModif = styled(Network)`
    margin: 0;
    a {
      background: none !important;
    }
  `

  const GnTopInner = ({className}) => (
    <div className={className}>
      <Container xl gutter={20}>
        <Row css={css`
          height: 60px;
        `} gutter={20} align="center" justify="space-between">
          <Col>
            <List>
              <li>
                <StyledTextFooter to="/">
                  MR
                </StyledTextFooter>
              </li>
            </List>
          </Col>
          <Col>
            <NetworkModif/>
          </Col>
        </Row>
      </Container>
    </div>
  )

  const GnFooterInner = ({className}) => (
    <Row>
      <Col>

      </Col>
    </Row>
  )

  const Footer = styled.footer`
  `

  const GnTop = styled(GnTopInner)`
    padding: 10px 0;
    border-bottom: 1px solid #f1f1f1;
  `

  const GnFooter = styled(GnFooterInner)`
    padding: 10px;
    height: 60px;
  `

  return (
    <Footer>
      <GnTop/>
      <Container xl gutter={20}>
        <GnFooter/>
      </Container>
    </Footer>
  )
}

export default Globalfooter