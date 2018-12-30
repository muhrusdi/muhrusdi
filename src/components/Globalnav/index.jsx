/* eslint-disable */
import React, { useRef, useState } from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { connect } from 'react-redux'
import { Container, Row, Col } from 'reus'
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
    <Link to="/" css={css`
      height: 28px;
      display: inline-block;`}>
      <img src={logo} css={css`
        margin: 0;
        height: 28px;
        outline: none;
        vertical-align: middle;
      `}/>
    </Link>
  )

  const Menu = () => (
    <svg viewBox="0 0 50 50" version="1.1" width="20px" height="20px">
      <g>
        <path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z "/>
      </g>
    </svg>
  )

  const AllCategoriesIcon = () => (
    <svg viewBox="0 0 512 512" width="20px" height="20px"><circle cx="92" cy="256" r="28"/><circle cx="92" cy="132" r="28"/><circle cx="92" cy="380" r="28"/><path d="M432 240H191.5c-8.8 0-16 7.2-16 16s7.2 16 16 16H432c8.8 0 16-7.2 16-16s-7.2-16-16-16zM432 364H191.5c-8.8 0-16 7.2-16 16s7.2 16 16 16H432c8.8 0 16-7.2 16-16s-7.2-16-16-16zM191.5 148H432c8.8 0 16-7.2 16-16s-7.2-16-16-16H191.5c-8.8 0-16 7.2-16 16s7.2 16 16 16z"/></svg>
  )

  const StyledAllCategories = styled.div`
    & > * {
      vertical-align: middle;
    }
    button {
      padding-left: 10px;
      outline: none;
    }
  `

  const LeftMenuLink = styled(Link)`
    font-weight: bold;
    text-transform: uppercase;
  `

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
        &:first-of-type {
          padding-right: 30px;
        }
        &:not(:first-of-type) {
          font-size: 16px;
          color: #7d7d7d;
          text-transform: capitalize;
        }
      }
    `}>
      <li>
        <Logo src={logo} alt=""/>
      </li>
      <li>
        <LeftMenuLink to="/shop">
          Store
        </LeftMenuLink>
      </li>
      {/* { pathname !== '/' ? 
        <>
          <li>
            <div css={css`text-transform: uppercase;`}>
              { pathname.replace(/\//g, '') }
            </div>
          </li>
        </>
        : null } */}
    </ul>
  )

  const MenuCenter = styled.div`
    position: absolute;
    left: 35%;
    right: 35%;
    top: 0;
    height: 60px;
  `

  const ExtraMenu = styled.div`
    border-top: 1px solid #eaeaea;
    border-bottom: 1px solid #eaeaea;
    background: #fff;
  `

  const StyledInput = styled.input`
      font-variant: tabular-nums;
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      margin-top: 13px;
      list-style: none;
      position: relative;
      display: inline-block;
      width: 100%;
      font-size: 14px;
      line-height: 1.5;
      color: rgba(0,0,0,0.65);
      background-color: #fff;
      background-image: none;
      border: 1px solid #d9d9d9;
      border-radius: 4px;
      transition: all .3s;
      padding: 6px 11px;
      height: 34px;
      font-size: 16px;
      &:focus {
        border-color: #40a9ff;
        outline: 0;
        box-shadow: 0 0 0 2px rgba(24,144,255,0.2);
        border-right-width: 1px !important;
      }
  `
  const StyledExtraMenu = css`
    height: 50px;
    padding: 13px 30px 13px 3px;
  `
  const AllCategories = styled.div`
    border-right: 1px solid #eaeaea;
    button {
      font-size: 14px;
    }
    ${StyledExtraMenu};
  `
  const StyledCol = styled(Col)`
    &:not(:last-child) {
    }
    border-left: 1px solid #eaeaea;
    height: 50px;
    padding: 13px 20px;
  `
  const StyledExtraLink = styled(Link)`
    font-size: 14px;
    color: #333;
  `
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
            <Col>
              <GnMenuLeft/>
            </Col>
            {
              pathname === '/shop' ? 
                <Col>
                  <MenuCenter>
                    <StyledInput type="text" placeholder="Search"/>
                  </MenuCenter>
                </Col> : <></>
            }
            <Col>
              <MenuHover onClick={handleClickToggle}>
                <Menu/>
              </MenuHover>
            </Col>
          </Row>
        </Container>
        {
          pathname === '/shop' ?
            <ExtraMenu>
              <Container xl gutter={20}>
                <Row justify="space-between" align="center" css={css`height: 50px;`}>
                  <Col>
                    <AllCategories>
                      <StyledAllCategories>
                        <AllCategoriesIcon/>
                        <button>All Categories</button>
                      </StyledAllCategories>
                    </AllCategories>
                  </Col>
                  <Col>
                    <Row align="center" gutter={20}>
                      <Col>
                        <div>
                          <StyledExtraLink to="/">Promo</StyledExtraLink>
                        </div>
                      </Col>
                      <Col>
                        <div>
                          <StyledExtraLink to="/">Collections</StyledExtraLink>
                        </div>
                      </Col>
                      <Col>
                        <div>
                          <StyledExtraLink to="/">Brands</StyledExtraLink>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                  <Col>
                    <Row align="center">
                      <StyledCol>
                        <StyledExtraLink to="/">Help</StyledExtraLink>
                      </StyledCol>
                      <StyledCol>
                        <StyledExtraLink to="/">En</StyledExtraLink>
                      </StyledCol>
                    </Row>
                  </Col>
                </Row>
              </Container>
            </ExtraMenu> : null
        }
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