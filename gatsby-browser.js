import React from 'react'
import { GlobalStyles } from 'Components'
import { ThemeContextProvider } from 'Hooks'

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeContextProvider>
      <GlobalStyles/>
      {element}
    </ThemeContextProvider>
  )
}