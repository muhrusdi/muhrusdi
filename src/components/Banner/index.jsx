/* eslint-disable */
import React from 'react'
import { Container, Row, Typography } from 'reus'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import mr from '../../images/mr.jpg'
import { Link } from 'gatsby'
import { setShowAbout } from 'Actions/globalnavAction'
import { connect } from 'react-redux'
import { TweenLite, Power4 } from 'gsap'
import { Transition } from "react-transition-group"
import Icon from '../Icon'
import Detail from './Detail'


const DescriptionNormal = ({className, children}) => (
  <div className={className}>
    <p>{ children }</p>
  </div>
)

const Description = styled(DescriptionNormal)`
  max-width: 550px;
  font-size: 16px;
  margin: 0 auto;
  @media screen and (min-width: 576px) {
    font-size: 18px;
  }
`

const Facebook = () => <svg width="24" height="24"><path d="M13.4 21v-8.2h2.76l.41-3.2H13.4V7.54c0-.93.25-1.56 1.58-1.56h1.69V3.13c-.82-.1-1.65-.13-2.47-.13-2.44 0-4.12 1.5-4.12 4.23V9.6H7.33v3.2h2.75V21h3.32z"/></svg>
const Github = () => <svg width="24" height="24"><path fillRule="evenodd" d="M12.03 2a9.97 9.97 0 0 0-3.16 19.44c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.91-.61.06-.6.06-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.33 1.08 2.9.83.1-.65.35-1.09.64-1.34-2.22-.25-4.55-1.1-4.55-4.93 0-1.08.4-1.98 1.03-2.67-.1-.26-.45-1.27.1-2.64 0 0 .83-.27 2.74 1.02a9.58 9.58 0 0 1 5 0c1.9-1.3 2.73-1.02 2.73-1.02.55 1.37.2 2.38.1 2.64.64.7 1.03 1.58 1.03 2.67 0 3.84-2.33 4.68-4.56 4.92.36.31.68.92.68 1.85l-.01 2.74c0 .26.18.57.68.48A9.98 9.98 0 0 0 12.03 2z" clipRule="evenodd"/></svg>
const Linkedin = () => <svg width="24" height="24"><circle cx="4.98" cy="5.01" r="2.19"/><path d="M9.24 8.86v12.13H13v-6c0-1.58.3-3.12 2.26-3.12 1.94 0 1.96 1.81 1.96 3.22V21H21v-6.65c0-3.27-.7-5.79-4.53-5.79-1.83 0-3.06 1.01-3.56 1.96h-.05V8.85H9.23zm-6.14 0h3.77v12.13H3.1z"/></svg>
const Instagram = () => <svg width="24" height="24"><path d="M12 7.38a4.62 4.62 0 1 0 0 9.24 4.62 4.62 0 0 0 0-9.24zM12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/><circle cx="16.81" cy="7.21" r="1.08"/><path d="M20.53 6.11a4.6 4.6 0 0 0-2.63-2.63 6.6 6.6 0 0 0-2.19-.42c-.96-.04-1.26-.06-3.7-.06s-2.76 0-3.72.06c-.74.01-1.48.15-2.18.42A4.6 4.6 0 0 0 3.48 6.1c-.27.7-.4 1.44-.42 2.19C3 9.26 3 9.56 3 12c0 2.45 0 2.76.06 3.72.01.75.15 1.48.42 2.18a4.61 4.61 0 0 0 2.63 2.64c.7.27 1.44.42 2.19.45.96.04 1.26.05 3.7.05s2.76 0 3.72-.05a6.62 6.62 0 0 0 2.18-.42 4.61 4.61 0 0 0 2.64-2.64c.26-.7.4-1.43.41-2.18.05-.96.06-1.27.06-3.71s0-2.75-.06-3.71a6.58 6.58 0 0 0-.42-2.22zm-1.21 9.53c-.01.58-.12 1.15-.32 1.7-.3.78-.92 1.4-1.7 1.7-.54.2-1.1.3-1.68.31-.95.05-1.22.06-3.65.06-2.44 0-2.69 0-3.66-.06-.57 0-1.13-.1-1.67-.3a2.98 2.98 0 0 1-1.71-1.72c-.2-.53-.3-1.1-.32-1.67-.04-.95-.05-1.22-.05-3.65 0-2.44 0-2.69.05-3.66.01-.57.12-1.14.32-1.68.3-.8.93-1.41 1.71-1.72a5 5 0 0 1 1.67-.3c.95-.05 1.22-.06 3.66-.06 2.44 0 2.69 0 3.65.05.57.01 1.14.12 1.67.31A3 3 0 0 1 19 6.67c.2.53.3 1.1.32 1.66.04.96.05 1.22.05 3.66 0 2.44 0 2.7-.04 3.65h-.01z"/></svg>
const Twitter = () => <svg width="24" height="24"><path d="M19.63 8c.02.17.02.35.02.52 0 5.33-4.06 11.46-11.46 11.46-2.29 0-4.4-.66-6.19-1.8a8.07 8.07 0 0 0 5.97-1.67 4.04 4.04 0 0 1-3.76-2.8 4.29 4.29 0 0 0 1.82-.08A4.03 4.03 0 0 1 2.8 9.68v-.05c.54.3 1.16.49 1.82.51a4.02 4.02 0 0 1-1.25-5.39 11.46 11.46 0 0 0 8.3 4.22 4.03 4.03 0 0 1 6.87-3.68 7.96 7.96 0 0 0 2.56-.97c-.3.93-.93 1.72-1.77 2.22.81-.09 1.6-.31 2.32-.63-.55.8-1.23 1.51-2.02 2.09z"/></svg>
const Dribble = () => <svg width="24" height="24"><path d="M20.66 6.98A9.93 9.93 0 0 0 12 2 9.93 9.93 0 0 0 2 12a9.92 9.92 0 0 0 10 10 9.93 9.93 0 0 0 10-10c0-1.81-.45-3.49-1.34-5.02zM12 3.66c2 0 3.77.64 5.32 1.92a9.95 9.95 0 0 1-4.1 2.9c-1-1.81-2.09-3.33-3.26-4.54A7.72 7.72 0 0 1 12 3.66zM5.51 6.8a8.12 8.12 0 0 1 2.71-2.22c1.21 1.2 2.33 2.7 3.34 4.5a21.95 21.95 0 0 1-7.64.86c.3-1.15.84-2.2 1.59-3.14zM3.66 12l.01-.2.01-.2 1.16.02c2.67 0 5.15-.37 7.44-1.1.19.37.38.8.58 1.26-1.32.3-2.67 1-4.06 2.14s-2.4 2.33-3.04 3.58a8.06 8.06 0 0 1-2.1-5.5zM12 20.34a8.1 8.1 0 0 1-5.1-1.76c.6-1.19 1.52-2.32 2.77-3.4a8.53 8.53 0 0 1 3.71-2.02c.77 2.13 1.3 4.34 1.56 6.62-.97.37-1.95.56-2.94.56zm7.08-3.96A8.35 8.35 0 0 1 16.5 19c-.24-2.08-.7-4.1-1.38-6.08a35.81 35.81 0 0 1 5.16 0 8.1 8.1 0 0 1-1.2 3.46zm-1.24-5c-1.16 0-2.23.05-3.22.14-.25-.65-.48-1.2-.68-1.62 2.07-.9 3.53-2 4.4-3.3a8.03 8.03 0 0 1 1.96 4.84c-.81-.04-1.63-.06-2.46-.06z"/></svg>

