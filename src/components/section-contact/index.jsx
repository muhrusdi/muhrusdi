import React from "react"
import styled from "@emotion/styled"
import { Container, Row, Col } from "Components"

const ContactWrap = styled.div`
  padding: 130px 0 60px 0;
`

const Input = styled.input`
  padding: 14px;
  box-sizing: border-box;
  width: 100%;
  font-size: 16px;
  border-radius: 6px;
  border: 2px solid transparent;
  background: ${({ theme }) => theme.backgroundPrimary};
  margin-top: 16px;
  transition: all 0.3s ease;
  outline: none;
  &:focus {
    border: 2px solid;
    ${({ theme }) => theme.colorAnimation};
  }
`

const Button = styled.button`
  position: absolute;
  bottom: 20px;
  right: 20px;
  background: #2196f3;
  padding: 6px 10px;
  border-radius: 6px;
  color: #fff;
  box-shadow: 0 6px 10px #c3c3c3;
`

const TextArea = styled.textarea`
  min-height: 140px;
  padding: 14px;
  box-sizing: border-box;
  width: 100%;
  font-size: 16px;
  border-radius: 6px;
  transition: all 0.3s ease;
  font-family: "Inter";
  border: 2px solid transparent;
  background: ${({ theme }) => theme.backgroundPrimary};
  margin-top: 16px;
  outline: none;
  &:focus {
    border: 2px solid;
    ${({ theme }) => theme.colorAnimation};
  }
`

const TitleWrap = styled.div`
  text-align: center;
  margin-bottom: 30px;
  h4 {
    font-size: 40px;
  }
`

const SectionContact = () => {
  return (
    <ContactWrap>
      <Container type="md">
        <TitleWrap>
          <h4>Get in Touch</h4>
        </TitleWrap>
        <form name="contact" method="POST" data-netlify="true">
          <Row gutter={8}>
            <Col sm={6}>
              <Input type="text" name="name" placeholder="Name" />
            </Col>
            <Col sm={6}>
              <Input type="email" name="email" placeholder="Email" />
            </Col>
            <Col sm={12} style={{ position: "relative" }}>
              <TextArea type="text" placeholder="Message" />
              <Button>Submit</Button>
            </Col>
          </Row>
        </form>
      </Container>
    </ContactWrap>
  )
}

export default SectionContact
