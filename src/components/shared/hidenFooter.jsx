'use client'
import { usePathname } from 'next/navigation';
import React from 'react'
import Footer from './footer';

const HidenFooter = () => {
    const pathname = usePathname();
    // console.log(pathname)
    const hideHeaderPaths = ['/admin', '/admin/', '/userDeshborad', '/user-dashboard/'];
    const hideHeader = hideHeaderPaths.some((path) => pathname.startsWith(path));

    return (
        <>
            {!hideHeader && <Footer />}
        </>
        )
}

export default HidenFooter
