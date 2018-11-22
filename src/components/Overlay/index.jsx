import React, { useEffect, useRef } from 'react'
import { css } from 'emotion'
import anime from 'animejs'
import { connect } from 'react-redux'
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
        node.style.opacity = 0
        node.style.transition = 'opacity .3s ease'
      }}
      addEndListener={(node, done) => {
        anime({
          targets: node,
          opacity: toggle ? {value: 1, duration: 500} : {value: 0, duration: 0, easing: 'linear', delay: 200}
        })
        // node.addEventListener('transitionend', done, false)
      }}
    >
      <div ref={onOverlay} className={css`
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