import { keyframes, css } from '@emotion/core'

const colorKeyframes = keyframes`
  0% {
    color: #D69292;
  }
  10% {
    color: #CCD692;
  }
  20% {
    color: #92D69D;
  }
  30% {
    color: #92D6D2;
  }
  50% {
    color: #92B9D6;
  }
  60% {
    color: #9B92D6;
  }
  70% {
    color: #C892D6;
  }
  80% {
    color: #D692B6;
  }
  90% {
    color: #D6929E;
  }
  100% {
    color: #D69292;
  }
`

const bgKeyframes = keyframes`
  0% {
    background: #D69292;
  }
  10% {
    background: #CCD692;
  }
  20% {
    background: #92D69D;
  }
  30% {
    background: #92D6D2;
  }
  50% {
    background: #92B9D6;
  }
  60% {
    background: #9B92D6;
  }
  70% {
    background: #C892D6;
  }
  80% {
    background: #D692B6;
  }
  90% {
    background: #D6929E;
  }
  100% {
    background: #D69292;
  }
`

const themes = {
  light: {
    background: '#fff',
    color: '#333',
    colorSecondary: '#989898',
    colorAnimation: css`
      animation: ${ colorKeyframes } 20s linear infinite;
    `,
    bgAnimation: css`
      animation: ${ bgKeyframes } 20s linear infinite;
    `,
    backgroundPrimary: '#F4F4F4',
    borderColorPrimary: '#d9d9d9'
  },
  dark: {
    background: '#000',
    color: '#fff',
    colorSecondary: '#9c9c9c',
    colorAnimation: css`
      animation: ${ colorKeyframes } 20s linear infinite;
    `,
    bgAnimation: css`
      animation: ${ bgKeyframes } 20s linear infinite;
    `,
    backgroundPrimary: '#101010',
    borderColorPrimary: '#333333'
  }
}

export default themes