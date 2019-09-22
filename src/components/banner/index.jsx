import React from 'react'
import { Container, Row, Col, Button } from 'Components'
import { maxSM, minSM } from 'Utils/media-queries'
import styled from '@emotion/styled'
import { ButtonRadius } from "Components/button"

const Span = styled.span`
  display: block;
  font-size: 24px;
`
const BannerTextWrap = styled.div`
  ${ maxSM } {
    text-align: center;
  }
`
const BannerTitle = styled.h1`
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
  ${ minSM } {
    visibility: hidden;
    position: absolute;
  }
  ${ ({theme}) => theme.colorAnimation }
`

const R = styled.span`
  ${ maxSM } {
    text-transform: lowercase;
  }
`

const Desc = styled.p`
  font-size: 24px;
  margin-top: 20px;
  ${ maxSM } {
    span {
      display: none;
    }
  }
  ${ ({theme}) => theme.colorAnimation }
`

// const ButtonBanner = Button.Radius

const Banner = () => {
  return (
    <div>
      <Container>
        <Row height={ 500 } align="center">
          <Col>
            <BannerTextWrap>
              {/* <BannerTitle><SpanMDesktop>Muhammad </SpanMDesktop><SpanMMobile>muh</SpanMMobile><R>R</R>usdi</BannerTitle> */}
              <Desc>A Front End Engineer, building web with modern stack.<br/><span>Care about design and new technology.</span></Desc>
              <ButtonRadius>Contact</ButtonRadius>
            </BannerTextWrap>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Banner