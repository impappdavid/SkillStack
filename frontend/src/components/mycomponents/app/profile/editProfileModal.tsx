import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { X, Image, Upload, Mail, User, Linkedin, Globe, Github, Pin } from "lucide-react"
import { useState } from "react"

function EditProfileModal() {
    const [isOpen, setIsOpen] = useState(false)
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [github, setGithub] = useState("")
    const [linkedin, setLinkedIn] = useState("")
    const [x, setX] = useState("")
    const [website, setWebsite] = useState("")
    const [location, setLocation] = useState("")
    const [selectedFile, setSelectedFile] = useState<File | null>(null)
    const [previewUrl, setPreviewUrl] = useState<string | null>(null)

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            setSelectedFile(file)
            const url = URL.createObjectURL(file)
            setPreviewUrl(url)
        }
    }

    return (
        <>
            <Dialog open={isOpen}>
                <form>
                    <DialogTrigger asChild>
                        <Button onClick={() => setIsOpen(!isOpen)} className=" bg-transparent hover:bg-zinc-200/80 dark:hover:bg-zinc-900 text-zinc-600 dark:text-zinc-400 dark:hover:text-zinc-300 hover:text-black border dark:border-zinc-800 rounded-xl absolute right-6 -bottom-11 transition-all duration-300 cursor-pointer">
                            Edit profile
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-xl bg-zinc-950/80 backdrop-blur-xl dark:border-zinc-900 rounded-4xl">
                        <DialogHeader>
                            <div className="absolute top-0 left-0 w-full p-3 flex items-center">
                                <div className="w-16">
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="rounded-full  bg-zinc-900/40 hover:bg-black/70 text-white cursor-pointer"
                                        onClick={() => setIsOpen(!isOpen)}
                                    >
                                        <X className="h-4 w-4" />
                                    </Button>
                                </div>

                                <div className="flex-1 flex justify-center">
                                    <DialogTitle>
                                        <div>Edit Profile</div>
                                    </DialogTitle>
                                </div>

                                <Button className="bg-sky-500/20 w-16 hover:bg-zinc-200/80 dark:hover:bg-sky-500/30 text-zinc-600 dark:text-sky-500 dark:hover:text-sky-500 hover:text-black border dark:border-sky-500/40 rounded-xl transition-all duration-300 cursor-pointer">
                                    Save
                                </Button>
                            </div>
                        </DialogHeader>
                        <div className="flex flex-col gap-4 mt-10">
                            <div className="flex items-center justify-center gap-4">
                                <div className="relative">
                                    <div className="w-22 h-22 rounded-full overflow-hidden border-2 border-zinc-800 bg-zinc-900/40 flex items-center justify-center">
                                        {previewUrl ? (
                                            <img src={previewUrl} alt="Profile preview" className="w-full h-full object-cover" />
                                        ) : (
                                            <Image className="w-12 h-12 text-zinc-600" />
                                        )}
                                    </div>
                                    <label
                                        htmlFor="profile-picture"
                                        className="absolute bottom-0 right-0 p-2 bg-sky-500 rounded-full cursor-pointer hover:bg-sky-600 transition-colors"
                                    >
                                        <Upload className="w-3 h-3 text-white" />
                                    </label>
                                    <Input
                                        id="profile-picture"
                                        type="file"
                                        accept="image/*"
                                        className="hidden"
                                        onChange={handleFileChange}
                                        
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <User className="h-4 w-4 text-zinc-500" />
                                    </div>
                                    <Input
                                        id="firstName"
                                        type="text"
                                        placeholder="First name"
                                        className="h-12 text-sm transition-all duration-500 sm:text-md pl-10 rounded-xl bg-zinc-800/20 border-zinc-800/20 hover:border-zinc-800 hover:bg-zinc-800/60"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        required
                                        autoComplete="off"
                                    />

                                </div>

                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <User className="h-4 w-4 text-zinc-500" />
                                    </div>
                                    <Input
                                        id="lastName"
                                        type="text"
                                        placeholder="Last name"
                                        className="h-12 text-sm transition-all duration-500 sm:text-md pl-10 rounded-xl bg-zinc-800/20 border-zinc-800/20 hover:border-zinc-800 hover:bg-zinc-800/60"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                        required
                                        autoComplete="off"
                                    />

                                </div>

                            </div>
                            <div className="">
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <Pin className="h-4 w-4 text-zinc-500" />
                                    </div>
                                    <Input
                                        id="location"
                                        type="text"
                                        placeholder="Location"
                                        className="h-12 text-sm transition-all duration-500 sm:text-md pl-10 rounded-xl bg-zinc-800/20 border-zinc-800/20 hover:border-zinc-800 hover:bg-zinc-800/60"
                                        value={location}
                                        onChange={(e) => setLocation(e.target.value)}
                                        required
                                        autoComplete="off"
                                    />

                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                                <div className="relative w-full">
                                    <div className="absolute inset-y-0 left-0 flex items-center gap-2 pl-3 pointer-events-none">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                                            <path fill="none" stroke="#a1a1aa" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m13.081 10.712l-4.786-6.71a.6.6 0 0 0-.489-.252H5.28a.6.6 0 0 0-.488.948l6.127 8.59m2.162-2.576l6.127 8.59a.6.6 0 0 1-.488.948h-2.526a.6.6 0 0 1-.489-.252l-4.786-6.71m2.162-2.576l5.842-6.962m-8.004 9.538L5.077 20.25" />
                                        </svg>
                                        <div className="text-sm text-zinc-400">x.com/</div>
                                    </div>

                                    <Input
                                        type="text"
                                        placeholder="username"
                                        className="h-12 text-sm transition-all duration-500 sm:text-md pl-20 rounded-xl bg-zinc-800/20 border-zinc-800/20 hover:border-zinc-800 hover:bg-zinc-800/60"
                                        value={x}
                                        onChange={(e) => setX(e.target.value)}
                                        autoComplete="off"
                                    />
                                </div>
                                <div className="relative w-full">
                                    <div className="absolute inset-y-0 left-0 flex items-center gap-2 pl-3 pointer-events-none">
                                        <Linkedin className="w-4 h-4 text-zinc-500" />

                                        <div className="text-sm text-zinc-400">linkedin.com/in/</div>
                                    </div>

                                    <Input
                                        type="text"
                                        placeholder="username"
                                        className="text-sm sm:text-md pl-34.5 h-12 rounded-xl bg-zinc-800/20 border-zinc-800/20 hover:border-zinc-800 hover:bg-zinc-800/60 transition-all duration-500"
                                        value={linkedin}
                                        onChange={(e) => setLinkedIn(e.target.value)}
                                        autoComplete="off"
                                    />
                                </div>
                                <div className="relative w-full">
                                    <div className="absolute inset-y-0 left-0 flex items-center gap-2 pl-3 pointer-events-none">
                                        <Github className="w-4 h-4 text-zinc-500" />

                                        <div className="text-sm text-zinc-400">github.com/</div>
                                    </div>

                                    <Input
                                        type="text"
                                        placeholder="username"
                                        className="text-sm sm:text-md pl-28.5 h-12 rounded-xl bg-zinc-800/20 border-zinc-800/20 hover:border-zinc-800 hover:bg-zinc-800/60 transition-all duration-500"
                                        value={github}
                                        onChange={(e) => setGithub(e.target.value)}
                                        autoComplete="off"
                                    />
                                </div>

                                <div className="relative w-full">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <Globe className="w-4 h-4 text-zinc-500" />
                                    </div>
                                    <Input
                                        type="text"
                                        placeholder="Link your website"
                                        className="h-12 pl-10 text-sm transition-all duration-500 sm:text-md rounded-xl bg-zinc-800/20 border-zinc-800/20 hover:border-zinc-800 hover:bg-zinc-800/60"
                                        value={website}
                                        onChange={(e) => setWebsite(e.target.value)}
                                        autoComplete="off"
                                    />
                                </div>
                            </div>
                        </div>
                        <DialogFooter>
                        </DialogFooter>
                    </DialogContent>
                </form>
            </Dialog>
        </>
    )
}
export default EditProfileModal