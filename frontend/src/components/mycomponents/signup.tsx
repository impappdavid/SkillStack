import { Mail, ScanFace, Lock, Eye, EyeOff, User, Tag, Github, ChevronRight, TriangleAlert, CircleAlert, CircleHelp, ChevronLeft, X } from "lucide-react"
import { Input } from "../ui/input"
import { useState } from "react"
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { Link } from "react-router-dom";
import { Separator } from "../ui/separator";

function SignUp() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showOtpInput, setShowOtpInput] = useState(false);
    const [isFormVisible, setIsFormVisible] = useState(true);

    const [staticError, setStaticError] = useState<string | null>(null);
    const [isErrorVisible, setIsErrorVisible] = useState(false);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);



    const handleSubmit = async (e: React.FormEvent) => {
        if (!email.includes('@')) {
            setStaticError('Invalid email. Try again')
            setTimeout(() => {
                setIsErrorVisible(true);
            }, 0);
            setLoading(false);
        } else if (email.length < 1 || password.length < 1 || username.length < 1) {
            setStaticError('Please enter your creadentials')
            setTimeout(() => {
                setIsErrorVisible(true);
            }, 0);
        } else {
            setIsFormVisible(false);
            setTimeout(() => {
                setShowOtpInput(true);
                setIsFormVisible(true);
            }, 300);
            e.preventDefault();
            setLoading(true);
            setError(null);
            removeStaticError();
        }
    }



    const removeStaticError = () => {
        setIsErrorVisible(false);
        setTimeout(() => {
            setStaticError(null);
        }, 300);
    }




    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }


    return (
        <>
            <div className="w-full h-screen sm:justify-center items-center flex flex-col gap-2 py-4 sm:py-0 transition-all">
                <div className={`rounded-4xl relative bg-zinc-900 sm:border border-zinc-800 drop-shadow-xl p-4 transition-all duration-500 ease-in-out overflow-hidden `}>
                    <div className="flex justify-between items-center">
                        <div className=" p-1.5 dark:hover:bg-zinc-800 rounded-lg transition-all duration-300 cursor-pointer">
                            <CircleHelp className="w-4.5 h-4.5" />
                        </div>
                        <h1 className="text-md py-1.5 font-medium">Sign Up To SkillStack</h1>
                        <Link to='../' className=" p-1.5 dark:hover:bg-zinc-800 rounded-lg transition-all duration-300 cursor-pointer" >
                            <X className="w-4.5 h-4.5" />
                        </Link>
                    </div>

                    {staticError && (
                        <div className={`absolute top-4 p-2 dark:bg-red-500/10 backdrop-blur-2xl border dark:border-red-500/20 rounded-xl w-84 flex justify-between items-center transition-all duration-300 ease-in-out transform ${isErrorVisible ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'}`}>
                            <div className="flex gap-2 items-center">
                                <div className="p-2 bg-red-500/20 rounded-md">
                                    <TriangleAlert className="text-red-400 w-5 h-5" />
                                </div>
                                <div className="text-sm">
                                    {staticError}
                                </div>
                            </div>
                            <div onClick={removeStaticError} className="p-1.5 hover:text-red-500 rounded-lg transition-all duration-300 cursor-pointer">
                                <X className="w-4.5 h-4.5" />
                            </div>
                        </div>
                    )}

                    <div className="relative">

                        <div className={`py-3 flex flex-col gap-2 w-full sm:w-84 shadow-xl transition-all duration-500 transform`}>
                            <Link to="/" className="p-2 px-3 pr-4 group flex gap-2 justify-between items-center h-12 rounded-xl hover:bg-zinc-200/80 dark:hover:bg-zinc-800/80 dark:bg-zinc-800/40 transition-all duration-300">
                                <div className="p-1  bg-zinc-950/40 border dark:border-zinc-800 rounded-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 48 48">
                                        <path fill="#ffc107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917" />
                                        <path fill="#ff3d00" d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691" />
                                        <path fill="#4caf50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.9 11.9 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44" />
                                        <path fill="#1976d2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917" />
                                    </svg>
                                </div>
                                <div className="text-sm text-zinc-600 dark:text-zinc-200 font-medium">Continue With Google</div>
                                <div className="opacity-0 w-8 flex justify-end group-hover:opacity-100 transition-all duration-300">
                                    <ChevronRight className="w-4 h-4" />
                                </div>
                            </Link>
                            <Link to="/" className="p-2 px-3 pr-4 group flex gap-2 justify-between items-center h-12 rounded-xl hover:bg-zinc-200/80 dark:hover:bg-zinc-800/80 dark:bg-zinc-800/40 transition-all duration-300">
                                <div className="p-1  bg-zinc-950/40 border dark:border-zinc-800 rounded-lg">
                                    <Github className="w-5 h-5" />
                                </div>
                                <div className="text-sm text-zinc-600 dark:text-zinc-200 font-medium">Continue With GitHub</div>
                                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300">
                                    <ChevronRight className="w-4 h-4" />
                                </div>
                            </Link>
                            <div className="flex items-center gap-2 w-full py-1">
                                <Separator className="flex-1" />
                                <span className="text-xs text-zinc-400 dark:text-zinc-600">OR</span>
                                <Separator className="flex-1" />
                            </div>
                            <form className="flex flex-col gap-2">
                                <div className="grid grid-cols-2 gap-2">
                                    <div className="flex flex-col gap-0.5">
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                <User className="h-4 w-4 text-zinc-500" />
                                            </div>
                                            <Input
                                                id="firstName"
                                                type="text"
                                                placeholder="First name"
                                                className="pl-10 h-12 rounded-xl bg-zinc-200/50 hover:bg-zinc-200/80 dark:bg-zinc-800/40 dark:hover:bg-zinc-800/80 dark:border-zinc-800 transition-all duration-300"
                                                value={firstName}
                                                onChange={(e) => setFirstName(e.target.value)}
                                                required
                                            />

                                        </div>

                                    </div>
                                    <div className="flex flex-col gap-0.5">
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                <User className="h-4 w-4 text-zinc-500" />
                                            </div>
                                            <Input
                                                id="lastName"
                                                type="text"
                                                placeholder="Last name"
                                                className="pl-10 h-12 rounded-xl bg-zinc-200/50 hover:bg-zinc-200/80 dark:bg-zinc-800/40 dark:hover:bg-zinc-800/80 dark:border-zinc-800 transition-all duration-300"
                                                value={lastName}
                                                onChange={(e) => setLastName(e.target.value)}
                                                required
                                            />

                                        </div>

                                    </div>
                                </div>
                                <div className="flex flex-col gap-0.5">
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <Tag className="h-4 w-4 text-zinc-500" />
                                        </div>
                                        <Input
                                            id="username"
                                            type="text"
                                            placeholder="Username"
                                            className="pl-10 h-12 rounded-xl bg-zinc-200/50 hover:bg-zinc-200/80 dark:bg-zinc-800/40 dark:hover:bg-zinc-800/80 dark:border-zinc-800 transition-all duration-300"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                            required
                                        />

                                    </div>

                                </div>
                                <div className="flex flex-col gap-0.5">
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <Mail className="h-4 w-4 text-zinc-500" />
                                        </div>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="Email"
                                            className="pl-10 h-12 rounded-xl bg-zinc-200/50 hover:bg-zinc-200/80 dark:bg-zinc-800/40 dark:hover:bg-zinc-800/80 dark:border-zinc-800 transition-all duration-300"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />

                                    </div>

                                </div>

                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <Lock className="h-4 w-4 text-gray-500" />
                                    </div>
                                    <Input
                                        id="password"
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Password"
                                        className="pl-10 pr-10 h-12 rounded-xl bg-zinc-200/50 hover:bg-zinc-200/80 dark:bg-zinc-800/40 dark:hover:bg-zinc-800/80 dark:border-zinc-800 transition-all duration-300"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                    <div className="pr-2">
                                        <Button
                                            type="button"
                                            variant="ghost"
                                            size="icon"
                                            className="absolute inset-y-1.5 pr-2 right-0 flex items-center justify-center hover:bg-transparent dark:hover:bg-transparent text-gray-500 hover:text-black dark:hover:text-white cursor-pointer"
                                            onClick={togglePasswordVisibility}
                                            aria-label={showPassword ? "Hide password" : "Show password"}
                                        >
                                            {showPassword ? <EyeOff className="h-4 w-4 " /> : <Eye className="h-4 w-4 " />}
                                        </Button>
                                    </div>
                                </div>
                                <div className="flex justify-between my-2 ">
                                    <div className="flex items-center space-x-1 ">
                                        <Checkbox id="terms" />
                                        <Label htmlFor="terms" className="text-xs text-zinc-600 dark:text-zinc-400 cursor-pointer font-medium">I agree to the Terms & Privacy</Label>
                                    </div>
                                </div>
                                <Button
                                    disabled={loading}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleSubmit(e); // still call the async logic
                                    }}
                                    className="rounded-xl h-12 bg-sky-500 hover:bg-sky-600 transition-all duration-300 cursor-pointer">
                                    {loading ? 'Creating Account... ' : 'Sign up'}
                                </Button>
                                <div className="flex justify-center w-full mt-2">
                                    <div className="text-xs text-zinc-600 dark:text-zinc-400">Already have an account? <Link to="./signin" className="text-sky-600 hover:underline">Sign In</Link></div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
export default SignUp