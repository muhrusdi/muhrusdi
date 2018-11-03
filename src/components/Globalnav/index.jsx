/* eslint-disable */

import React from 'react'
import styled, { css } from 'react-emotion'
import { connect } from 'react-redux'
import Container from 'Components/Container'
import { Row, Icon } from 'antd'
import posed from 'react-pose'
import logo from 'Images/logo.png'
import GnMenu from './GnMenu'
import Overlay from 'Components/Overlay'
import { Transition, animated } from 'react-spring'

import { handleToggle } from 'Actions/globalnavAction'

const Globalnav = ({toggle, handleToggle}) => {
  const ListItem = styled('a')`
    background: red;
  `

  const Logo = styled('img')`
    margin: 0;
  `
  const Menu = () => (
    <svg width="20" height="16" viewBox="0 0 20 16" fill="none">
      <path d="M1 1H19" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M1 8H19" stroke="black" strokeLinecap="round" strokeLinejoin="bevel"/>
      <path d="M1 15H19" stroke="black" strokeLinecap="round" strokeLinejoin="bevel"/>
    </svg>
  )

  const MenuHover = posed.div({
    hoverable: true,
    init: {
      background: '#fff'
    },
    hover: {
      background: '#eceaea'
    }
  })

  const handleClickToggle = () => {
    handleToggle(!toggle)
  }

  return (
    <>
      <nav className={css`
        position: absolute;
        left: 0;
        right: 0;
        height: 60;
        top: 0;
        z-index: 1000;
        background: #fff;
      `}>
        <Container xl>
          <Row type="flex" align="middle" justify="space-between" style={{height: 60}}>
            <div>
              <Logo src={logo} alt=""/>
            </div>
            <div>
              <MenuHover className={css`
                cursor: pointer;
                padding: 8px 7px 7px 7px;
                border-radius: 4px;
              `}
              onClick={handleClickToggle}
              >
                <Icon component={Menu}/>
              </MenuHover>
            </div>
          </Row>
        </Container>
        <Transition
          items={toggle}
          from={{height: 0}}
          enter={{height: 'auto'}}
          leave={{height: 0}}
          config={{ tension: 200, friction: 18 }}
        >
          {
            toggle => props => toggle ?
              <GnMenu style={props}/> : null
          }
        </Transition>
      </nav>
      
      <Transition
        items={toggle}
        from={{opacity: 0}}
        enter={{opacity: 1}}
        leave={{opacity: 0}}
      >
        {
          toggle =>
            toggle
              ? props => <Overlay style={props} handleToggle={handleClickToggle}/> : null
        }
      </Transition>
    </>
  )
}

export default connect(state => ({
  toggle: state.globalnavReducer.toggle
}), {
  handleToggle
})(Globalnav)