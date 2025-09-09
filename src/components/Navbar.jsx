import { useState } from "react"
import { MdOutlineMenu } from "react-icons/md";
import { MdOutlineClose } from "react-icons/md";
import { MdHomeWork } from "react-icons/md";

export default function Nav(){
    const [menu , setmenu] = useState(true)
    return(
        <>
            {/* --------- lg screen ------------ */}
            <nav className="hidden w-full h-[70px] bg-white shadow-md lg:flex">
                <div className="w-[30%]  h-full ">
                    <img src="public/logo/logo.png" alt="" className="h-full object-cover" />
                </div>
                <div className="w-[70%] h-full flex items-center justify-end">
                    <ul className="w-[60%] flex  justify-evenly font-medium text-xl">
                        <li className="cursor-pointer hover:text-blue-600 duration-100"><MdHomeWork /></li>
                        <li className="cursor-pointer hover:text-blue-600 duration-100">House</li>
                        <li className="cursor-pointer hover:text-blue-600 duration-100">Room</li>
                        <li className="cursor-pointer hover:text-blue-600 duration-100">About</li>
                        <li className="cursor-pointer hover:text-blue-600 duration-100">Contact</li>
                    </ul>
                </div>
            </nav>

            {/* --------- md screen -------------- */}
            <div className="lg:hidden w-full h-[60px] flex">
                <div className="w-[50%] h-full">
                     <img src="public/logo/logo.png" alt="" className="h-full object-cover" />
                </div>
                <div className="w-[50%] h-full flex items-center justify-end px-5">
                    <h1 className="text-3xl" onClick={()=>setmenu(!menu)}>
                        {menu ? <MdOutlineMenu /> : <MdOutlineClose />}
                    </h1>
                </div>

                {/* ------ slide left --------- */}
                <div className={`w-[50%] h-[100vh] bg-white shadow-md fixed top-0 left-0 transition-all duration-200 z-50 ${menu ? '-translate-x-full' : 'translate-x-0'}`} >
                    <ul className="w-full font-medium text-xl pl-4 pt-5 space-y-4">
                        <li className="cursor-pointer hover:text-blue-600 duration-100"><MdHomeWork /></li>
                        <li className="cursor-pointer hover:text-blue-600 duration-100">House</li>
                        <li className="cursor-pointer hover:text-blue-600 duration-100">Room</li>
                        <li className="cursor-pointer hover:text-blue-600 duration-100">About</li>
                        <li className="cursor-pointer hover:text-blue-600 duration-100">Contact</li>
                    </ul>
                </div>
                

                {/* ------ slide right --------- */}
                <div className={`w-[50%] h-[100vh]  fixed top-0 z-50 right-0 ${menu ? 'translate-x-full' : '-translate-x-0'}` }  onClick={()=>setmenu(!menu)}>

                </div>
            </div>
        </>
    )
}