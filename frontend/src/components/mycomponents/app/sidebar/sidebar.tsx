import { Bell, Bookmark, EllipsisVertical, House, LogOut, Medal, MessageSquareMore, ScanFace, Settings, User, } from "lucide-react"
import { Link, NavLink } from "react-router-dom";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useState } from "react";
import PostDialog from "./postDialog";
import ModeToggle from "../../themes/mode-toggle";

function Sidebar() {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    const [username, setUsername] = useState("ethWong")


    const notificationCount = 4;
    const baseClass = "flex gap-3 items-center w-fit lg:pr-4.5 py-2 px-2 lg:px-3.5 rounded-2xl transition-all duration-300";
    return (
        <>
            <div className="flex flex-col justify-between fixed top-0  w-fit lg:w-56 h-screen pb-3">
                <div className="p-4 py-4 px-2 flex  flex-col gap-4  ">
                    <div className="p-2 mx-1 rounded-full bg-zinc-950 dark:bg-white w-fit">
                        <ScanFace className="w-6 h-6 text-white dark:text-black" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <NavLink
                            to="/home"
                            className={({ isActive }) =>
                                isActive
                                    ? `${baseClass} dark:bg-zinc-900/80 bg-zinc-200 dark:text-white`
                                    : `${baseClass} text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-900/80 dark:hover:text-white hover:text-black`
                            }
                        ><House className="w-5 h-5" />
                            <div className="text-lg hidden lg:flex">Home</div>
                        </NavLink>

                        <NavLink
                            to="/notifications"
                            className={({ isActive }) =>
                                isActive
                                    ? `${baseClass} dark:bg-zinc-900/80 bg-zinc-200 dark:text-white`
                                    : `${baseClass} text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-900/80 dark:hover:text-white hover:text-black`
                            }
                        >
                            <div className="relative">
                                <Bell className="w-5 h-5" />
                                {notificationCount > 0 && (
                                    <span className="absolute -top-2 -right-1.5 flex items-center justify-center px-1.5 py-0.5 text-[10px] font-medium text-center text-black bg-sky-500 rounded-full">
                                        {notificationCount}
                                    </span>
                                )}
                            </div>
                            <div className="text-lg hidden lg:flex">Notifications</div>
                        </NavLink>

                        <NavLink
                            to="/bookmarks"
                            className={({ isActive }) =>
                                isActive
                                    ? `${baseClass} dark:bg-zinc-900/80 bg-zinc-200 dark:text-white`
                                    : `${baseClass} text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-900/80 dark:hover:text-white hover:text-black`
                            }
                        ><Bookmark className="w-5 h-5" />
                            <div className="text-lg hidden lg:flex">Bookmarks</div>
                        </NavLink>

                        <NavLink
                            to="/settings"
                            className={({ isActive }) =>
                                isActive
                                    ? `${baseClass} dark:bg-zinc-900/80 bg-zinc-200 dark:text-white`
                                    : `${baseClass} text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-900/80 dark:hover:text-white hover:text-black`
                            }
                        ><Settings className="w-5 h-5" />
                            <div className="text-lg hidden lg:flex">Settings</div>
                        </NavLink>
                        <NavLink
                            to={`/profile/${username}`}
                            className={({ isActive }) =>
                                isActive
                                    ? `${baseClass} dark:bg-zinc-900/80 bg-zinc-200 dark:text-white`
                                    : `${baseClass} text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-900/80 dark:hover:text-white hover:text-black`
                            }
                        ><User className="w-5 h-5" />
                            <div className="text-lg hidden lg:flex">Your Profile</div>
                        </NavLink>
                        <PostDialog />
                    </div>
                </div>
                <DropdownMenu >
                    <DropdownMenuTrigger asChild className="bg-transparent">

                        <div className="flex gap-2 p-2 px-2 items-center justify-between dark:hover:bg-zinc-900/80 hover:bg-zinc-300 rounded-2xl cursor-pointer transition-all duration-100">
                            <div className="flex gap-2 items-center">
                                <div className="">
                                    <ScanFace className="w-7 h-7" />
                                </div>
                                <div className=" flex-col hidden lg:flex">
                                    <div className="text-xs">Papp Dávid</div>
                                    <div className="text-xs text-zinc-400">@{username}</div>
                                </div>
                            </div>
                            <div className="pr-1 hidden lg:flex">
                                <EllipsisVertical className="w-4 h-4" />
                            </div>
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                        <DropdownMenuItem className="cursor-pointer py-2 hover:bg-zinc-200 dark:hover:bg-zinc-900/80" >
                            <ModeToggle />
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <Link to="./signout">
                            <DropdownMenuItem className="cursor-pointer py-2 text-red-400 hover:bg-red-500/20" >
                                Log out
                                <DropdownMenuShortcut><LogOut className="w-3 h-3 text-red-400" /></DropdownMenuShortcut>
                            </DropdownMenuItem>
                        </Link>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </>
    )
}
export default Sidebar