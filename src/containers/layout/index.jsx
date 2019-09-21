import React from 'react'
import { Globalnav, Globalfooter, SEO, GlobalStyles } from 'Components'

const Layout = ({children}) => {
  return (
    <>
      <SEO/>
      <GlobalStyles/>
      <Globalnav/>
      { children }
      <Globalfooter/>
    </>
  )
}

export default Layout