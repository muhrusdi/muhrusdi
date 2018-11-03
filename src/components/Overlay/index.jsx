import React from 'react'
import { css } from 'emotion'

const Overlay = ({handleToggle, style}) => {
  const handleClick = () => {
    handleToggle(false)
  }
  return (
    <div className={css`
      z-index: 0;
      background: rgba(0,0,0,.3);
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      opacity: 0;
    `}
    onClick={handleClick}
    style={style}
    ></div>
  )
}

export default Overlay