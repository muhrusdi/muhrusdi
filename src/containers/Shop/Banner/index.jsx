import React from 'react'
import styled from '@emotion/styled'

const Banner = () => {
  const StyledBanner = styled.div`
    padding: 25px 0;
  `
  const BannerInner = styled.div`
    background: #fff;
    height: 300px;
    border-radius: 6px;
    border: 1px solid #f1f1f1;
  `
  return (
    <StyledBanner>
      <BannerInner>
        asdf
      </BannerInner>
    </StyledBanner>
  )
}

export default Banner