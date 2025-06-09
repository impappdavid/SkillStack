
import { Button } from "@/components/ui/button"
import { useTheme } from "./theme-provider"
import { useEffect, useState } from "react"
import { DropdownMenuShortcut } from "@/components/ui/dropdown-menu"
import { LogOut, Moon, Sun } from "lucide-react"

export default function ModeToggle() {
    const { theme, setTheme } = useTheme()
    const [currentTheme, setCurrentTheme] = useState("light")

    useEffect(() => {
        if (theme) {
            setCurrentTheme(theme)
        }
    }, [theme])

    const toggleTheme = () => {
        const newTheme = currentTheme === "light" ? "dark" : "light"
        setTheme(newTheme)
        setCurrentTheme(newTheme)
    }

    return (
        <div onClick={toggleTheme} className="flex justify-between w-full items-center dark:text-zinc-400 text-zinc-600">
            Switch to {currentTheme === "light" ? "dark" : "light"} mode
            <DropdownMenuShortcut>
                {currentTheme === "light"
                    ? (<Moon className="w-3 h-3 " />)
                    : (<Sun className="w-3 h-3 " />)
                }
            </DropdownMenuShortcut>
        </div>
    )
}
