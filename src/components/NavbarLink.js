import React from 'react';
import { NavLink } from 'react-router-dom';

const NavbarLink = (props) => {
    return (
        <NavLink to={props.url} className={({ isActive }) => "nav-link" + (isActive ? "block py-2 pr-4 pl-3 text-black bg-rose-200 rounded md:bg-transparent md:p-0"
            : "block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-stone-500 md:p-0")}>
            {props.page}
        </NavLink>
    );
};

export default NavbarLink;