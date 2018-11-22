/* eslint-disable */

import React, { useEffect, useRef, useState } from 'react'
import styled, { css } from 'react-emotion'
import { connect } from 'react-redux'
import { Container, Row } from 'reus'
import { Link } from "@reach/router"
import logo from 'Images/logo.png'
import GnMenu from './GnMenu'
import Icon from '../Icon'
import Overlay from 'Components/Overlay'
import { handleToggle } from 'Actions/globalnavAction'
import { setConfig } from 'react-hot-loader'

setConfig({pureSFC: true})

const Globalnav = ({pathname, toggle, handleToggle, isShowAbout}) => {
  // ref
  const gnMenu = useRef(null)
  const [onOverlay, setOnOverlay] = useState(null)

  const Logo = () => (
    <Link to="/">
      <img src={logo} className={css`margin: 0; outline: none;`}/>
    </Link>
  )

  const Menu = () => (
    <svg width="20" height="16" viewBox="0 0 20 16" fill="none">
      <path d="M1 1H19" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M1 8H19" stroke="black" strokeLinecap="round" strokeLinejoin="bevel"/>
      <path d="M1 15H19" stroke="black" strokeLinecap="round" strokeLinejoin="bevel"/>
    </svg>
  )


  const MenuHover = styled('div')`
    background: ${toggle ? '#efefef' : ''};
    transition: background .3s ease;
    cursor: pointer;
    padding: 7px;
    border-radius: 4px;
    svg {
      vertical-align: middle;
    }
  `

  const handleClickToggle = () => {
    handleToggle(!toggle)
  }

  const GnMenuLeft = ({location}) => (
    <ul className={css`
      list-style: none;
      margin: 0;
      display: flex;
      align-items: center;
      li {
        margin: 0;
        padding-right: 8px;
        &:first-child {
          padding-right: 10px;
        }
        &:not(:first-child) {
          font-size: 16px;
          color: #7d7d7d;
          text-transform: capitalize;
        }
      }
    `}>
      <li>
        <Logo src={logo} alt=""/>
      </li>
      { pathname !== '/' ? 
        <>
          <li>
            <div>
              { pathname.replace(/\//g, '') }
            </div>
          </li>
        </>
        : null }
    </ul>
  )

  return (
    <>
      <nav className={css`
        position: absolute;
        left: 0;
        right: 0;
        height: 60px;
        transition: top .4s ease-out;
        top: ${isShowAbout ? -60 : 0}px;
        background: #fff;
        z-index: 99999;
      `}>
        <Container xl gutter={20}>
          <Row
            align="center" 
            justify="space-between" 
            style={{height: 60}}
          >
            <div>
              <GnMenuLeft/>
            </div>
            <div>
              <MenuHover onClick={handleClickToggle}>
                <Menu/>
              </MenuHover>
            </div>
          </Row>
        </Container>
        <GnMenu toggle={toggle}/>
      </nav>
      
      {/* <div className={css`height: 60px;`}></div> */}
      <Overlay handleToggle={handleToggle}/>
    </>
  )
}

export default connect(state => ({
  toggle: state.globalnavReducer.toggle,
  pathname: state.globalnavReducer.pathname,
  isShowAbout: state.globalnavReducer.isShowAbout
}), {
  handleToggle
})(Globalnav)