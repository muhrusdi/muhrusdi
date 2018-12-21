/* eslint-disable */
/** @jsx jsx */
import React, { useRef, useState } from 'react'
import { css, jsx } from '@emotion/core'
import styled from '@emotion/styled'
import { connect } from 'react-redux'
import { Container, Row } from 'reus'
import { Link } from "@reach/router"
import logo from 'Images/muhrusdi-logo.png'
import GnMenu from './GnMenu'
import Overlay from 'Components/Overlay'
import { handleToggle } from 'Actions/globalnavAction'
import { setConfig } from 'react-hot-loader'

setConfig({pureSFC: true})

const Globalnav = ({pathname, toggle, handleToggle, isShowAbout, menus}) => {
  // ref
  const gnMenu = useRef(null)
  const [onOverlay, setOnOverlay] = useState(null)

  const Logo = () => (
    <Link to="/" css={css`display: inline-block;`}>
      <img src={logo} css={css`
        margin: 0;
        height: 28px;
        outline: none;
      `}/>
    </Link>
  )

  const Menu = () => (
    <svg width="20" height="16" viewBox="0 0 20 16" fill="none">
      <path d="M1 1H19" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M1 8H19" stroke="black" strokeLinecap="round" strokeLinejoin="bevel"/>
      <path d="M1 15H19" stroke="black" strokeLinecap="round" strokeLinejoin="bevel"/>
    </svg>
  )


  const MenuHover = styled.div`
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

  const GnMenuLeft = () => (
    <ul css={css`
      list-style: none;
      margin: 0;
      display: flex;
      align-items: center;
      li {
        margin: 0;
        padding-right: 8px;
        &:first-child {
          padding-right: 30px;
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
            <div css={css`text-transform: uppercase;`}>
              { pathname.replace(/\//g, '') }
            </div>
          </li>
        </>
        : null }
    </ul>
  )

  return (
    <>
      <nav css={css`
        position: absolute;
        left: 0;
        right: 0;
        height: ${toggle ? '100%' : '60px'};
        transition: all .4s ease-out;
        top: ${isShowAbout ? -60 : 0}px;
        background: #fff;
        z-index: 99999;
        @media screen and (min-width: 576px) {
          height: 60px;
        }
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
        <GnMenu menus={menus} toggle={toggle}/>
      </nav>
      
      {/* <div className={css`height: 60px;`}></div> */}
      <Overlay handleToggle={handleToggle}/>
    </>
  )
}

export default connect(state => ({
  toggle: state.globalnavReducer.toggle,
  pathname: state.globalnavReducer.pathname,
  isShowAbout: state.globalnavReducer.isShowAbout,
  menus: state.globalnavReducer.menus
}), {
  handleToggle
})(Globalnav)