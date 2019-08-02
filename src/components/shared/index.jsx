import React from 'react'
import styled from '@emotion/styled'
import { Container, Button } from 'Components'
import { maxSM, minSM } from 'Utils/media-queries'
import { Link } from "gatsby"

const SectionNewsWrap = styled.div`
  padding-top: 110px;
  ${ ({children, ...props}) => ({...props}) }
`

const TitleWrap = styled.div`
  margin-bottom: 80px;
  h3 {
    font-size: 40px;
    font-weight: 800;
  }
  p {
    font-size: 18px;
    color: ${ ({theme}) => theme.colorSecondary };
  }
`

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 60px;
  ${ maxSM } {
    padding: 0;
    display: block;
    text-align: center;
  }
`

const FlexTitle = styled.div`
  ${ minSM } {
    max-width: 50%;
  }
`

const ButtonLink = styled.button`
  border-radius: 30px;
  margin-top: 20px;
  height: 36px;
  font-size: 16px;
  margin-top: 20px;
  min-width: 120px;
`

const NewsLink = styled(Link)`
  ${ ({theme}) => theme.colorAnimation }
  text-decoration: none;
  display: block;
`

export const SectionLayout = ({title, desc, path, children, ...props}) => (
  <SectionNewsWrap {...props}>
    <Container>
      <TitleWrap>
        <Flex>
          <FlexTitle>
            <h3>{ title }</h3>
            <p>{ desc }</p>
          </FlexTitle>
          {
            path ?
              <div>
                <ButtonLink>
                  <NewsLink to={ path }>Selengkapnya</NewsLink>
                </ButtonLink>
              </div>
            : null
          }
        </Flex>
      </TitleWrap>
      { children }
    </Container>
  </SectionNewsWrap>
)

const DateWrap = styled.div`
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  ${ ({theme}) => theme.colorAnimation }
  ${ ({children, ...props}) => ({...props}) }
`

export const CustomDate = ({children, ...props}) => {
  return (
    <DateWrap {...props}>
      { new Date(children).toDateString('id-ID') }
    </DateWrap>
  )
}

export const Tags = styled.div`
  position: absolute;
  bottom: 0;
  margin: 20px;
  display: flex;
  right: 0;
  left: 0;
  overflow: hidden;
  &:after {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 20px;
    background: ${ ({theme}) => theme.backgroundPrimary };
    background: linear-gradient(90deg, ${ ({theme}) => theme.backgroundPrimary }00 0%, ${ ({theme}) => theme.backgroundPrimary } 100%);
    content: '';
  }
  a {
    &:not(:first-of-type) {
      margin-left: 10px;
    }
  }
  ${ ({children, ...props}) => ({...props}) }
`

Tags.Tag = styled(Link)`
  font-size: 12px;
  text-decoration: none;
  font-weight: bold;
  text-transform: uppercase;
  color: ${ ({theme}) => theme.colorSecondary };
  padding: 4px 14px;
  border: 1px solid ${ ({theme}) => theme.borderColorPrimary };
  border-radius: 30px;
  background: ${ ({theme}) => theme.backgroundPrimary };
  transition: all .3s ease;
  will-change: all;
  &:hover {
    border: 1px solid;
  }
  ${ ({children, ...props}) => ({...props}) }
`
