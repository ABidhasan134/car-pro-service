'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '../../../public/assets/logo.svg';
import { usePathname } from 'next/navigation';

const NavBar = () => {
  const pathName = usePathname();
  console.log(pathName);
  
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
      url: '/contact',
      title: 'Contact Us',
    },
  ];

  return (
    <div className="navbar bg-slate-300">
      <div className="navbar-start">
        <div className="dropdown">
          <div  aria-label="Menu" className=" lg:hidden">
            <Link href="/">
              <Image src={logo} alt="Logo" />
            </Link>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navItems.map((item, index) => (
              <li key={index}>
                <Link href={item.url} className={pathName === item?.url ? 'text-red-600 underline underline-offset-8 underline-bg-red-500' : ''}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Link href="/">
          <Image src={logo} alt="Company Logo" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link href={item.url} className={pathName === item.url ? 'text-red-600' : ''}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default NavBar;
