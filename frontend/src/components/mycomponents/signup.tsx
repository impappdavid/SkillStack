import { Mail, ScanFace, Lock, Eye, EyeOff, User, Tag, Github } from "lucide-react"
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

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
    }

    return (
        <>
            <div className="w-full h-screen sm:justify-center items-center flex flex-col py-8 sm:py-0 gap-4">
                <div className="p-3 rounded-full bg-zinc-950 dark:bg-white">
                    <ScanFace className="w-7 h-7 text-white dark:text-black" />
                </div>
                <h1 className="text-xl">Sign up to SkillStack</h1>
                <div className="p-4 sm:py-6 sm:border rounded-xl flex flex-col gap-2 w-full sm:w-84 shadow-xl">
                    <Link to="/" className="border p-2 flex gap-2 justify-center items-center h-10 rounded-lg hover:bg-zinc-200/80 dark:hover:bg-zinc-900 transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 48 48">
                            <path fill="#ffc107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917" />
                            <path fill="#ff3d00" d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691" />
                            <path fill="#4caf50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.9 11.9 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44" />
                            <path fill="#1976d2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917" />
                        </svg>
                        <div className="text-sm text-zinc-600 dark:text-zinc-400">Continue with Google</div>
                    </Link>
                    <Link to="/" className="border p-2 flex gap-2 justify-center items-center h-10 rounded-lg hover:bg-zinc-200/80 dark:hover:bg-zinc-900 transition-all duration-300">
                        <Github className="w-4 h-4" />
                        <div className="text-sm text-zinc-600 dark:text-zinc-400">Continue with GitHub</div>
                    </Link>
                    <div className="flex items-center gap-2 w-full">
                        <Separator className="flex-1" />
                        <span className="text-xs text-zinc-400">OR</span>
                        <Separator className="flex-1" />
                    </div>
                    <form className="flex flex-col gap-2">
                        <div className="grid sm:grid-cols-2 gap-2">
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <User className="h-4 w-4 text-zinc-500" />
                                </div>
                                <Input
                                    id="firstName"
                                    type="text"
                                    placeholder="First name"
                                    className="pl-10 h-10 rounded-lg bg-zinc-200/50 hover:bg-zinc-200/80 dark:bg-zinc-900/10 dark:hover:bg-zinc-900/60 transition-all duration-300"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    required
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
                                    className="pl-10 h-10 rounded-lg bg-zinc-200/50 hover:bg-zinc-200/80 dark:bg-zinc-900/10 dark:hover:bg-zinc-900/60 transition-all duration-300"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <Tag className="h-4 w-4 text-zinc-500" />
                            </div>
                            <Input
                                id="username"
                                type="text"
                                placeholder="Enter your username"
                                className="pl-10 h-10 rounded-lg bg-zinc-200/50 hover:bg-zinc-200/80 dark:bg-zinc-900/10 dark:hover:bg-zinc-900/60 transition-all duration-300"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <Mail className="h-4 w-4 text-zinc-500" />
                            </div>
                            <Input
                                id="email"
                                type="email"
                                placeholder="Enter your email"
                                className="pl-10 h-10 rounded-lg bg-zinc-200/50 hover:bg-zinc-200/80 dark:bg-zinc-900/10 dark:hover:bg-zinc-900/60 transition-all duration-300"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <Lock className="h-4 w-4 text-gray-500" />
                            </div>
                            <Input
                                id="password"
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter your password"
                                className="pl-10 pr-10 h-10 rounded-lg bg-zinc-200/50 hover:bg-zinc-200/80 dark:bg-zinc-900/10 dark:hover:bg-zinc-900/60  transition-all duration-300"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <div className="pr-2">
                                <Button
                                    type="button"
                                    variant="ghost"
                                    size="icon"
                                    className="absolute inset-y-0.5 pr-2 right-0 flex items-center justify-center hover:bg-transparent text-gray-500 hover:text-black cursor-pointer"
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
                            className="rounded-lg h-10 bg-sky-500 hover:bg-sky-600 transition-all duration-300 cursor-pointer">
                            {loading ? 'Creating account...' : 'Sign Up'}
                        </Button>
                        <div className="flex justify-center w-full mt-2">
                            <div className="text-xs text-zinc-600 dark:text-zinc-400">Aleady have an account? <a href="./" className="text-sky-600">Sign In</a></div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default SignUp