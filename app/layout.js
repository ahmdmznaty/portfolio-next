import Main from "@components/Home/Main.jsx"
import { ThemeProvider } from "@context/theme.js"
import { LanguageProvider } from "@context/language.js"

export const metadata = {
    title: 'Ahmed M. Znaty',
    description: 'Software Engineer',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <ThemeProvider>
                    <LanguageProvider>
                        <Main /> <hr /> {children}
                    </LanguageProvider>
                </ThemeProvider>
            </body>
        </html>
    )
}

