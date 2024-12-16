'use client'
import React from 'react'
import NavBar from './navBar'
import { usePathname } from 'next/navigation';

const HidenHeader = () => {
    const pathname = usePathname();
    const hideHeaderPaths = ['/admin', '/admin/', '/userDeshborad', '/user-dashboard/'];
    const hideHeader = hideHeaderPaths.some((path) => pathname.startsWith(path));

    return (
        <>
            {!hideHeader && <NavBar />}
        </>
    );
}

export default HidenHeader
