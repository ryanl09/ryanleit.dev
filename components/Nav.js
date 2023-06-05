import React from 'react';
import NavItem from '@/components/NavItem';
import { BiCodeAlt } from 'react-icons/bi';
import { IoMdBriefcase } from 'react-icons/io';
import { TiHome } from 'react-icons/ti';
import { HiOutlineMail } from 'react-icons/hi';
import { useRouter } from 'next/router';

export default function Nav() {
    const router = useRouter();
    const path = router.asPath.substring(1);

    return (
        <div className='h-[60px] flex items-center overflow-hidden shadow-nav p-2 fixed top-0 w-full bg-dg-100 z-50'>
            <NavItem href="https://github.com/ryanl09/ryanleit.dev" target="_blank">
                <div className='flex items-center gap-2 glowing'>
                    <BiCodeAlt />
                    <span>ryanleit.dev</span>
                </div>
            </NavItem>
            <NavItem href="/" className='ml-auto' selected={path===''}>
                <TiHome />
                <span className='hidden md:inline-block'>Home</span>
            </NavItem>
            <NavItem href="/experience" selected={path==='experience'}>
                <IoMdBriefcase />
                <span className='hidden md:inline-block'>Experience</span>
            </NavItem>
            <NavItem href="/contact" selected={path==='contact'}>
                <HiOutlineMail />
                <span className='hidden md:inline-block'>Contact</span>
            </NavItem>
        </div>
    );
}