/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

const Icon = ({fill, component}) => {
  return (
    <i css={css`
      svg {
        fill: ${fill};
      }
    `}>
      {component}
    </i>
  )
}

export default Icon