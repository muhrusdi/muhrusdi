/* eslint-disable */
/** @jsx jsx */
import React from 'react'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'reus'
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'
import { Transition } from "react-transition-group"
import { TweenLite } from 'gsap'

const Heading4 = ({children, to}) => 
  <Link css={css`
    margin-bottom: 9px;
    display: block;
    color: #333;
    font-weight: bold;
    @media only screen and (max-width: 480px) {
      border-bottom: 1px solid #dedede;
      padding: 13px 0;
      margin-bottom: 0;
    }
  `} to={to}>{children}</Link>

const List = styled.ul`
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
      font-size: 14px;
    }
  }
`

const GnRow = () => (
  <Row 
    gutter={10}
    style={css`
      padding: 15px 0 30px 0px;
      position: relative;
      transform: translateY(-21px);
      display: block;
      @media screen and (min-width: 576px) {
        display: flex;
      }
    `}
  >
    <Col md={2} sm={12}>
      <div>
        <Heading4 to="/">Works</Heading4>
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
    <Col md={2} sm={12}>
      <div>
        <Heading4 to="/blog/">Blogs</Heading4>
        <List>
          <li><a href="#">Hellow World</a></li>
        </List>
      </div>
    </Col>
  </Row>
)

const GnMenu = ({toggle}) => {
  return (
    <Transition
      unmountOnExit
      in={toggle}
      appear={true}
      onEnter={ node => {
        // node.style.height = 0
        // node.firstChild.firstChild.style.translateY = 'translateY(-21px)'
        // node.firstChild.firstChild.style.opacity = 0
        TweenLite.set(node, {
          height: 0
        })
        TweenLite.set(node.firstChild.firstChild, {
          y: -21,
          opacity: 0
        })
      }}
      addEndListener={(node, done) => {
        // anime({
        //   targets: node,
        //   elasticity: 0,
        //   height: toggle ? node.scrollHeight : {value: 0, easing: 'linear', duration: 300}
        // })

        // anime({
        //   targets: node.firstChild.firstChild,
        //   translateY: toggle ? {value: 0, delay: 300} : -21,
        //   opacity: toggle ? {value: 1, delay: 300} : 0,
        //   elasticity: 0
        // })
        TweenLite.to(node, .4, {
          height: toggle ? node.scrollHeight : 0,
          delay: toggle ? 0 : .3
        })

        TweenLite.to(node.firstChild.firstChild, .4, {
          delay: toggle ? .4 : 0,
          y: toggle ? 0 : -21,
          opacity: toggle ? 1 : 0
        })
      }}
    >
      <div css={css`
        overflow: hidden;
        position: absolute;
        left: 0;
        width: 100%; 
        background: #fff;
        height: 0;
      `}>
        <Container xl style={{position: 'relative'}} gutter={20}>
          <GnRow/>
        </Container>
      </div>
    </Transition>
  )
}

export default GnMenu