const Banner = ({isShowAbout, setShowAbout, menus}) => {
  
  const handleClick = e => {
    e.preventDefault()
    setShowAbout(!isShowAbout)
  }


  const AboutButton = styled('a')`
    padding: 8px 20px;
    border-radius: 30px;
    display: inline-block;
    margin-top: 40px;
    height: 41px;
    background: rgb(35,169,255);
    background: linear-gradient(90deg, rgba(35,169,255,1) 0%, rgba(92,226,245,1) 100%);
    color: #fff;
    min-width: 140px;
    transition: all .3s ease;
  `

  const Heading1 = styled('h1')`
    font-size: 28px;
    font-weight: bold;
    @media screen and (min-width: 576px) {
      font-size: 50px;
    }
  `

  const Logo = () => (
    <div css={css`
      margin: 0 auto;
      position: relative;
      width: 120px;
      @media screen and (min-width: 576px) {
        width: 200px;
      }
      & > div {
        height: 200px;
      }
      img {
        border-radius: 50%;
        height: 120px;
        bottom: 0;
        left: 0;
        position: absolute;
        margin-bottom: 20px;
        @media screen and (min-width: 576px) {
          height: 200px;
        }
      }
    `}>
      <div>
        <img src={mr} alt=""/>
      </div>
    </div>
  )

  const Network = () => (
    <ul css={css`
      list-style: none;
      padding: 0;
      margin: 0 auto;
      margin-top: 40px;
      li {
        padding: 0 6px;
        display: inline-block;
        margin-bottom: 16px;
        @media screen and (min-width: 576px) {
          margin-bottom: 0;
          padding: 0 10px;
        }
        a {
          padding: 0;
          border-radius: 30px;
          height: 30px;
          width: 30px;
          display: inline-block;
          @media screen and (min-width: 576px) {
            padding: 8px;
            height: 41px;
            background: #efefef;
            width: 41px;
          }
        }
      }
    `}>
      <li>
        <a href="https://www.facebook.com/muhrusdiid" target="_blank">
          <Icon fill="#3b5999" component={<Facebook/>}/>
        </a>
      </li>
      <li>
        <a href="https://github.com/muhrusdi" target="_blank">
          <Icon fill="#333" component={<Github/>}/>
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/muhrusdi" target="_blank">
          <Icon fill="#0077B5" component={<Linkedin/>}/>
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/muhrusdiid" target="_blank">
          <Icon fill="#e4405f" component={<Instagram/>}/>
        </a>
      </li>
      <li>
        <a href="https://twitter.com/muhrusdiid" target="_blank">
          <Icon fill="#55acee" component={<Twitter/>}/>
        </a>
      </li>
      <li>
        <a href="https://dribbble.com/muhrusdi" target="_blank">
          <Icon fill="#ea4c89" component={<Dribble/>}/>
        </a>
      </li>
    </ul>
  )

  const ArrowBack = () => <svg width="24" height="24"><path d="M12.7 17.3L8.42 13H18v-2H8.41l4.3-4.3-1.42-1.4L4.6 12l6.7 6.7z"/></svg>

  let colors = ['#F2994A', '#2F80ED', '#BB6BD9']

  const GnMenuCenter = () => (
    <Transition
      unmountOnExit
      in={isShowAbout}
      timeout={1000}
      appear={true}
      onEnter={node => {
        TweenLite.set(node, {top: -60})
      }}
      addEndListener={(node, done) => {
        TweenLite.to(node, .4, {
          top: isShowAbout ? 0 : -60,
          onComplete: done
        })
      }}
    >
      <ul css={css`
        list-style: none;
        display: flex;
        position: absolute;
        align-items: center;
        height: 60px;
        left: 0;
        width: 100%;
        justify-content: center;
        z-index: 999999;
        li {
          padding: 0 8px;
          a {
            padding: 5px 10px;
            border-radius: 30px;
            font-size: 14px;
            display: inline-block;
            text-transform: uppercase;
            font-weight: bold;
          }
        }
      `}>
        <li>
          <a css={css`color: #808080;`} href="#" onClick={e => {
            e.preventDefault()
            setShowAbout(false)
          }}>Back</a>
        </li>
        {
          menus.map((item, i) => (
            <li>
              <Link css={css`color: ${colors[i]};`} to={`/${item.link}`}>
                {item.title}
              </Link>
            </li>
          ))
        }
      </ul>
    </Transition>
  )

  return (
    <div>
      <GnMenuCenter/>
      <Container xl gutter={20}>
        <Row style={{height: '100vh'}} align="center" justify="center">
          <div css={css`text-align: center;`}>
            <div css={css`
              transition: transform 1s ease;
            `}>
              <Transition
                unmountOnExit
                timeout={1000}
                in={isShowAbout}
                appear={true}
                onEnter={node => {
                  TweenLite.set(node, {
                    opacity: 0,
                    height: 0,
                    ease: Power4.easeOut,
                  })
                }}

                addEndListener={(node, done) => {
                  // anime({
                  //   targets: node,
                  //   height: isShowAbout ? node.scrollHeight : {value: 0, delay: 100, easing: 'linear', duration: 200},
                  //   opacity: isShowAbout ? {value: 1, duration: 500} : {value: 0, duration: 100, easing: 'linear'}
                  // })
                  // node.addEventListener('transitionend', done, false)
                  TweenLite.to(node, .7, {
                    opacity: isShowAbout ? 1 : 0,
                    height: isShowAbout ? 200 : 0,
                    ease: Power4.easeOut,
                    onComplete: done
                  })
                }}
              >
                <Logo/>
              </Transition>
              <Container md>
                <Typography
                  tag="h2"
                  type="headline"
                  weight="bold"
                  align="center"
                >Muhammad Rusdi</Typography>
                <Typography
                  tag="p"
                  type="intro"
                  align="center"
                >Front End Engineer: Javascript, React, Nextjs, Gatsbyjs, GraphQL. Swift & Objective-C.</Typography>
              </Container>
            </div>
            {
              isShowAbout ? 
                <Network/> :
                <AboutButton onClick={handleClick}>About</AboutButton>
            }
          </div>
        </Row>
            { isShowAbout ? 
              <Detail/> 
              : null
            }
      </Container>
    </div>
  )
}

export default connect(state => ({
  isShowAbout: state.globalnavReducer.isShowAbout,
  menus: state.globalnavReducer.menus
}), {
  setShowAbout
})(Banner)