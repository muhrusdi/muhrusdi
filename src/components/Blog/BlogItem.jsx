/** @jsx jsx */
import React, { useState, useRef } from 'react'
import { css, jsx } from '@emotion/core'
import styled from '@emotion/styled'

const BlogItem = () => {
  const [isOver, setOver] = useState(false)
  const contentRef = useRef(null)

  const translate = css`
    background: #fff;
    padding: 25px;
    position: relative;
    z-index: 3;
    `

  const contentOpacity = css`
    height: auto;
    position: absolute;
    left: 0;
    bottom: 0;
    overflow: hidden;
    padding: 25px;
  `

  const BlogItemInner = ({children}) => (
    <div 
      onMouseEnter={() => setOver(true)} 
      onMouseLeave={() => setOver(false)} 
      css={css`
        position: relative;
        background: #fff;
        height: 100%;
        overflow: hidden;`
      }
    >
      { children }
    </div>
  )

  const BlogItemHeader = styled.div`
    background: #333;
    height: 200px;
  `

  const Heading = styled.h2`
    font-size: 18px;
    font-weight: bold;
  `

  const Desc = styled.small`
    margin-top: 13px;
    display: block;
  `

  const Content = styled.p`
    margin-top: 13px;
    color: #666;
    font-size: 14px;
  `

  const HeaderWrapper = () => (
    <div css={css`
      position: relative;`
    }>
      <div css={translate}>
        <Heading>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat impedit libero blanditiis?
        </Heading>
        <Desc>14 September 2018</Desc>
      </div>
    </div>
  )

  const ContentWrapper = ({children}) => (
    <div ref={contentRef} css={contentOpacity}>
      <p>
        { children }
      </p>
    </div>
  )

 

  return (
    <div css={css`margin-bottom: 20px;`}>
      <a 
        onMouseEnter={() => setOver(true)} 
        onMouseLeave={() => setOver(false)} 
        css={css`
          display: block;
          width: 100%;
          height: 100%;
          overflow: hidden;
          background: #fff;
          position: relative;
        `} href="#top"
      >
        <div>
          <div css={css`
            height: 300px;
            background: url('https://picsum.photos/200/300/?random') center center;
            background-size: cover;
            transform: scale(${isOver ? 1.05 : 1});
            transition: transform .3s ease-in;
          `}></div>
          <div css={css`
            background: #fff;
            transition: transform .3s ease-in;
            transform: translateY(${isOver ? '-56px' : '0'});
          `}>
            <HeaderWrapper/>
          </div>
          <div css={css`
            height: auto;
            position: absolute;
            left: 0;
            bottom: 0;
            opacity: ${isOver ? 1 : 0};
            transition: opacity .4s ease ${isOver ? '.3s' : '0s'};
            overflow: hidden;
            padding: 25px;
            p {
              margin-top: 13px;
              color: #666;
              font-size: 14px;
            }
          `}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quaerat optio, veniam animi porro voluptas molestiae.</p>
          </div>
        </div>
      </a>
    </div>
  )
}

export default BlogItem