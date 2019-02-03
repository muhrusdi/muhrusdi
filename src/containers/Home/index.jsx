import React from 'react'
import { Container } from 'reus'
import Banner from './Banner'
import Blog from './Blog'
import GetInTouch from './GetInTouch'
import Globalfooter from 'Containers/Globalfooter'

const Home = () => {
  return (
    <>
      <Container xl>
        <Banner/>
        <Blog/>
        <GetInTouch/>
      </Container>
      <Globalfooter/>
    </>
  )
}

export default Home