import React, { Component } from 'react'
import anime from 'animejs'
import { css } from 'emotion'

class Overlay extends Component {
  componentDidMount() {
    anime({
      targets: this.overlayNode,
      opacity: 1,
      delay: 200
    })
  }
  handleClick = () => {
    this.props.handleToggle(false)
  }
  render() {
    return (
      <div ref={node => this.overlayNode = node} className={css`
        z-index: 0;
        background: rgba(0,0,0,.3);
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        opacity: 0;
      `}
      onClick={this.handleClick}
      ></div>
    )
  }
}

export default Overlay