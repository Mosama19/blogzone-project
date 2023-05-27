import { useState } from "react"
import '../App.css'
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'
const NavBar = () => {
    const [isopen,setisOpen]=useState(false);
    function handleClick(){
        setisOpen(!isopen);
    }
    return (
        <div className="w-full h-16 bg-[#f9f9fa] box-border shadow-xl header">
            <nav className="flex h-16 justify-between items-center w-5/6 md:w-4/6 mx-auto">
                <div>
                    <h1>BlogZone</h1>
                </div>
                <div className="hidden md:block">
                    <ul className="flex justify-between items-center space-x-1 md:space-x-2 lg:space-x-8">
                        <li className="hover:underline cursor-pointer">Sign up</li>
                        <li className="hover:underline cursor-pointer">How to Save</li>
                        <li className="hover:underline cursor-pointer">Go Premium</li>
                        <li className="hover:underline cursor-pointer">Support</li>
                        <li className="bg-black text-white px-5 py-[1px] border-2 cursor-pointer hover:bg-white hover:text-black hover:border-black">Log in</li>
                    </ul>
                </div>
                <div className="md:hidden absolute right-10 top-4">
                    {!isopen ? <div className="cursor-pointer" onClick={handleClick}>
                                    <AiOutlineMenu size={25}/>
                                </div> : <div className="cursor-pointer" onClick={handleClick}>
                                    <AiOutlineClose size={25} />
                                </div>

                    }
                    {isopen ?  <div className="md:hidden">
                                    <section className="w-72 h-64 absolute top-12 -right-10 bg-[#f9f9fa] box-border shadow-xl">
                                        <nav className="list-none font-medium text-2xl pt-4 space-y-2">
                                            <li className="border-b-2 cursor-pointer hover:border-b-2 pb-2 pl-2 hover:shadow-xl">Sign up</li>
                                            <li className="border-b-2 cursor-pointer pb-2 pl-2 hover:shadow-xl">Home</li>
                                            <li className="border-b-2 cursor-pointer pb-2 pl-2 hover:shadow-xl">About</li>
                                            <li className="border-b-2 cursor-pointer pb-2 pl-2 hover:shadow-xl">Contact Us</li>
                                            <li className="border-b-2 cursor-pointer pb-2 pl-2 hover:shadow-xl">Login</li>
                                        </nav>
                                    </section>
                                </div>:<div></div>
                    }
                </div>
            </nav>
        </div>
    )
}
export default NavBar