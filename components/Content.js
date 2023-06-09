import React from 'react';
import Nav from './Nav';
import { Raleway } from 'next/font/google'

const raleway = Raleway({ subsets: ['latin'], weight:['400', '500', '600', '700', '800']});

export default function Content({children, padding, hiddenElement=true}) {
    return (
        <div className='h-screen'>
            <Nav />
            {hiddenElement && <div className='h-[60px]'></div>}

            <div className={padding?'px-6 md:px-80 py-6':''} style={{
                height: padding ? '' : 'calc(100% - 60px)'
            }}>
                {children}
            </div>
        </div>
    );
}