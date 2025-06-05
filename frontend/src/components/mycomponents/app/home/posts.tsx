'use client'
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { useEffect, useState } from 'react';
import ExploreCard from "./explore";
import ProblemsCard from "./problems";
import CodeSnippetCard from "./codeSnipets";


function Posts() {
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
            <div className=" w-full max-w-2xl flex flex-col sm:border-x border-zinc-800/80 relative">
                <Tabs defaultValue="explore" value={activeTab} onValueChange={handleTabChange} className="w-full border-zinc-800/80 relative ">
                    <div className="absolute top-0">
                        <TabsList className="flex justify-between w-full p-0 h-12 border-b rounded-none fixed  max-w-[670px] bg-zinc-950/60 backdrop-blur-2xl">
                            <TabsTrigger value="explore" className=" text-sm data-[state=active]:bg-sky-500/10 hover:bg-zinc-800/60 transition-all duration-500">Explore</TabsTrigger>
                            <TabsTrigger value="problems" className="text-sm data-[state=active]:bg-sky-500/10 hover:bg-zinc-800/60 transition-all duration-500">Problems</TabsTrigger>
                            <TabsTrigger value="codes" className="text-sm data-[state=active]:bg-sky-500/10 hover:bg-zinc-800/60 transition-all duration-500">Codes</TabsTrigger>
                        </TabsList>
                    </div>
                    <TabsContent value="explore" className="mt-12">
                        <ExploreCard />
                    </TabsContent>
                    <TabsContent value="problems" className="mt-12 h-full max-h-[600px]">
                        <ProblemsCard />
                    </TabsContent>
                    <TabsContent value="codes" className="mt-12 h-full max-h-[600px]">
                        <CodeSnippetCard />
                    </TabsContent>
                </Tabs>
            </div>
        </>
    )
}
export default Posts