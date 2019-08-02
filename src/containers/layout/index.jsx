import React from 'react'
import { Globalnav, Globalfooter, Seo, GlobalStyles } from 'Components'

const Layout = ({children}) => {
  return (
    <>
      <Seo/>
      <GlobalStyles/>
      <Globalnav/>
      { children }
      <Globalfooter/>
    </>
  )
}

export default Layout