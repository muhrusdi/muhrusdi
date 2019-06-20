import React from 'react'
import { Container, Row, Col, Button } from 'Components'
import { maxSM, minSM } from 'Utils/media-queries'
import styled from '@emotion/styled'

const Span = styled.span`
  display: block;
  font-size: 24px;
`
const BannerTextWrap = styled.div`
  ${ maxSM } {
    text-align: center;
  }
`
const Title = styled.h1`
  font-size: 58px;
  line-height: 1;
  font-weight: 900;
  ${ maxSM } {
    font-size: 42px;
  }
`
const SpanMDesktop = styled.span`
  ${ maxSM } {
    display: none;
  }
`
const SpanMMobile = styled.span`
  ${ ({theme}) => theme.colorAnimation }
  ${ minSM } {
    visibility: hidden;
    position: absolute;
  }
`

const R = styled.span`
  ${ maxSM } {
    text-transform: lowercase;
  }
`

const Desc = styled.p`
  font-size: 24px;
  margin-top: 20px;
  ${ ({theme}) => theme.colorAnimation }
  ${ maxSM } {
    span {
      display: none;
    }
  }
`

const ButtonBanner = styled(Button)({
  borderRadius: 30,
  height: 42,
  minWidth: 120,
  fontSize: 18,
  marginTop: 40,
  background: 'transparent'
},
({theme}) => ({borderColor: theme.borderColorPrimary}),
)

const Banner = () => {
  return (
    <div>
      <Container>
        <Row height={ 500 } align="center">
          <Col>
            <BannerTextWrap>
              <Title><SpanMDesktop>Muhammad </SpanMDesktop><SpanMMobile>muh</SpanMMobile><R>R</R>usdi</Title>
              <Desc>A Front End Engineer, building web with modern stack.<br/><span>Care about design and new technology.</span></Desc>
              <ButtonBanner>Contact</ButtonBanner>
            </BannerTextWrap>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Banner