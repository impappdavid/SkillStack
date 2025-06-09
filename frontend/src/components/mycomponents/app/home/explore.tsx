import { Button } from "@/components/ui/button"
import { Heart, MousePointerClick, Share, FlagTriangleRight, X, CaseLower, ScanFace, MessageSquare, ChartNoAxesColumn, Bookmark, EllipsisVertical, Ellipsis, User, Flag } from "lucide-react"
import { useEffect, useState } from "react";
import { Link, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
function ExploreCard() {
    const navigate = useNavigate();

    const [explorePosts, setExplorePosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [modalStatus, setModalStatus] = useState(false)
    const [comment, setComment] = useState("")

    return (
        <>

            <div className="">
                <Link to={`/post`} className="flex flex-col w-full gap-2 p-4 transition-all duration-300 border-b hover:bg-zinc-200/80 dark:hover:bg-zinc-900/20">
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
                                    <div className="text-xs dark:text-zinc-400 text-zinc-600"
                                    >@lenfear23</div>
                                    <div className="w-1 h-1 rounded-full bg-zinc-500"></div>
                                    <div className="text-xs dark:text-zinc-400 text-zinc-600">2h</div>
                                </div>
                                <div className="text-md font-normal">Explore card</div>
                            </div>

                        </div>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <div className=" rounded-full dark:hover:text-white hover:text-black dark:text-zinc-400 text-zinc-600 transition-all duration-300" onClick={(e) => {
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

                    <div className="pl-10" onClick={(e) => {
                        e.preventDefault();    // Prevent anchor navigation
                        e.stopPropagation();
                        setModalStatus(!modalStatus)
                    }}>
                        <img src="/testimage.png" alt="asdasds" className="rounded-lg" />
                    </div>


                    <div className="z-40 flex pl-9">
                        <div className="flex gap-2 w-full items-center justify-between">
                            <Link to={`/`} className="flex items-center group">
                                <div className="flex justify-center h-8 w-8 items-center bg-transparent rounded-full group  group-hover:bg-sky-500/10 cursor-pointer">
                                    <MessageSquare className={`dark:text-zinc-400 text-zinc-600 w-4 h-4 transition-all duration-300 group-hover:text-sky-500
                                    }`} />

                                </div>
                                <div className="text-xs dark:text-zinc-400 text-zinc-600">13</div>
                            </Link>
                            <div className="flex items-center group" onClick={(e) => {
                                e.preventDefault();    // Prevent anchor navigation
                                e.stopPropagation();   // Stop event bubbling
                            }}>
                                <Button onClick={(e) => {
                                    e.preventDefault();    // Prevent anchor navigation
                                    e.stopPropagation();   // Stop event bubbling
                                }} className="flex h-8 w-8 bg-transparent rounded-full group-hover:bg-rose-500/10">
                                    <Heart className={`text-rose-500 transition-all duration-300 ${1 ? "fill-rose-500" : "fill-none"
                                        }`} />

                                </Button>
                                <div className="text-xs dark:text-zinc-400 text-zinc-600">13</div>
                            </div>

                            <div className="flex items-center group">
                                <Button onClick={(e) => {
                                    e.preventDefault();    // Prevent anchor navigation
                                    e.stopPropagation();   // Stop event bubbling
                                }} className="flex h-8 w-8 transition-all duration-300 bg-transparent rounded-full group-hover:bg-sky-500/10 text-zinc-400 hover:text-white">
                                    <ChartNoAxesColumn className={` transition-all duration-300 group-hover:text-sky-500 dark:text-zinc-400 text-zinc-600`} />

                                </Button>
                                <div className="text-xs dark:text-zinc-400 text-zinc-600">22k</div>
                            </div>

                            <div className="flex">
                                <Button onClick={(e) => {
                                    e.preventDefault();    // Prevent anchor navigation
                                    e.stopPropagation();   // Stop event bubbling
                                }} className="flex h-8 w-8 gap-1.5 transition-all duration-300 bg-transparent rounded-full hover:bg-sky-500/10 text-zinc-400 hover:text-white">
                                    <Bookmark className={` transition-all duration-300 dark:text-zinc-400 text-zinc-600`} />
                                </Button>
                                <Button onClick={(e) => {
                                    e.preventDefault();    // Prevent anchor navigation
                                    e.stopPropagation();   // Stop event bubbling
                                }} className="flex h-8 w-8 gap-1.5 transition-all duration-300 bg-transparent rounded-full hover:bg-sky-500/10 text-zinc-400 hover:text-white">
                                    <Share className={` transition-all duration-300 dark:text-zinc-400 text-zinc-600`} />
                                </Button>

                            </div>

                        </div>


                    </div>
                </Link>
                <Dialog open={modalStatus} onOpenChange={setModalStatus}>
                    <DialogContent className="w-full h-screen p-0 border-none backdrop-blur-xs grid grid-cols-12 gap-4">
                        <div className="relative col-span-10 px-16 flex items-center justify-center">
                            <img
                                src="/testimage.png"
                                alt="Post image"
                                className="w-full h-auto max-h-[90vh] object-contain"
                            />

                        </div>
                        <div className="bg-zinc-950 col-span-2 border-l w-full p-4 flex flex-col gap-2">
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

                                    </div>

                                </div>

                                <div className="py-1 rounded-full hover:text-white text-zinc-400 transition-all duration-300">
                                    <EllipsisVertical className="w-4 h-4 " />
                                </div>
                            </div>
                            <div className="text-md font-normal py-1">Explore card</div>
                            <Separator />
                            <div className="flex justify-between">
                                <div className="flex items-center group cursor-pointer">
                                    <Button onClick={(e) => {
                                        e.preventDefault();    // Prevent anchor navigation
                                        e.stopPropagation();   // Stop event bubbling
                                    }} className="flex h-8 w-8 items-center bg-transparent rounded-full group  group-hover:bg-sky-500/10 ">
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
                                        <Bookmark className={` transition-all duration-300 group-hover:text-sky-500`} />

                                    </Button>
                                    <div className="text-xs text-zinc-400">13</div>
                                </div>
                                <Button onClick={(e) => {
                                    e.preventDefault();    // Prevent anchor navigation
                                    e.stopPropagation();   // Stop event bubbling
                                }} className="flex h-8 w-8 gap-1.5 transition-all duration-300 bg-transparent rounded-full hover:bg-sky-500/10 text-zinc-400 hover:text-white">
                                    <Share className={` transition-all duration-300 `} />
                                </Button>
                            </div>
                            <Separator />
                            <form>
                                <div className="relative flex items-center">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <ScanFace className="h-4 w-4 text-white" />
                                    </div>
                                    <Input
                                        id="comment"
                                        type="text"
                                        placeholder="Post you comment"
                                        className="pl-10 h-10 rounded-lg bg-zinc-950 border-none focus-visible:ring-0  transition-all duration-300"
                                        value={comment}
                                        onChange={(e) => setComment(e.target.value)}
                                        required
                                    />
                                    <Button className="absolute right-0  flex items-center h-7 bg-sky-500 hover:bg-sky-600 cursor-pointer transition-all duration-300">Post</Button>
                                </div>
                            </form>
                            <Separator />
                            <div className="flex flex-col gap-4">
                                <div className="flex items-start justify-between border-b pb-2">
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
                                            <div className="text-md font-normal py-1">Explore card</div>

                                        </div>

                                    </div>

                                    <div className="py-1 rounded-full hover:text-white text-zinc-400 transition-all duration-300">
                                        <EllipsisVertical className="w-4 h-4 " />
                                    </div>
                                </div>
                                <div className="flex items-start justify-between border-b pb-2">
                                    <div className="flex items-start gap-3">
                                        <ScanFace className="w-8 h-8" />
                                        <div className="flex flex-col">
                                            <div className="flex items-center gap-2">
                                                <div className="text-sm font-medium hover:underline" onClick={(e) => {
                                                    e.preventDefault();    // Prevent anchor navigation
                                                    e.stopPropagation();
                                                    navigate(`/profile/`)
                                                }}>Makai Atilla</div>
                                                <div className="text-xs text-zinc-400"
                                                >@imgay05</div>
                                                <div className="w-1 h-1 rounded-full bg-zinc-500"></div>
                                                <div className="text-xs text-zinc-400">4h</div>
                                            </div>
                                            <div className="text-md font-normal py-1">I'm gay</div>

                                        </div>

                                    </div>

                                    <div className="py-1 rounded-full hover:text-white text-zinc-400 transition-all duration-300">
                                        <EllipsisVertical className="w-4 h-4 " />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Button
                            variant="ghost"
                            size="icon"
                            className="absolute top-2 left-2 rounded-full bg-black/50 hover:bg-black/70 text-white cursor-pointer"
                            onClick={() => setModalStatus(false)}
                        >
                            <X className="h-4 w-4" />
                        </Button>
                    </DialogContent>
                </Dialog>

            </div >

        </>
    )
}
export default ExploreCard