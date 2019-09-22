import React from 'react'
import { Globalnav, Globalfooter, GlobalStyles } from 'Components'
import { SEO } from 'gatsby-theme-seo'
import imgThum from "Images/seo.jpg"

const Layout = ({children}) => {
  return (
    <>
      <SEO image={{src: imgThum, width: 1648, height: 863}}/>
      <GlobalStyles/>
      <Globalnav/>
      { children }
      <Globalfooter/>
    </>
  )
}

export default Layout