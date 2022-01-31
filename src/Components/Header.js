import React from "react";
import Login from "../Pages/Login";
import { Link } from "react-router-dom";
import Register from "../Pages/Register";


function Header(){
    
return(
    <div className="header-2">
        <nav className="bg-indigo-500 py-2 md:py-4">
            <div className="container px-4 mx-auto md:flex md:items-center">

                <div className="flex justify-between items-center">
                    <button className="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden" id="navbar-toggle">
                        <i className="fas fa-bars"></i>
                    </button>
                </div>

                <div className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0" id="navbar-collapse">

                    <a href="#" className="p-2 text-neutral-50 lg:px-4 md:mx-2  rounded hover:bg-gray-200 hover:text-red-700 "><Link  to={`/login`} component={Login} >Login</Link></a>
                    <a href="#" className="p-2 text-neutral-50 lg:px-4 md:mx-2  rounded hover:bg-gray-200 hover:text-red-700 "><Link  to={`/register`} component={Register} >Register</Link></a>

                    
                </div>
            </div>
        </nav>
    </div>
);
}
export default Header;