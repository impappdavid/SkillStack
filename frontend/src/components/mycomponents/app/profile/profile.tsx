import { ArrowLeft, CalendarDays, Github, Globe, Linkedin, MapPin } from "lucide-react"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { Link } from "react-router-dom"
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { Button } from "@/components/ui/button";
import EditProfileModal from "./editProfileModal";
import ExploreCard from "../home/explore";
import ProblemsCard from "../home/problems";
import CodeSnippetCard from "../home/codeSnipets";

function Profiles() {
    const tags = ["React", "GitHub", "Git", "Docker", "SSMS"];

    return (
        <>
            <div className=" w-full max-w-2xl flex flex-col min-h-screen sm:border-x dark:border-zinc-800/80 relative">
                <div className="p-2 px-4 flex items-center gap-3 bg-zinc-200/20 dark:bg-zinc-950/80 backdrop-blur-2xl fixed top-0 w-full max-w-[670px] z-50">
                    <Link to="../home" className="py-2.5 px-2 hover:bg-zinc-200/80 dark:hover:bg-zinc-900/90 rounded-xl transition-all duration-300"><ArrowLeft className="w-5 h-4" /></Link>
                    <div className="text-lg font-semibold">Ethan Wong</div>
                </div>
                <div className="flex flex-col gap-4 h-full mt-13">
                    <div className="relative">
                        <div className="h-32 sm:h-40">
                            <FlickeringGrid
                                className="relative inset-0 z-0 [mask-image:radial-gradient(450px_circle_at_center,white,transparent)]"
                                squareSize={4}
                                gridGap={6}
                                color="#60A5FA"
                                maxOpacity={0.5}
                                flickerChance={0.1}
                                height={160}
                                width={800}
                            />
                        </div>
                        <div className="absolute px-6 -bottom-12">
                            <img src="/davee.jpg" alt="profile" className="w-24 h-24 z-50 rounded-full border-4 border-white dark:border-zinc-950 bg-zinc-950" />
                        </div>
                        <EditProfileModal />
                    </div>
                    <div className="flex flex-col mt-11 px-6">
                        <div className="flex justify-between">
                            <div className="text-xl font-semibold">Ethan Wong</div>
                            <div className="flex gap-3">
                                <Link to={''} target="_blank" className="flex gap-1 group cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" className="dark:stroke-zinc-400 stroke-zinc-600 dark:group-hover:stroke-white group-hover:stroke-black transition-all duration-300 ">
                                        <path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m13.081 10.712l-4.786-6.71a.6.6 0 0 0-.489-.252H5.28a.6.6 0 0 0-.488.948l6.127 8.59m2.162-2.576l6.127 8.59a.6.6 0 0 1-.488.948h-2.526a.6.6 0 0 1-.489-.252l-4.786-6.71m2.162-2.576l5.842-6.962m-8.004 9.538L5.077 20.25" />
                                    </svg>
                                </Link>
                                <Link to={''} target="_blank" className="flex gap-1 group cursor-pointer">
                                    <Linkedin className="h-4 w-4 dark:text-zinc-400 text-zinc-600 dark:group-hover:text-white group-hover:text-black transition-all duration-300" />
                                </Link>
                                <Link to={''} target="_blank" className="flex gap-1 group cursor-pointer">
                                    <Github className="h-4 w-4 dark:text-zinc-400 text-zinc-600 dark:group-hover:text-white group-hover:text-black transition-all duration-300" />
                                </Link>
                                <Link to={''} target="_blank" className="flex gap-1 group cursor-pointer">
                                    <Globe className="h-4 w-4 dark:text-zinc-400 text-zinc-600 dark:group-hover:text-white group-hover:text-black transition-all duration-300" />
                                </Link>
                            </div>
                        </div>
                        <div className="text-sm dark:text-zinc-400 text-zinc-600">@ethWong</div>
                    </div>

                    <div className="flex gap-4 px-6">
                        <div className="flex gap-1">
                            <MapPin className="w-4 h-4 dark:text-zinc-400 text-zinc-600" />
                            <div className="text-xs dark:text-zinc-400 text-zinc-600">USA, LA</div>
                        </div>
                        <div className="flex gap-1">
                            <CalendarDays className="w-4 h-4 dark:text-zinc-400 text-zinc-600" />
                            <div className="text-xs dark:text-zinc-400 text-zinc-600">Joined April 2025</div>
                        </div>
                    </div>
                    <div className="">
                        <Tabs defaultValue="posts" className="w-full ">
                            <TabsList className="grid grid-cols-3 w-full border-b bg-transparent rounded-none p-0 h-10">
                                <TabsTrigger value="posts" className="dark:data-[state=active]:border-sky-500/80  data-[state=active]:border-sky-500/80 text-sm dark:data-[state=active]:bg-sky-500/10 data-[state=active]:bg-sky-500/20 dark:hover:bg-zinc-800/60 hover:bg-zinc-200/80 transition-all duration-500 ">Posts</TabsTrigger>
                                <TabsTrigger value="replies" className="dark:data-[state=active]:border-sky-500/80 data-[state=active]:border-sky-500/80 text-sm dark:data-[state=active]:bg-sky-500/10 data-[state=active]:bg-sky-500/20 dark:hover:bg-zinc-800/60 hover:bg-zinc-200/80 transition-all duration-500">Replies</TabsTrigger>
                                <TabsTrigger value="likes" className="dark:data-[state=active]:border-sky-500/80 data-[state=active]:border-sky-500/80 text-sm dark:data-[state=active]:bg-sky-500/10 data-[state=active]:bg-sky-500/20 dark:hover:bg-zinc-800/60 hover:bg-zinc-200/80 transition-all duration-500">Likes</TabsTrigger>
                            </TabsList>
                            <TabsContent value="posts" className="min-h-96 max-h-full pb-16">
                                <ExploreCard />
                                <ProblemsCard />
                            </TabsContent>
                            <TabsContent value="replies" className="min-h-full h-full flex justify-center text-xl text-zinc-400 py-16">
                                No replies yet
                            </TabsContent>
                            <TabsContent value="likes" className="h-full">
                                <CodeSnippetCard />
                            </TabsContent>
                        </Tabs>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Profiles