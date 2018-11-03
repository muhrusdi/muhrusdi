/* eslint-disable */

import React from 'react'
import { Row } from 'antd'
import Container from 'Components/Container'
import styled, { css } from 'react-emotion'

const Heading1 = styled('h1')`
  font-size: 50px;
  font-weight: bold;
`

const DescriptionNormal = ({className, children}) => (
  <div className={className}>
    <p>{ children }</p>
  </div>
)

const Description = styled(DescriptionNormal)`
  font-size: 18px;
  max-width: 550px;
  margin: 0 auto;
`

const Banner = () => {
  return (
    <div>
      <Container xl>
        <Row type="flex" style={{height: '100vh'}} align="middle" justify="center">
          <div className={css`text-align: center;`}>
            <Heading1>Muhammad Rusdi</Heading1>
            <Description>Front End Engineer: Javascript, React, Nextjs, Gatsbyjs, Reduxjs. Swift & Objective-C.</Description>
          </div>
        </Row>
      </Container>
    </div>
  )
}

export default Banner