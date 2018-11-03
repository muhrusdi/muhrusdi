/* eslint-disable */

import React from 'react'
import Container from 'Components/Container'
import { Row, Col } from 'antd'
import styled from 'react-emotion'
import { css } from 'react-emotion'
import { Transition, animated, Keyframes } from 'react-spring'

const Heading4 = styled('h4')`
  margin-bottom: 14px;
  font-size: 16px;
  font-weight: bold;
  @media only screen and (max-width: 480px) {
    border-bottom: 1px solid #dedede;
    padding: 13px 0;
    margin-bottom: 0;
  }
`

const List = styled('ul')`
  margin: 0;
  list-style: none;
  @media only screen and (max-width: 480px) {
    overflow: hidden;
    height: 0;
  }
  li {
    margin-bottom: 10px;
    a {
      color: #757575;
    }
  }
`

const Content = Keyframes.Trail({
  peek: {opacity: 0},
  open: {opacity: 1},
  close: {opacity: 0}
})

const GnMenu = ({style}) => {
  return (
    <animated.div style={style} className={css`
      background: #fff;
      left: 0;
      width: 100%;
      overflow: hidden;
      position: absolute;
    `}>
      <Container xl>
        {/* <Transition
          from={{top: -40, opacity: 0}}
          enter={{top: 0, opacity: 1}}
          leave={{top: -40, opacity: 0}}
          config={{ tension: 200, friction: 18}}
        >
          {
            () => props => */}
              <Row 
                type="flex" 
                gutter={70}
                style={{padding: '30px 0', position: 'relative'}}
                >
                  <Col lg={6} sm={8} xs={24}>
                    <div>
                      <Heading4>Works</Heading4>
                      <List>
                        <li><a href="#">DTC</a></li>
                        <li><a href="#">MPM</a></li>
                        <li><a href="#">Eproc</a></li>
                        <li><a href="#">PTSP</a></li>
                        <li><a href="#">Web Desa</a></li>
                        <li><a href="#">KAMUPI PNUP</a></li>
                      </List>
                    </div>
                  </Col>
                  <Col lg={6} sm={8} xs={24}>
                    <div>
                      <Heading4>Blogs</Heading4>
                      <List>
                        <li><a href="#">Hellow World</a></li>
                      </List>
                    </div>
                  </Col>
                </Row>
          {/* }
        </Transition> */}
      </Container>
    </animated.div>
  )
}

export default GnMenu