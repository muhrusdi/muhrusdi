import React from 'react'
import styled from '@emotion/styled'
import { Container, Typography, Row, Col } from 'reus'

const Wrapper = styled.div`
  padding: 50px 0;
`

const Input = styled.input`
  box-sizing: border-box;
  padding: 20px;
  background: #f1f1f1;
  font-size: 14px;
  border-radius: 6px;
  border: none;
  margin-bottom: 20px;
  outline: none;
  width: 100%;
`
const Textarea = styled.textarea`
  padding: 10px;
  border: none;
  box-sizing: border-box;
  padding: 20px;
  background: #f1f1f1;
  font-size: 14px;
  outline: none;
  width: 100%;
  border-radius: 6px;
  max-width: 100%;
  min-height: 100px;
  min-width: 100%;
`
const TextHeader = styled.div`
  text-align: center;
  margin-bottom: 30px;
`
const GetInTouch = () => {
  return (
    <Wrapper>
      <Container md>
        <div>
          <TextHeader>
            <Typography
              as="h3"
              type="headline"
            >
              Get in Touch
            </Typography>
          </TextHeader>
          <form>
            <Row gutter={10}>
              <Col md={6}>
                <Input placeholder="Name"/>
              </Col>
              <Col md={6}>
                <Input placeholder="Email"/>
              </Col>
              <Col md={12}>
                <Textarea placeholder="Message"/>
              </Col>
            </Row>
          </form>
        </div>
      </Container>
    </Wrapper>
  )
}

export default GetInTouch