/* eslint-disable */

import React from 'react'
import { Row } from 'antd'
import styled, { css } from 'react-emotion'

const Heading1 = styled('h1')`
  font-size: 50px;
  font-weight: bold;
`

const Description = styled('p')`
  font-size: 18px;
`

const Banner = () => {
  return (
    <Row type="flex" style={{height: '100vh'}} align="middle" justify="center">
      <div className={css`text-align: center;`}>
        <Heading1>Muhammad Rusdi</Heading1>
        <Description>Front End Engineer: Javascript, React, Nextjs, Gatsbyjs, Reduxjs. Swift & Objective-C.</Description>
      </div>
    </Row>
  )
}

export default Banner