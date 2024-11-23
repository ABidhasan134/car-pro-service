import React from 'react'
import logo from '../../../public/assets/logo.png';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="footer bg-[rgb(203,213,225)] text-base-content justify-center md:justify-evenly p-10">
  <aside>
    <Link href="/" className='lg:w-[100px] w-[70px]'>
    <Image src={logo} className='lg:w-[100px] w-[70px]'></Image>
    </Link>
    <p>
      ACME Industries Ltd.
      <br />
      Providing reliable tech since 1992
    </p>
  </aside>
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
  )
}

export default Footer
