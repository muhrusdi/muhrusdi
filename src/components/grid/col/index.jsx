import styled from '@emotion/styled'

const breakPoints = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
}

const cols = {
  col1: "8.3333333333",
  col2: "16.6666666667",
  col3: "25",
  col4: "33.3333333333",
  col5: "41.6666666667",
  col6: "50",
  col7: "58.3333333333",
  col8: "66.6666666667",
  col9: "75",
  col10: "83.3333333333",
  col11: "91.6666666667",
  col12: "100",
}

const Col = styled.div(
  ({basis}) => {
    return {
      label: 'col',
      flexBasis: basis,
      boxSizing: 'border-box'
    }
  },
  ({sm, md, lg, xl}) => {
    const media = []
    if (sm) {
      media.push(
        {[`@media (min-width: ${breakPoints.sm}px)`]: {
          flexBasis: `${cols[`col${sm}`]}%`,
          maxWidth: `${cols[`col${sm}`]}%`
        }}
      )
    }
    if (md) {
      media.push(
        {[`@media (min-width: ${breakPoints.md}px)`]: {
          flexBasis: `${cols[`col${md}`]}%`,
          maxWidth: `${cols[`col${md}`]}%`
        }}
      )
    }
    if (lg) {
      media.push(
        {[`@media (min-width: ${breakPoints.lg}px)`]: {
          flexBasis: `${cols[`col${lg}`]}%`,
          maxWidth: `${cols[`col${lg}`]}%`
        }}
      )
    }
    if (xl) {
      media.push(
        {[`@media (min-width: ${breakPoints.xl}px)`]: {
          flexBasis: `${cols[`col${xl}`]}%`,
          maxWidth: `${cols[`col${xl}`]}%`
        }}
      )
    }
    return media
  }
)

Col.defaultProps = {
  basis: "100%",
}

export default Col
