'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '../../../public/assets/logo.png';
import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';
import UserInfo from './userInfo';
import { motion, useScroll } from "framer-motion";
// import './nav.css'
const NavBar = () => {
  const pathName = usePathname();
  const sesseion = useSession()
  // console.log(sesseion?.data?.user);
  const { scrollYProgress } = useScroll();
  const navItems = [
    {
      url: '/',
      title: 'Home',
    },
    {
      url: '/about',
      title: 'About',
    },
    {
      url: '/services',
      title: 'Services',
    },
    {
      url: '/contect',
      title: 'Contect Us',
    },
  ];

  return (
    <>
     <motion.div
  className="progress-bar rounded-b-2xl mb-2 fixed bg-red-500  lg:top-[105px] top-[80px] h-2 z-50 left-0 right-0"
  style={{
    scaleX: scrollYProgress, 
    transformOrigin: '0%', 
  }}
/>

    <div className="navbar sticky top-0 z-50 bg-slate-300 px-10 mb-1 w-full">
      <div className="navbar-start">
        
      <Link href="/" className='lg:w-[100px] w-[70px]'>
          <Image src={logo} alt="Company Logo"  />
        </Link>
        {/* mobile view */}
        <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 md:hidden"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h7" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {navItems.map((item, index) => (
            <li key={index}>
              <Link href={item.url} className={pathName === item.url ? 'text-white bg-[#FF3811] !important' : ''}>
                {item.title}
              </Link>
            </li>
          ))}
      </ul>
    </div>
      </div>
      {/* pc view */}
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link href={item.url} className={pathName === item.url ? 'text-white bg-[#FF3811]' : ''}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
 
        {
          sesseion?.data?<UserInfo user={sesseion?.data?.user}></UserInfo>:<Link className="btn" href='/logIn'>Log In</Link>
          
        }
      </div>
    </div>
    </>
  );
};

export default NavBar;
