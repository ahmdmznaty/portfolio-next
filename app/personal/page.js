'use client'
import { useThemeContext } from "../../context/theme.js"
import Link from "next/link"

export default function Personal() {
    const { theme, setTheme } = useThemeContext()
    return (
        <div>
            <Link href={"/"}> Back </Link>
            <h2>Personal {" => " + theme}</h2>
        </div>
    )
}
