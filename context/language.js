"use client"

import { createContext, useContext, useState } from "react"

const LanguageContext = createContext({})

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState("english")
    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    )
}

export function useLanguageContext() {
    return useContext(LanguageContext)
}