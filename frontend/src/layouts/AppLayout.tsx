import { Outlet } from "react-router-dom"
import Sidebar from "@/components/mycomponents/app/sidebar/sidebar"
import Challanges from "@/components/mycomponents/app/challenges"

function AppLayout() {

    
    return (
        <>
            <div className="">

                <div className="w-full flex justify-center ">
                    <div className="max-w-6xl  w-full flex h-full min-h-screen justify-center xl:justify-between relative">
                        <div className="hidden md:flex">
                            <Sidebar />
                        </div>
                        <div className="md:w-18 lg:w-64 hidden md:flex"></div>
                        <Outlet />
                        <div className="w-64 hidden xl:flex"></div>
                        <div className="hidden xl:flex">
                            <div className="absolute right-0 bg-white">
                                <div className="w-54"></div>
                                <Challanges />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AppLayout