import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ArrowUpRight, Heart, MoveRight } from "lucide-react"

function Challanges() {
    return (
        <>
            <div className="px-0 py-4 w-64 h-screen hidden sm:flex flex-col gap-4 fixed top-2 ">
                <div className="p-3 border rounded-2xl dark:bg-zinc-900/20 bg-zinc-100 flex flex-col gap-2">
                    <div className="text-lg font-medium">Active problems</div>
                    <Separator />
                    <div className="flex flex-col gap-1">
                        <div className="px-3 py-2 flex justify-between items-center rounded-xl cursor-pointer dark:hover:bg-zinc-800/40 hover:bg-zinc-200 transition-all duration-300">
                            <div className="text-sm">How to center a div</div>
                            <div className="">
                                <ArrowUpRight className="w-4 h-4" />
                            </div>
                        </div>

                        <div className="px-3 py-2 flex justify-between items-center rounded-xl cursor-pointer dark:hover:bg-zinc-800/40 hover:bg-zinc-200 transition-all duration-300">
                            <div className="text-sm">How to send an error</div>
                            <div className="">
                                <ArrowUpRight className="w-4 h-4" />
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}
export default Challanges