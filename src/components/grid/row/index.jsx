import styled from '@emotion/styled'
import Col from "../col"

const Row = styled.div(
  {
    label: 'row',
    display: "flex",
    boxSizing: "border-box",
    flex: "0 1 auto",
    WebkitBoxOrient: "horizontal",
    WebkitBoxDirection: "normal",
  },
  ({gutter, align, justify, height, flow, direction}) => {
    // const _gutter = gutter === 16 ? gutter : `${gutter}px !important`
    return {
      marginLeft: -gutter,
      marginRight: -gutter,
      alignItems: align,
      justifyContent: justify,
      flexWrap: flow,
      flexDirection: direction,
      height,
      [`& > ${Col}`]: {
        paddingLeft: gutter,
        paddingRight: gutter,
      },
    }
  },
  ({children, ...props}) => ({...props})
)

Row.defaultProps = {
  gutter: 16,
  direction: "row",
  flow: "wrap",
}

export default Row
