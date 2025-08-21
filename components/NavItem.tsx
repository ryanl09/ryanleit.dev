import React from 'react';
import Link from 'next/link';

export default function NavItem({ href=null, children, className='', selected=false }: {
    href: string|null;
    children: React.ReactNode;
    className?: string;
    selected: boolean;
}) {

    return (
        <div className={`h-full --text flex items-center font-medium text-white/80 hover:text-white ${className}`}>
            {href===null?(
                <div className='px-6 py-2 hover:cursor-default'>
                    {children}
                </div>
            ) : (
                <Link href={href} className='hover:bg-dg-200 px-6 py-2 flex items-center --bg rounded-md'>
                    <div className={`flex items-center gap-2 ${selected ? 'selected': ''}`}>
                        {children}
                    </div>
                </Link>
            )}
        </div>
    );
}