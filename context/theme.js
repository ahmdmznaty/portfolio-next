"use client"

import { createContext, useContext, useState } from "react"

const ThemeContext = createContext({})

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("light")
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useThemeContext() {
    return useContext(ThemeContext)
}