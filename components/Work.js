import React from 'react';
import { IoLocationSharp } from 'react-icons/io';

export default function Work({title, role, from, to=null, location}) {
    return (
        <div>
            <div className='flex items-center pt-2'>
                <h1 className='text-lg font-medium'>{title}</h1>
                {to === null && (
                    <span className='rounded-md px-2 bg-purple text-sm ml-auto'>Current</span>
                )}
            </div>
            <div>
                <p>{role}</p>
            </div>
            <div>
                <p className='text-white/70 text-sm'>{from} {to !== null && (<span> - {to}</span>)}</p>
            </div>
        </div>
    );
}