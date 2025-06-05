import { Bell, Bookmark, EllipsisVertical, Heart, House, Inbox, Medal, Megaphone, MessageSquareMore, ScanFace, Search, Send, SendHorizontal, Settings, StickyNote, User, Users } from "lucide-react"
import { Link, NavLink } from "react-router-dom";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useEffect, useState } from "react";

function Sidebar() {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    const [username, setUsername] = useState("")


    const notificationCount = 4;
    const baseClass = "flex gap-3 items-center w-fit lg:pr-4.5 py-2 px-2 lg:px-3.5 rounded-lg transition-all duration-300";
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
                                    ? `${baseClass} bg-zinc-900/80  text-white`
                                    : `${baseClass} text-zinc-400 hover:bg-zinc-900/80 hover:text-white`
                            }
                        ><House className="w-5 h-5" />
                            <div className="text-lg hidden lg:flex">Home</div>
                        </NavLink>

                        <NavLink
                            to="/challenges"
                            className={({ isActive }) =>
                                isActive
                                    ? `${baseClass} bg-zinc-900/80  text-white`
                                    : `${baseClass} text-zinc-400 hover:bg-zinc-900/80 hover:text-white`
                            }
                        ><Medal className="w-5 h-5" />
                            <div className="text-lg hidden lg:flex">Challanges</div>
                        </NavLink>

                        <NavLink
                            to="/messages"
                            className={({ isActive }) =>
                                isActive
                                    ? `${baseClass} bg-zinc-900/80  text-white`
                                    : `${baseClass} text-zinc-400 hover:bg-zinc-900/80 hover:text-white`
                            }
                        ><MessageSquareMore className="w-5 h-5" />
                            <div className="text-lg hidden lg:flex">Messages</div>
                        </NavLink>

                        <NavLink
                            to="/notifications"
                            className={({ isActive }) =>
                                isActive
                                    ? `${baseClass} bg-zinc-900/80 text-white`
                                    : `${baseClass} text-zinc-400 hover:bg-zinc-900/80 hover:text-white`
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
                                    ? `${baseClass} bg-zinc-900/80 text-white`
                                    : `${baseClass} text-zinc-400 hover:bg-zinc-900/80 hover:text-white`
                            }
                        ><Bookmark className="w-5 h-5" />
                            <div className="text-lg hidden lg:flex">Bookmarks</div>
                        </NavLink>

                        <NavLink
                            to="/settings"
                            className={({ isActive }) =>
                                isActive
                                    ? `${baseClass} bg-zinc-900/80 text-white`
                                    : `${baseClass} text-zinc-400 hover:bg-zinc-900/80 hover:text-white`
                            }
                        ><Settings className="w-5 h-5" />
                            <div className="text-lg hidden lg:flex">Settings</div>
                        </NavLink>
                        <NavLink
                            to={`/profile/${username}`}
                            className={({ isActive }) =>
                                isActive
                                    ? `${baseClass} bg-zinc-900/80 text-white`
                                    : `${baseClass} text-zinc-400 hover:bg-zinc-900/80 hover:text-white`
                            }
                        ><User className="w-5 h-5" />
                            <div className="text-lg hidden lg:flex">Your Profile</div>
                        </NavLink>
                        <Link to="/post" className="mt-3 mx-0.5 flex gap-1 items-center justify-center lg:w-full w-fit py-2 px-2 bg-sky-500 hover:bg-sky-600 text-black rounded-lg font-medium transition-all duration-300">
                            <SendHorizontal className="w-4 h-4 flex lg:hidden" />
                            <div className="text-lg hidden lg:flex">Post</div>
                        </Link>
                    </div>
                </div>
                <DropdownMenu >
                    <DropdownMenuTrigger asChild>
                        <div className="flex gap-2 p-2 px-2 items-center justify-between hover:bg-zinc-900/80 rounded-lg cursor-pointer transition-all duration-300">
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
                        <Link to="./signout">
                            <DropdownMenuItem className="cursor-pointer py-2 text-red-600" >

                                Log out

                            </DropdownMenuItem>
                        </Link>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </>
    )
}
export default Sidebar