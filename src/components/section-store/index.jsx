import React from 'react'
import { Container, Row, Col, Button } from 'Components'
import { maxSM } from 'Utils/media-queries'
import styled from '@emotion/styled'

const SectionStoreWrap = styled.div`
  background: ${ ({theme}) => theme.backgroundPrimary };
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
const ButtonStore = styled(Button)({
  borderRadius: 30,
  height: 36,
  fontSize: 16,
  marginTop: 20,
  minWidth: 120,
  background: 'transparent'
},
({theme}) => ({borderColor: theme.borderColorPrimary}),
)


const SectionStore = () => (
  <div>
    <Container>
      <SectionStoreWrap>
        <Row height={ 360 } gutter={ 0 } align="center">
          <Col md={ 6 }>
            <SectionTextWrap>
              <SectionTitle>MR STORE</SectionTitle>
              <SectionDesc>Ayo belanja sekarang di MR Store</SectionDesc>
              <ButtonStore>Kunjungi</ButtonStore>
            </SectionTextWrap>
          </Col>
          <Col md={ 6 }>
            
          </Col>
        </Row>
      </SectionStoreWrap>
    </Container>
  </div>
)

export default SectionStore