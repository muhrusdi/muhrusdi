import React from 'react'
import { Globalnav, Globalfooter, Seo } from 'Components'

const Layout = ({children}) => {
  return (
    <>
      <Seo/>
      <Globalnav/>
      { children }
      <Globalfooter/>
    </>
  )
}

export default Layout