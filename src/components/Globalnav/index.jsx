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
      <path d="M1 1H19" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M1 8H19" stroke="black" stroke-linecap="round" stroke-linejoin="bevel"/>
      <path d="M1 15H19" stroke="black" stroke-linecap="round" stroke-linejoin="bevel"/>
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
        <GnMenu toggle={toggle}/>
      </nav>
      {
        toggle ? <Overlay handleToggle={handleClickToggle}/> : null
      }
    </>
  )
}

export default connect(state => ({
  toggle: state.globalnavReducer.toggle
}), {
  handleToggle
})(Globalnav)