/* eslint-disable */

import React, { Component } from 'react'
import Container from 'Components/Container'
import { Row, Col } from 'antd'
import styled from 'react-emotion'
import posed from 'react-pose'
import { css } from 'react-emotion'
import anime from 'animejs'

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

class GnMenu extends Component {
  componentDidUpdate(prevProps) {
    // if (prevProps.toggle !== this.props.toggle) {
      console.dir(this.menuNode)
      anime({
        targets: this.menuNode,
        elasticity: 100,
        height: () => this.props.toggle ? this.menuNode.scrollHeight : 0
      })

      anime({
        targets: this.menuNode.children[0].children[0],
        top: () => this.props.toggle ? 0 : -20,
        delay: () => this.props.toggle ? 300 : 0,
        opacity: () => this.props.toggle ? 1 : 0,
      })
    // }

    // if (!this.props.toggle) {
    //   anime({
    //     targets: this.menuNode,
    //     height: 0
    //   })
    // }
  }
  render() {
    
    return (
      <div ref={node => this.menuNode = node} className={css`
        background: #fff;
        left: 0;
        width: 100%;
        height: 0;
        overflow: hidden;
        position: absolute;
      `}>
        <Container xl>
          <Row 
            type="flex" 
            gutter={70}
            style={{padding: '30px 0', top: '-20px', position: 'relative'}}>
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
        </Container>
      </div>
    )
  }
}

export default GnMenu