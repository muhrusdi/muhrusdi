import React from 'react'
import { Container, Row, Col, Button } from 'Components'
import { maxSM } from 'Utils/media-queries'
import styled from '@emotion/styled'
import { ButtonRadius } from "Components/button"

const SectionStoreWrap = styled.div`
  background: ${ ({theme}) => theme.backgroundPrimary };
  border-radius: ${ ({theme}) => theme.radius };
`
const SectionTextWrap = styled.div`
  padding: 20px 60px;
  ${ maxSM } {
    padding: 20px;
  }
`
const SectionTitle = styled.h2`
  font-size: 40px;
  font-weight: 800;
`
const SectionDesc = styled.p`
  font-size: 18px;
  color: ${ ({theme}) => theme.colorSecondary };
`
// const ButtonStore = Button.Radius


const SectionStore = () => (
  <div>
    <Container>
      <SectionStoreWrap>
        <Row height={ 360 } gutter={ 0 } align="center">
          <Col md={ 6 }>
            <SectionTextWrap>
              <SectionTitle>MR STORE</SectionTitle>
              <SectionDesc>Ayo belanja sekarang di MR Store</SectionDesc>
              <ButtonRadius>Kunjungi</ButtonRadius>
            </SectionTextWrap>
          </Col>
        </Row>
      </SectionStoreWrap>
    </Container>
  </div>
)

export default SectionStore