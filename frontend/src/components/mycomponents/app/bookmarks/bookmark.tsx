
import { useEffect, useState } from "react";
import { ArrowLeft, Bell, BookmarkPlus, HeartPlus, Megaphone, MousePointerClick, Reply, ScanFace } from "lucide-react";
import { Link } from "react-router-dom";
import ExploreCard from "../home/explore";
function Bookmark() {
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
                        <div className="text-lg font-semibold">Bookmarks</div>
                    </div>

                </div>
                <div className="flex flex-col mt-13">
                    <ExploreCard />
                </div>





            </div >
        </>
    )
}
export default Bookmark