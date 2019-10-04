import React from "react"
import { Globalnav, Globalfooter, SEO, GlobalStyles } from "Components"
import { ThemeContextProvider } from "Hooks"

const Layout = ({ children }) => {
  return (
    <ThemeContextProvider>
      <SEO />
      <GlobalStyles />
      <Globalnav />
      {children}
      <Globalfooter />
    </ThemeContextProvider>
  )
}

export default Layout
