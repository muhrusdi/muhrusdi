import React from 'react'
import { css } from 'emotion'

const Icon = ({fill, component}) => {
  return (
    <i className={css`
      svg {
        fill: ${fill};
      }
    `}>
      {component}
    </i>
  )
}

export default Icon