import { Button } from "@/components/ui/button"
import { ScanFace, SendHorizontal, X } from "lucide-react"
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
import { Input } from "@/components/ui/input"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { useEffect, useState } from "react"

function PostDialog() {
    const [activeTab, setActiveTab] = useState<string>('tab1');

    // Load from localStorage on mount
    useEffect(() => {
        const savedTab = localStorage.getItem('activeTab');
        if (savedTab) {
            setActiveTab(savedTab);
        }
    }, []);

    // Save to localStorage on change
    const handleTabChange = (value: string) => {
        setActiveTab(value);
        localStorage.setItem('activeTab', value);
    };
    return (
        <>
            <Dialog>
                <form>
                    <DialogTrigger asChild>
                        <Button className="mt-3 mx-0.5 h-11 cursor-pointer flex gap-1 items-center justify-center lg:w-full w-fit py-2 px-2 bg-sky-500 hover:bg-sky-600 text-black rounded-2xl font-medium transition-all duration-300">
                            <SendHorizontal className="w-4 h-4 flex lg:hidden" />
                            <div className="text-lg hidden lg:flex">Post</div>
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-xl bg-zinc-950">
                        <DialogHeader className="flex justify-between w-full h-4">
                            <Tabs defaultValue="explore" value={activeTab} onValueChange={handleTabChange} className="w-full relative absolute top-3 left-3">
                                <div className="absolute top-0">
                                    <TabsList className="flex justify-between w-fit p-0  h-9 rounded-none fixed  bg-zinc-950/60 backdrop-blur-2xl">
                                        <TabsTrigger value="explore" className=" text-sm data-[state=active]:bg-zinc-900 rounded-lg border data-[state=active]:border-zinc-800 w-fit hover:bg-zinc-800/60 transition-all duration-500">Explore</TabsTrigger>
                                        <TabsTrigger value="problems" className="text-sm data-[state=active]:bg-zinc-900 rounded-lg border data-[state=active]:border-zinc-800 w-fit hover:bg-zinc-800/60 transition-all duration-500">Problems</TabsTrigger>
                                        <TabsTrigger value="codes" className="text-sm data-[state=active]:bg-zinc-900 rounded-lg border data-[state=active]:border-zinc-800 w-fit hover:bg-zinc-800/60 transition-all duration-500">Codes</TabsTrigger>
                                    </TabsList>
                                </div>
                                <TabsContent value="explore" className="mt-12">
                                    asd
                                </TabsContent>
                                <TabsContent value="problems" className="mt-12 h-full max-h-[600px]">
                                    asd
                                </TabsContent>
                                <TabsContent value="codes" className="mt-12 h-full max-h-[600px]">
                                    asd
                                </TabsContent>
                            </Tabs>
                            <div className="w-full flex justify-between items-center">
                                <DialogClose className="flex">
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="absolute top-3 right-3 rounded-full bg-black/50 hover:bg-black/70 text-white cursor-pointer"
                                    >
                                        <X className="h-4 w-4" />
                                    </Button>
                                </DialogClose>

                            </div>
                        </DialogHeader>
                        

                    </DialogContent>
                </form>
            </Dialog>
        </>
    )
}
export default PostDialog