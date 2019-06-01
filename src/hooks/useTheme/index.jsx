import React, { useState, useContext } from 'react'
import { ThemeProvider } from 'emotion-theming'
import themes from 'Utils/themes'

const ThemeContext = React.createContext({theme: 'light'})

export const useTheme = () => {
  const themeState = useContext(ThemeContext)
  return themeState
}

const ThemeContextProvider = ({children}) => {
  const [theme, setTheme] = useState('light')

  const handleChangeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={ {
      theme: theme,
      changeTheme: handleChangeTheme
    } }>
      <ThemeProvider theme={ themes[theme] }>
        { children }
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider