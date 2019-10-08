import React, { useState, useRef, useEffect } from "react"
import { Container, Row, Col } from "Components"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { useTheme } from "Hooks"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { Location } from "@reach/router"

const Nav = styled.nav`
  background: ${({ theme }) => theme.background};
  z-index: 9999;
  position: relative;
  transition: background 0.6s ease;
  will-change: background;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
`

const menuStyle = css`
  margin: 0;
  border: none;
  border-radius: 0;
  overflow: visible;
  font: inherit;
  color: inherit;
  text-transform: none;
  padding: 0;
  background-color: transparent;
  display: inline-block;
  fill: currentcolor;
  line-height: 0;
  cursor: pointer;
  svg {
    max-width: 100%;
    height: auto;
    box-sizing: border-box;
    vertical-align: middle;
  }
`

const Menu = styled.div`
  ${menuStyle}
  svg {
    path {
      transition: all 0.3s ease;
      stroke: ${({ theme }) => theme.color};
      &:first-of-type {
        transform: ${({ toggle }) =>
          toggle ? "translateY(-5px)" : "translateY(0)"};
        opacity: ${({ toggle }) => (toggle ? 0 : 1)};
      }
      &:last-of-type {
        transform: ${({ toggle }) =>
          toggle ? "translateY(5px)" : "translateY(0)"};
      }
    }
  }
`

const Light = styled.div`
  ${menuStyle}
  opacity: 0;
  transform: translateX(20px);
  transition: all 0.3s ease;
  ${({ toggle }) =>
    toggle
      ? `
    opacity: 1;
    transform: translateX(0);
  `
      : `
    opacity: 0;
    transform: translateX(20px);
  `}
  path {
    transition: all 0.3s ease;
    stroke: ${({ theme }) => theme.color};
  }
  circle {
    stroke: ${({ theme }) => theme.color};
  }
`

const Logo = styled(Link)`
  & > div {
    vertical-align: middle;
  }
`

const ExtraMenus = styled.div`
  background: ${({ theme }) => theme.background};
  position: absolute;
  left: 0;
  right: 0;
  top: 60px;
  overflow: hidden;
  transition: all 0.6s ease;
  will-change: all;
  z-index: 9999;
  height: 0;
  ul {
    list-style: none;
    li {
      padding: 5px 0;
      a {
        text-decoration: none;
        color: ${({ theme }) => theme.color};
      }
    }
  }
`

const Overlay = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 100;
  transition: all 0.6s ease;
  opacity: 0;
`

const EMInner = styled.div`
  padding: 30px 0 60px 0;
  position: relative;
  top: -30px;
  transition: all 1s ease;
  will-change: all;
  opacity: 0;
`

const BrandFlex = styled.div`
  display: flex;
  align-items: center;
`

const BrandPath = styled(Link)`
  margin-left: 30px;
  text-decoration: none;
  color: #333;
  text-transform: uppercase;
  display: block;
  font-weight: bold;
  span {
    line-height: 3;
  }
`
const ButtonPort = styled.button`
  padding: 4px;
  /* background: #ededed; */
  outline: none;
  border-radius: 6px;
  svg {
    vertical-align: middle;
  }
