import React from 'react'
import { css, cx } from 'emotion'

const Container = ({xl, lg, md, sm, children, gutter = '16', style}) => {
  const breakPoints = {
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200
  }

  let _props = {}

  _props['_sm'] = sm ? css`
  @media (min-width: ${breakPoints.sm}px) {
    max-width: 540px;
    label: sm;
  }
  ` : null

  _props['_md'] = md ? css`
  @media (min-width: ${breakPoints.md}px) {
    max-width: 728px;
    label: md;
  }
  ` : null

  _props['_lg'] = lg ? css`
  @media (min-width: ${breakPoints.lg}px) {
    max-width: 960px;
    label: lg;
  }
  ` : null

  _props['_xl'] = xl ? css`
  @media (min-width: ${breakPoints.xl}px) {
    max-width: 1140px;
    label: xl;
  }
  ` : null

  const { _xl, _lg, _md, _sm } = _props
  return (
    <div className={ cx(
      css`
        padding-left: ${gutter}px;
        padding-right: ${gutter}px;
        margin: 0 auto;
        label: container;
        ${style};
      `, _xl, _lg, _md, _sm)
     }>
      { children }
    </div>
  )
}

export default Container