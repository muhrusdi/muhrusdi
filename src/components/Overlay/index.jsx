/** @jsx jsx */
import React, { useEffect, useRef } from 'react'
import { css, jsx } from '@emotion/core'
import { connect } from 'react-redux'
import { TweenLite } from 'gsap'
import { Transition } from "react-transition-group"

const Overlay = ({handleToggle, toggle}) => {
  const onOverlay = useRef(null)

  const handleClick = () => {
    handleToggle(false)
  }

  // useEffect(() => {
  //   anime({
  //     targets: onOverlay.current,
  //     opacity: {value: 0, duration: 300, easing: 'linear', delay: 200}
  //   })
  // }, [toggle])

  return (
    <Transition
      unmountOnExit
      timeout={1000}
      in={toggle}
      appear={true}
      onEnter={ node => {
        TweenLite.set(node, {opacity: 0})
      }}
      addEndListener={(node, done) => {
        TweenLite.to(node, .4, {
          opacity: toggle ? 1 : 0
        })
      }}
    >
      <div ref={onOverlay} css={css`
        z-index: 999;
        background: rgba(0,0,0,.3);
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        label: overlay;
      `}
      onClick={handleClick}
      ></div>
    </Transition>
  )
}

export default connect(state => ({
  toggle: state.globalnavReducer.toggle
}), null)(Overlay)