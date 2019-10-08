import React, { useState, useContext } from "react"
import { ThemeProvider } from "emotion-theming"
import themes from "Utils/themes"

const ThemeContext = React.createContext({
  theme: "light",
  viewPort: "desktop",
  changeTheme: () => {},
  changeViewPort: () => {},
})

export const useTheme = () => {
  const themeState = useContext(ThemeContext)
  return themeState
}

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light")
  const [viewPort, setViewPort] = useState("desktop")

  const handleChangeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  const handleViewPort = view => {
    setViewPort(view)
  }

  return (
    <ThemeContext.Provider
      value={{
        theme: theme,
        viewPort: viewPort,
        changeTheme: handleChangeTheme,
        changeViewPort: handleViewPort,
      }}
    >
      <ThemeProvider theme={{ ...themes[theme], viewPort: viewPort }}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider
