import React from 'react'
import Banner from './Banner'
import Content from './Content'
import styled from '@emotion/styled'
import Globalfooter from 'Containers/Globalfooter'
import { Container } from 'reus'

const Shop = () => {
  const ShopWrapper = styled.div`
    background: #f9f9f9;
    padding-bottom: 25px;
  `
  const NavPlaceholder = styled.div`
    height: 112px;
  `
  return (
    <>
      <ShopWrapper>
        <NavPlaceholder/>
        <Container xl gutter={20}>
          <Banner/>
          <Content/>
        </Container>    
      </ShopWrapper>
      <Globalfooter/>
    </>
  )
}

export default Shop