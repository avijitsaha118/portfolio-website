import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = ({ children }) => {


    const menuItems = <>
        <li><NavLink className='rounded-lg' to="/home">Home</NavLink></li>
        <li><NavLink className='rounded-lg' to="/skill">Skill</NavLink></li>
        <li><NavLink className='rounded-lg' to="/about">About Me</NavLink></li>
        <li><NavLink className='rounded-lg' to="/portfolio">Portfolio</NavLink></li>
        <li><NavLink className='rounded-lg' to="/blogs">Blogs</NavLink></li>
        <li><NavLink className='rounded-lg' to="/contact">Contact</NavLink></li>
        {/* <li><NavLink className='rounded-lg' to="/getit">Get It Now</NavLink></li> */}
        {/* <li class="dropdown dropdown-hover dropdown-end">
            <label tabIndex="0" class="btn btn-primary btn-outline m-1 rounded-lg">Hire Me</label>
            <ul tabIndex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                <li><a>Item 1</a></li>
                <li><a>Item 2</a></li>
            </ul>
        </li> */}

    </>
    return (
        <div class="drawer drawer-end">
            <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col">

                <div class="w-full navbar bg-base-100 px-20 sticky top-0 z-50">
                    <div class="flex-1 px-2 mx-2 text-2xl">
                        <NavLink to='/home'>Avijit Saha</NavLink>
                        </div>
                    <div class="flex-none lg:hidden">
                        <label for="my-drawer-3" class="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>

                    <div class="flex-none hidden lg:block">
                        <ul class="menu menu-horizontal">

                            {menuItems}
                        </ul>
                    </div>
                </div>

                {children}
            </div>
            <div class="drawer-side">
                <label for="my-drawer-3" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">

                    {menuItems}

                </ul>

            </div>
        </div>
    );
};

export default Header;