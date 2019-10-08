import React from "react"
import { Globalnav, Globalfooter, SEO, GlobalStyles } from "Components"
import { ThemeContextProvider } from "Hooks"
import { Location } from "@reach/router"

const Layout = ({ children }) => {
  return (
    <ThemeContextProvider>
      <SEO />
      <GlobalStyles />
      <Globalnav />
      {children}
      <Location>
        {({ location }) => {
          const ownPath = location.pathname.split("/")[1]
          return ownPath !== "demo" ? <Globalfooter /> : null
        }}
      </Location>
    </ThemeContextProvider>
  )
}

export default Layout
