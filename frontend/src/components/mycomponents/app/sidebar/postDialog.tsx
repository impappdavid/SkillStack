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

function PostDialog() {
    return (
        <>
            <Dialog>
                <form>
                    <DialogTrigger asChild>
                        <Button className="mt-3 mx-0.5 h-11 cursor-pointer flex gap-1 items-center justify-center lg:w-full w-fit py-2 px-2 bg-sky-500 hover:bg-sky-600 text-black rounded-lg font-medium transition-all duration-300">
                            <SendHorizontal className="w-4 h-4 flex lg:hidden" />
                            <div className="text-lg hidden lg:flex">Post</div>
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-xl bg-zinc-950">
                        <DialogHeader className="flex justify-between w-full h-4">
                            <div className="w-full flex justify-between items-center">
                                <DialogClose className="flex">
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="absolute top-3 left-3 rounded-full bg-black/50 hover:bg-black/70 text-white cursor-pointer"
                                    >
                                        <X className="h-4 w-4" />
                                    </Button>
                                </DialogClose>
                                <div
                                    className="absolute top-3 right-3  size-9 flex justify-center items-center rounded-full bg-sky-500/10 hover:bg-sky-500/20 text-white cursor-pointer"
                                >
                                    <ScanFace className="w-4 h-4" />
                                </div>
                            </div>
                        </DialogHeader>
                        <div className="grid gap-4 py-2">
                            <div className="grid gap-3">
                                <Input id="name-1" name="name" defaultValue="Pedro Duarte" />
                            </div>
                            <div className="grid gap-3">
                                <Input id="username-1" name="username" defaultValue="@peduarte" />
                            </div>
                        </div>

                    </DialogContent>
                </form>
            </Dialog>
        </>
    )
}
export default PostDialog