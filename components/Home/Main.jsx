'use client'
import { useThemeContext } from "../../context/theme.js"
import Link from "next/link"

export default function Main() {
    const { theme, setTheme } = useThemeContext()
    return (
        <div className='home'>
            <div className="nav">
                <Link href={"/personal"}> Personal </Link>
                <Link href={"/skills"}> Skills </Link>
                <Link href={"/portfolio"}> Portfolio </Link>
                <Link href={"/experience"}> Experience </Link>
                <Link href={"/teaching"}> Teaching </Link>
                <Link href={"/contacts"}> Contacts </Link>
            </div>
            <h1>
                Home {" => " + theme}
            </h1>
            <div style={{ border: "1px solid red", padding: "10px" }}>
                <button
                    onClick={() => { setTheme((prev) => prev == "light" ? "dark" : "light") }}
                >
                    Change Theme
                </button>
            </div>
        </div>
    )
}