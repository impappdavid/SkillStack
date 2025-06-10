
import { useEffect, useState } from "react";
import { ArrowLeft, Bell, BookmarkPlus, HeartPlus, Megaphone, MousePointerClick, Reply, ScanFace } from "lucide-react";
import { Link } from "react-router-dom";
function Notification() {
    const [activeTab, setActiveTab] = useState<string>('tab1');

    // Load from localStorage on mount
    useEffect(() => {
        const savedTab = localStorage.getItem('activeNotiTab');
        if (savedTab) {
            setActiveTab(savedTab);
        }
    }, []);

    // Save to localStorage on change
    const handleTabChange = (value: string) => {
        setActiveTab(value);
        localStorage.setItem('activeNotiTab', value);
    };
    return (
        <>
            <div className=" w-full max-w-2xl flex flex-col h-screen sm:border-x dark:border-zinc-800/80 relative">
                <div className="p-2 px-4 flex items-center justify-between gap-3 border-b bg-zinc-200/40 dark:bg-zinc-950/60 backdrop-blur-2xl fixed top-0 w-full max-w-[670px] z-50">
                    <div className="flex gap-3 items-center">
                        <Link to="../home" className="py-2.5 px-2 hover:bg-zinc-200/60 dark:hover:bg-zinc-900/90 rounded-xl transition-all duration-300"><ArrowLeft className="w-5 h-4" /></Link>
                        <div className="text-lg font-semibold">Notifications</div>
                    </div>

                </div>
                <div className="flex flex-col mt-13">
                    <div className="p-2 px-4 grid  grid-cols-12 hover:bg-zinc-200/40 dark:hover:bg-zinc-900/20 w-full border-b transition-all duration-300">
                        <div className="col-span-1">
                            <div className="p-2 bg-sky-500/20 w-fit border border-sky-500/20 rounded-md">
                                <Reply className="w-4 h-4 text-sky-500" />
                            </div>
                        </div>
                        <div className="col-span-11 flex flex-col gap-2 relative">
                            <div className="flex items-center gap-2">
                                <ScanFace className="w-8 h-8" />
                                <div className="flex flex-col">
                                    <div className="font-medium text-md">Ethan Wong</div>
                                    <div className="text-xs dark:text-zinc-400 text-zinc-600">@ethWong</div>
                                </div>
                            </div>
                            <div className="flex flex-col absolute right-0 top-1">
                                <div className="flex gap-2 items-center">
                                    <div className="text-xs dark:text-zinc-400 text-zinc-600">2h ago</div>
                                </div>

                            </div>
                            <div className="">
                                <div className="flex flex-col ">

                                    <div className="dark:text-zinc-300 text-sm flex gap-1">Ethan Wong replied to your <div className="hover:underline cursor-pointer text-sky-500">How to center a div??</div> post.</div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="p-2 px-4 grid grid-cols-12 hover:bg-zinc-200/40 dark:hover:bg-zinc-900/20 w-full border-b transition-all duration-300">
                        <div className="col-span-1">
                            <div className="p-2 bg-rose-500/20 w-fit rounded-md border border-rose-500/20">
                                <HeartPlus className="w-4 h-4 text-rose-500" />
                            </div>
                        </div>
                        <div className="col-span-11 flex flex-col gap-2 relative">
                            <div className="flex items-center gap-2">
                                <ScanFace className="w-8 h-8" />
                                <div className="flex flex-col">
                                    <div className="font-medium text-md">Ethan Wong</div>
                                    <div className="text-xs dark:text-zinc-400 text-zinc-600">@ethWong</div>
                                </div>
                            </div>
                            <div className="flex flex-col absolute right-0 top-1">
                                <div className="flex gap-2 items-center">
                                    <div className="text-xs dark:text-zinc-400 text-zinc-600">5h ago</div>
                                </div>

                            </div>
                            <div className="">
                                <div className="flex flex-col ">

                                    <div className="dark:text-zinc-300 text-sm flex gap-1">Ethan Wong liked your <div className="hover:underline cursor-pointer text-rose-500 px-0.5 ">How to center a div??</div> post.</div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="p-2 px-4 grid grid-cols-12 hover:bg-zinc-200/40 dark:hover:bg-zinc-900/20 w-full border-b transition-all duration-300">
                        <div className="col-span-1">
                            <div className="p-2 bg-violet-500/20 w-fit rounded-md border border-violet-500/20">
                                <BookmarkPlus className="w-4 h-4 text-violet-500" />
                            </div>
                        </div>
                        <div className="col-span-11 flex flex-col gap-2 relative">
                            <div className="flex items-center gap-2">
                                <ScanFace className="w-8 h-8" />
                                <div className="flex flex-col">
                                    <div className="font-medium text-md">Ethan Wong</div>
                                    <div className="text-xs dark:text-zinc-400 text-zinc-600">@ethWong</div>
                                </div>
                            </div>
                            <div className="flex flex-col absolute right-0 top-1">
                                <div className="flex gap-2 items-center">
                                    <div className="text-xs dark:text-zinc-400 text-zinc-600">8h ago</div>
                                </div>

                            </div>
                            <div className="">
                                <div className="flex flex-col ">

                                    <div className="dark:text-zinc-300 text-sm flex gap-1">Ethan Wong bookmarked your <div className="hover:underline cursor-pointer text-violet-500 px-0.5 ">How to center a div??</div> post.</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>





            </div >
        </>
    )
}
export default Notification