import styled from '@emotion/styled'
import Row from "../row"
import Col from "../col"

const Container = styled.div(
  {
    margin: '0 auto'
  },
  ({gutter}) => {
    return {
      paddingLeft: gutter,
      paddingRight: gutter,
      [`& > ${Row}`]: {
        marginLeft: -gutter,
        marginRight: -gutter,
        [`& > ${Col}`]: {
          paddingLeft: gutter,
          paddingRight: gutter,
        },
      },
    }
  },
  ({type}) => {
    switch (type) {
      case "xxl":
        return {maxWidth: 1366}
        break
      case "xl":
        return {maxWidth: 1200}
        break
      case "lg":
        return {maxWidth: 992}
        break
      case "md":
        return {maxWidth: 768}
        break
      case "sm":
        return {maxWidth: 576}
        break
      default:
        return {maxWidth: 1200}
        break
    }
  }
)

Container.defaultProps = {
  gutter: 16
}

export default Container