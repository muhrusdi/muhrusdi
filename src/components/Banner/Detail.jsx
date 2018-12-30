import React from 'react'
import { css, keyframes } from '@emotion/core'
import { Container, Typography } from 'reus'
import imgReact from 'Images/react.png'
import imgGraphql from 'Images/graphql.png'
import imgSwift from 'Images/swift.png'
import imgVue from 'Images/vuejs.png'
import imgStyled from 'Images/styled-component.png'
import imgEmotion from 'Images/emotionjs.png'
import imgNext from 'Images/nextjs.png'
import imgGatsby from 'Images/gatsbyjs.png'
import imgJs from 'Images/js.png'
import imgNode from 'Images/nodejs.png'
import imgExpress from 'Images/express.png'

const Detail = () => {
  const Item = () => (
    <div css={css`
      white-space: nowrap;
      overflow: hidden;
      & > div {
        display: inline-block;
        padding: 0 2.2rem;
        vertical-align: middle;
        opacity: .55;
        outline: none;
        cursor: default;
        transition: opacity .2s ease;
        & > img {
          height: 80px;
        }
        &:hover {
          opacity: .8;
        }
      }
    `}>
      <div>
        <img src={imgJs}/>
      </div>
      <div>
        <img src={imgReact}/>
      </div>
      <div>
        <img src={imgGraphql}/>
      </div>
      <div>
        <img src={imgSwift}/>
      </div>
      <div>
        <img src={imgStyled}/>
      </div>
      <div>
        <img src={imgEmotion}/>
      </div>
      <div>
        <img src={imgGatsby}/>
      </div>
      <div>
        <img src={imgVue}/>
      </div>
      <div>
        <img src={imgNext}/>
      </div>
      <div>
        <h2>Objective-C</h2>
      </div>
      <div>
        <img src={imgExpress}/>
      </div>
      <div>
        <img src={imgNode}/>
      </div>
    </div>
  )

  const slide = keyframes`
    from {
      transform: translate3d(0, 0, 0);
    }
    to {
      transform: translate3d(-50%, 0, 0);
    }
  `

  const Skills = () => (
    <div css={css`
      overflow: hidden;
      position: relative;
      white-space: nowrap;
      &:after {
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 50px;
        content: '';
        background: rgb(255,255,255);
        background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%);
      }
      &:before {
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        width: 50px;
        content: '';
        z-index: 4;
        background: rgb(255,255,255);
        background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%);
      }
    `}>
      <div css={css`
        display: inline-block;
        white-space: nowrap;
        overflow: hidden;
        animation: ${slide} ${40 * 2 || 10}s linear infinite;
        & > div {
          display: inline-block;
        }
      `}>
        <Item/>
        <Item/>
      </div>
    </div>
  )

  return (
    <div css={ css`
      padding: 70px 0;  
      
   ` }>
      <Container sm gutter={20}>
        <div css={css`
          text-align: center;
          &:before {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        height: 10px;
        background: rgb(71,101,252);
        background: linear-gradient(90deg, rgba(71,101,252,1) 0%, rgba(136,255,239,1) 100%);
      }
        `}>
          <Typography
            tag="p"
            type="body"
          >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum sequi ut sapiente nemo eius, rem animi voluptatibus architecto iusto id exercitationem beatae natus dignissimos asperiores veniam earum quaerat magni praesentium?</Typography>
          <Typography
            tag="p"
            type="body"
          >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum sequi ut sapiente nemo eius, rem animi voluptatibus architecto iusto id exercitationem beatae natus dignissimos asperiores veniam earum quaerat magni praesentium?</Typography>
        </div>
      </Container>
      <div css={ css`
        padding: 40px 0;
        margin-top: 30px;
        overflow: hidden;
      `}>
        <Skills/>
      </div>
    </div>
  )
}

export default Detail