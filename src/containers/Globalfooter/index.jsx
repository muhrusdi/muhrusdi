import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { Container, Row, Col, Typography } from 'reus'
import { css } from '@emotion/core'
import { Network } from 'Containers/Home/Banner'

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

const ListMenu = styled.ul`
  list-style: none;
  li {
    padding: 4px 0;
    a {
      color: #333;
    }
  }
`

const GnBottom = styled.div`
  padding: 30px 0;
`

const GnTopInner = props => (
  <div {...props}>
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
      <GnBottom>
        <Row>
          <Col md={4}>
            <div>
              <Typography
                as="h5"
                type="body"
                weight="bold"
              >
                Resource
              </Typography>
              <ListMenu>
                <li><a href="#">Lending</a></li>
                <li><a href="#">Template</a></li>
                <li><a href="#">UI</a></li>
              </ListMenu>
            </div>
          </Col>
          <Col md={4}>
            <div>
              <Typography
                as="h5"
                type="body"
                weight="bold"
              >
                Network
              </Typography>
              <ListMenu>
                <li><a href="#">Github</a></li>
                <li><a href="#">Linkedin</a></li>
                <li><a href="#">Twitter</a></li>
              </ListMenu>
            </div>
          </Col>
          <Col md={4}>
            <div>
              <Typography
                as="h5"
                type="body"
                weight="bold"
              >
                Works
              </Typography>
              <ListMenu>
                <li><a href="#">Reus Design</a></li>
              </ListMenu>
            </div>
          </Col>
        </Row>
      </GnBottom>
    </Container>
  </div>
)


const Footer = styled.footer`
`

const GnTop = styled(GnTopInner)`
  padding: 40px 0;
  border-bottom: 1px solid #f1f1f1;
`

// const GnFooter = styled(GnFooterInner)`
//   padding: 10px;
//   height: 60px;
// `
const Globalfooter = () => {
  return (
    <Footer>
      <GnTop/>
    </Footer>
  )
}

export default Globalfooter