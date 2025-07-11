import { ArrowRightIcon } from "lucide-react";
import { Link, Outlet, useLocation } from "react-router-dom"

export const Navbar = ()=>{
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path;
    };

    return (
        <>
        <nav className="bg-slate backdrop-blur-3xl shadow-lg ">
            <div className="container px-4">
                <div className="flex justify-between items-center py-4">
                    <h1 className="text-2xl font-bold text-black-600">
                        To-do List
                    </h1>
                    <div className="flex gap-6">
                        <Link 
                            to="/" 
                            className={`px-4 py-2 rounded-lg text-blue-800 underline `}
                        >
                            All Tasks
                        </Link>
                        <Link 
                            to="/add" 
                            className={`px-4 py-2 flex gap-2 rounded-lg text-blue-800 underline `}
                        >
                             To Add a Task
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
        <Outlet/>
        </>
    )
}