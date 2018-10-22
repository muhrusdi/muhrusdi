/* eslint-disable */

import React, { Component } from 'react'
import Container from 'Components/Container'
import { Row, Col } from 'antd'
import posed from 'react-pose'
import { css } from 'react-emotion'
import anime from 'animejs'

const GnMenuWrapper = posed.div({
  visible: {
    height: 'auto',
    overflow: 'overlay',
    opacity: 1,
    transition: {
      height: { ease: 'easeIn', duration: 300 },
      opacity: { ease: 'easeIn', duration: 500, delay: 500 }
    }
  },
  hidden: {
    height: 0,
    opacity: 1,
    overflow: 'hidden'
  }
})

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
        overflow: ${this.props.toggle ? 'visible' : 'hidden'};
        position: absolute;
      `}>
        <Container xl>
          <Row type="flex" style={{padding: '30px 0', top: '-20px', position: 'relative'}}>
            <Col xl={12}>
              <div>
                <h4 className={css`
                  margin-bottom: 10px;
                  font-size: 16px;
                  font-weight: bold;
                `}>Works</h4>
                <ul className={css`
                  margin: 0;
                  list-style: none;
                  li {
                    margin-bottom: 10px;
                    a {
                      color: #757575;
                    }
                  }
                `}>
                  <li><a href="#">Eproc</a></li>
                  <li><a href="#">Eproc</a></li>
                  <li><a href="#">Eproc</a></li>
                  <li><a href="#">Eproc</a></li>
                  <li><a href="#">Eproc</a></li>
                  <li><a href="#">Eproc</a></li>
                  <li><a href="#">Eproc</a></li>
                  <li><a href="#">Eproc</a></li>
                  <li><a href="#">Eproc</a></li>
                </ul>
              </div>
            </Col>
            <Col xl={12}>
              <div>
                <h4>Blogs</h4>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default GnMenu