`

const Globalnav = props => {
  const [toggle, setToggle] = useState(false)
  const emRef = useRef(null)
  const overlaryRef = useRef(null)
  const { changeTheme, changeViewPort, viewPort } = useTheme()

  const data = useStaticQuery(graphql`
    query NavQuery {
      logo: file(relativePath: { eq: "muhrusdi.png" }) {
        childImageSharp {
          fixed(width: 28) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const asynExec = (cb, time) => {
    return new Promise((resolve, reject) => {
      cb()
      setTimeout(() => {
        resolve()
      }, time)
    })
  }

  useEffect(() => {
    toggle
      ? asynExec(() => {
          overlaryRef.current.style.display = "block"
          emRef.current.style.height = `${emRef.current.scrollHeight}px`
          overlaryRef.current.style.opacity = 1
        }, 300).then(() => {
          emRef.current.firstChild.firstChild.style.top = 0
          emRef.current.firstChild.firstChild.style.opacity = 1
        })
      : asynExec(() => {
          emRef.current.firstChild.firstChild.style.top = `${-30}px`
          emRef.current.firstChild.firstChild.style.opacity = 0
        }, 400).then(() => {
          emRef.current.style.height = `${0}px`
          overlaryRef.current.style.opacity = 0
          setTimeout(() => (overlaryRef.current.style.display = "none"), 600)
        })
  }, [toggle])

  const handleToggle = () => {
    setToggle(t => !t)
  }

  const handleChangeTheme = () => {
    changeTheme()
  }

  const handleClickOverlay = () => {
    setToggle(false)
  }

  const handleViewPort = view => {
    changeViewPort(view.currentTarget.id)
  }

  return (
    <Location>
      {({ location }) => {
        const ownPath = location.pathname.split("/")[1]
        return (
          <>
            <Nav>
              <Container>
                <Row justify="space-between" height={60} align="center">
                  <Col>
                    <BrandFlex>
                      <Logo to="/">
                        <Img fixed={data.logo.childImageSharp.fixed} />
                      </Logo>
                      {ownPath !== "" ||
                      ownPath !== "offline-plugin-app-shell-fallback" ? (
                        <BrandPath to={`/${ownPath}`}>
                          <span>{ownPath}</span>
                        </BrandPath>
                      ) : null}
                    </BrandFlex>
                  </Col>
                  <Col>
                    <Row align="center">
                      <Col style={{ padding: "0 10px" }}>
                        <div>
                          <ButtonPort id="desktop" onClick={handleViewPort}>
                            <svg
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24px"
                              height="24px"
                              viewBox="0 0 24 24"
                              aria-labelledby="laptopIconTitle"
                              stroke={
                                viewPort === "desktop" ? "#2196F3" : "#9c9c9c"
                              }
                              stroke-width="1"
                              stroke-linecap="square"
                              stroke-linejoin="miter"
                              fill="none"
                              color="#2329D6"
                            >
                              {" "}
                              <title id="laptopIconTitle">Laptop</title>{" "}
                              <path d="M20 7v11H4V7a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1z" />{" "}
                              <path d="M2 18h20M4 17h16" />{" "}
                            </svg>
                          </ButtonPort>
                        </div>
                      </Col>
                      <Col style={{ padding: "0 10px" }}>
                        <div>
                          <ButtonPort id="tablet" onClick={handleViewPort}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke={
                                viewPort === "tablet" ? "#2196F3" : "#9c9c9c"
                              }
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <rect
                                x="4"
                                y="2"
                                width="16"
                                height="20"
                                rx="2"
                                ry="2"
                                transform="rotate(180 12 12)"
                              />
                              <line x1="12" y1="18" x2="12" y2="18" />
                            </svg>
                          </ButtonPort>
                        </div>
                      </Col>
                      <Col style={{ padding: "0 10px" }}>
                        <div>
                          <ButtonPort id="mobile" onClick={handleViewPort}>
                            <svg
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24px"
                              height="24px"
                              viewBox="0 0 24 24"
                              aria-labelledby="iphoneIconTitle"
                              stroke={
                                viewPort === "mobile" ? "#2196F3" : "#9c9c9c"
                              }
                              stroke-width="1"
                              stroke-linecap="square"
                              stroke-linejoin="miter"
                              fill="none"
                              color="#2329D6"
                            >
                              {" "}
                              <title id="iphoneIconTitle">iPhone</title>{" "}
                              <path d="M18,3 L18,21 C18,21.5522847 17.5522847,22 17,22 L7,22 C6.44771525,22 6,21.5522847 6,21 L6,3 C6,2.44771525 6.44771525,2 7,2 L17,2 C17.5522847,2 18,2.44771525 18,3 Z" />{" "}
                              <polygon points="14 2 14 3 10 3 10 2" />{" "}
                            </svg>
                          </ButtonPort>
                        </div>
                      </Col>
                      <Col>
                        <Light toggle={toggle} onClick={handleChangeTheme}>
                          <svg
                            width="21"
                            height="21"
                            viewBox="0 0 21 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              cx="10.5"
                              cy="10.5"
                              r="4.58065"
                              stroke="black"
                            />
                            <path
                              d="M16.9355 10.5H18.9677"
                              stroke="black"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M2.03223 10.5H4.06448"
                              stroke="black"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M10.5 16.9355L10.5 18.9677"
                              stroke="black"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M10.5 2.03226L10.5 4.06452"
                              stroke="black"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M5.9494 15.0506L4.51238 16.4876"
                              stroke="black"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M16.4877 4.51239L15.0506 5.94941"
                              stroke="black"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M5.9494 5.94943L4.51238 4.51241"
                              stroke="black"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M16.4877 16.4876L15.0506 15.0506"
                              stroke="black"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </Light>
                      </Col>
                      <Col>
                        <Menu toggle={toggle} onClick={handleToggle}>
                          <svg
                            width="18"
                            height="10"
                            viewBox="0 0 18 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M0.5 9.5H17.5"
                              stroke="black"
                              stroke-linecap="round"
                            />
                            <path
                              d="M0.5 0.5H17.5"
                              stroke="black"
                              stroke-linecap="round"
                            />
                          </svg>
                        </Menu>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Container>
            </Nav>
            <ExtraMenus ref={emRef}>
              <Container>
                <EMInner>
                  <Row>
                    <Col>
                      <div>
                        <ul>
                          <li>
                            <a href="#">Beranda</a>
                          </li>
                          <li>
                            <Link to="/blog">Artikel</Link>
                          </li>
                          <li>
                            <a href="#">Store</a>
                          </li>
                          <li>
                            <a href="#">Template</a>
                          </li>
                          <li>
                            <a href="#">Library</a>
                          </li>
                        </ul>
                      </div>
                    </Col>
                  </Row>
                </EMInner>
              </Container>
            </ExtraMenus>
            <Overlay ref={overlaryRef} onClick={handleClickOverlay} />
          </>
        )
      }}
    </Location>
  )
}

export default Globalnav
