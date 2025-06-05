import { Button } from "@/components/ui/button"
import { Heart, MousePointerClick, Share, FlagTriangleRight, X, CaseLower, ScanFace, MessageSquare, ChartNoAxesColumn, Bookmark, EllipsisVertical, Ellipsis, Flag } from "lucide-react"
import { useEffect, useState } from "react";
import { Link, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
function ProblemsCard() {
    const navigate = useNavigate();

    const [explorePosts, setExplorePosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    return (
        <>
            <div className="">
                <Link to={`/post`} className="flex flex-col w-full gap-2 p-4 transition-all duration-300 border-b hover:bg-zinc-900/20">
                    <div className="flex items-start justify-between">
                        <div className="flex items-start gap-3">
                            <ScanFace className="w-8 h-8" />
                            <div className="flex flex-col">
                                <div className="flex items-center gap-2">
                                    <div className="text-sm font-medium hover:underline" onClick={(e) => {
                                        e.preventDefault();    // Prevent anchor navigation
                                        e.stopPropagation();
                                        navigate(`/profile/`)
                                    }}>Papp Dávid</div>
                                    <div className="text-xs text-zinc-400"
                                    >@lenfear23</div>
                                    <div className="w-1 h-1 rounded-full bg-zinc-500"></div>
                                    <div className="text-xs text-zinc-400">2h</div>
                                </div>
                                <div className="text-md font-normal">How do i center a div?? :D</div>
                            </div>

                        </div>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <div className=" rounded-full hover:text-white text-zinc-400 transition-all duration-300" onClick={(e) => {
                                    e.preventDefault();    // Prevent anchor navigation
                                    e.stopPropagation();   // Stop event bubbling
                                }}>
                                    <EllipsisVertical className="w-4 h-4 " />
                                </div>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-40" align="end">
                                <DropdownMenuGroup>
                                    <DropdownMenuItem onClick={(e) => {
                                        e.preventDefault();    // Prevent anchor navigation
                                        e.stopPropagation();   // Stop event bubbling
                                    }}>
                                        Report Post
                                        <DropdownMenuShortcut><Flag className="w-4 h-4 text-red-500" /></DropdownMenuShortcut>
                                    </DropdownMenuItem>

                                </DropdownMenuGroup>

                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>

                    <div className="pl-10">
                        <div className=" rounded-lg ">
                            <SyntaxHighlighter
                                language="html"
                                style={vscDarkPlus}
                                customStyle={{
                                    margin: 0,
                                    padding: '1rem',
                                    borderRadius: '0.5rem',
                                    fontSize: '0.875rem',
                                    lineHeight: '1.5',
                                    maxHeight: '400px',
                                    background: '#18181b'
                                }}
                            >
                                {`<div className="">
    <img src="/test.png" alt="test image" />
</div>
`}
                            </SyntaxHighlighter>
                        </div>
                    </div>

                    <div className="z-40 flex pl-9">
                        <div className="flex gap-2 w-full items-center justify-between">
                            <div className="flex items-center group">
                                <Button onClick={(e) => {
                                    e.preventDefault();    // Prevent anchor navigation
                                    e.stopPropagation();   // Stop event bubbling
                                }} className="flex h-8 w-8 items-center bg-transparent rounded-full group  group-hover:bg-sky-500/10 cursor-pointer">
                                    <MessageSquare className={`text-zinc-400 transition-all duration-300 group-hover:text-sky-500
                                    }`} />

                                </Button>
                                <div className="text-xs text-zinc-400">13</div>
                            </div>
                            <div className="flex items-center group">
                                <Button onClick={(e) => {
                                    e.preventDefault();    // Prevent anchor navigation
                                    e.stopPropagation();   // Stop event bubbling
                                }} className="flex h-8 w-8 bg-transparent rounded-full group-hover:bg-rose-500/10">
                                    <Heart className={`text-rose-500 transition-all duration-300 ${1 ? "fill-rose-500" : "fill-none"
                                        }`} />

                                </Button>
                                <div className="text-xs text-zinc-400">13</div>
                            </div>

                            <div className="flex items-center group">
                                <Button onClick={(e) => {
                                    e.preventDefault();    // Prevent anchor navigation
                                    e.stopPropagation();   // Stop event bubbling
                                }} className="flex h-8 w-8 transition-all duration-300 bg-transparent rounded-full group-hover:bg-sky-500/10 text-zinc-400 hover:text-white">
                                    <ChartNoAxesColumn className={` transition-all duration-300 group-hover:text-sky-500`} />

                                </Button>
                                <div className="text-xs text-zinc-400">22k</div>
                            </div>

                            <div className="flex">
                                <Button onClick={(e) => {
                                    e.preventDefault();    // Prevent anchor navigation
                                    e.stopPropagation();   // Stop event bubbling
                                }} className="flex h-8 w-8 gap-1.5 transition-all duration-300 bg-transparent rounded-full hover:bg-sky-500/10 text-zinc-400 hover:text-white">
                                    <Bookmark className={` transition-all duration-300 `} />
                                </Button>
                                <Button onClick={(e) => {
                                    e.preventDefault();    // Prevent anchor navigation
                                    e.stopPropagation();   // Stop event bubbling
                                }} className="flex h-8 w-8 gap-1.5 transition-all duration-300 bg-transparent rounded-full hover:bg-sky-500/10 text-zinc-400 hover:text-white">
                                    <Share className={` transition-all duration-300 `} />
                                </Button>

                            </div>

                        </div>


                    </div>
                </Link>

            </div>
        </>
    )
}
export default ProblemsCard