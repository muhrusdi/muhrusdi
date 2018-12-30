import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Container, Row, Col, Typography } from 'reus'

const Content = () => {
  const HeartEmpty = ({height, width, ...props}) => (
    <svg height={height} width={width} {...props} viewBox="0 0 512 512"><path d="M352 56h-1c-39.7 0-74.8 21-95 52-20.2-31-55.3-52-95-52h-1c-61.9.6-112 50.9-112 113 0 37 16.2 89.5 47.8 132.7C156 384 256 456 256 456s100-72 160.2-154.3C447.8 258.5 464 206 464 169c0-62.1-50.1-112.4-112-113zm41.6 229.2C351 343.5 286.1 397.3 256 420.8c-30.1-23.5-95-77.4-137.6-135.7C89.1 245.1 76 198 76 169c0-22.6 8.8-43.8 24.6-59.8 15.9-16 37-24.9 59.6-25.1H161.1c14.3 0 28.5 3.7 41.1 10.8 12.2 6.9 22.8 16.7 30.4 28.5 5.2 7.9 14 12.7 23.5 12.7s18.3-4.8 23.5-12.7c7.7-11.8 18.2-21.6 30.4-28.5 12.6-7.1 26.8-10.8 41.1-10.8h.9c22.5.2 43.7 9.1 59.6 25.1 15.9 16 24.6 37.3 24.6 59.8-.2 29-13.3 76.1-42.6 116.2z"/></svg>
  )

  const LeftContent = styled.div`
    background: #fff;
    border-radius: 6px;
    border: 1px solid #f1f1f1;
    ul {
      list-style: none;
      li {
        padding: 17px 25px;
        height: 55px;
        border-bottom: 1px solid #eaeaea;
        &:last-of-type {
          border-bottom: none;
        }
        a {
          color: #444;
          font-size: 14px;
        }
      }
    }
  `
  const RightContent = styled.div`
    background: #fff;
    border-radius: 6px;
    border: 1px solid #f1f1f1;
  `
  const StyledCol = styled(Col)`
    &:first-child {
      & > div {
        border-left: none;
      }
    }
    &:nth-of-type(3n+1) {
      & > div {
        border-left: none;
      }
    }
    & > div {
      height: 400px;
      border-left: 1px solid #f1f1f1;
      border-bottom: 1px solid #f1f1f1;
    }
  `
  const RCHeader = styled.div`
    height: 55px;
    padding: 17px 25px;
    border-bottom: 1px solid #eaeaea;
  `
  const RigntContentItem = ({className, image}) => (
    <div className={className} css={css`
      display: flex;
      flex-direction: column;
      overflow: hidden;
    `}>
      <div css={css`
        position: relative;
        flex-basis: 450px;
      `}>
        <div css={css`
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          z-index: 10;
        `}>
          <div css={css`
            display: flex;
            justify-content: space-between;
            padding: 20px;
            align-items: center;
          `}>
            <div css={css`
              border-radius: 4px;
              padding 5px;
              background: #1b9aff;
              color: #fff;
            `}>
              50%
            </div>
            <div css={css`
              background: #eaeaea;
              padding: 5px;
              border-radius: 4px;
              svg {
                vertical-align: middle;
              }
            `}>
              <HeartEmpty height={20} width={20} fill="#9c9c9c"/>
            </div>
          </div>
        </div>
        <Img css={css`
          position: absolute !important;
          bottom: 0;
          left: 0;
          right: 0;
        `} fluid={image.childImageSharp.fluid}/>
      </div>
      <div css={css`
        flex-basis: 50%;
      `}>
        <div css={css`
          display: flex;
          flex-direction: column;
          height: 100%;
          align-items: center;
          padding: 20px;
        `}>
          <div css={css`
            flex-basis: 80px;
          `}>
            <Typography
              tag="h4"
              type="tout"
              ellipsis={2}
              align="center"
              weight="normal"
              css={css`
                font-size: 16px !important;
              `}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, fuga?
            </Typography>
          </div>
          <div>
            <Typography
              tag="p"
              color="#696969"
              type="body-reduced"
            >
              Rp. 34.000.000
            </Typography>
          </div>
        </div>
      </div>
    </div>
  )
  return (
    <StaticQuery
      query={graphql`
        query ContentQuery {
          ember: file(relativePath: { eq: "HMAR2.png"}) {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => {
        return (
          <Container>
            <Row gutter={10}>
              <Col md={3}>
                <LeftContent>
                  <ul>
                    <li>
                      <a href="#">Pakaian</a>
                    </li>
                    <li>
                      <a href="#">Elektronik</a>
                    </li>
                    <li>
                      <a href="#">Kendaraan</a>
                    </li>
                  </ul>
                </LeftContent>
              </Col>
              <Col md={9}>
                <RightContent>
                  <RCHeader >
                    asdf
                  </RCHeader>
                  <div>
                    <Row>
                      <StyledCol lg={4} md={6} ms={12}>
                        <RigntContentItem image={data.ember}/>
                      </StyledCol>
                      <StyledCol lg={4} md={6} ms={12}>
                        <RigntContentItem image={data.ember}/>
                      </StyledCol>
                      <StyledCol lg={4} md={6} ms={12}>
                        <RigntContentItem image={data.ember}/>
                      </StyledCol>
                      <StyledCol lg={4} md={6} ms={12}>
                        <RigntContentItem image={data.ember}/>
                      </StyledCol>
                      <StyledCol lg={4} md={6} ms={12}>
                        <RigntContentItem image={data.ember}/>
                      </StyledCol>
                      <StyledCol lg={4} md={6} ms={12}>
                        <RigntContentItem image={data.ember}/>
                      </StyledCol>
                      <StyledCol lg={4} md={6} ms={12}>
                        <RigntContentItem image={data.ember}/>
                      </StyledCol>
                      <StyledCol lg={4} md={6} ms={12}>
                        <RigntContentItem image={data.ember}/>
                      </StyledCol>
                    </Row>
                  </div>
                </RightContent>
              </Col>
            </Row>
          </Container>
        )
      }}
    />
  )
}

export default Content