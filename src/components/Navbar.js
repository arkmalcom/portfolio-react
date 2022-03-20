import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const handleCollapse = () => setIsCollapsed(!isCollapsed);

    return (
        <div>
            <div>
                <nav className="bg-red-300 border-gray-200 px-2 sm:px-4 py-2.5">
                    <div className="container flex flex-wrap justify-between items-center mx-auto">
                        <a href="/" className="flex items-center">
                            <span className="self-center font-press-start text-xl font-semibold whitespace-nowrap dark:text-white">Malcom Calivar</span>
                        </a>
                        <button data-target="#mobile-menu" type="button" onClick={handleCollapse} className="inline-flex items-center p-2 ml-3 text-sm text-black rounded-lg md:hidden" aria-controls="mobile-menu" aria-expanded={!isCollapsed ? true : false}>
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                            <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </button>
                        <div className={`${isCollapsed ? 'hidden' : ''} w-full md:block md:w-auto font-press-start`} id="mobile-menu">
                            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                                <NavLink exact to="/" activeClassName="block py-2 pr-4 pl-3 text-black bg-rose-200 rounded md:bg-transparent md:text-blue-700 md:p-0" className="text-gray-700">Home</NavLink>
                                <NavLink exact to="/login" activeClassName="block py-2 pr-4 pl-3 text-black bg-rose-200 rounded md:bg-transparent md:text-blue-700 md:p-0" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">About</NavLink>
                                <NavLink exact to="/create-post" activeClassName="block py-2 pr-4 pl-3 text-black bg-rose-200 rounded md:bg-transparent md:text-blue-700 md:p-0" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Blog</NavLink>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;