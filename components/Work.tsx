import { WorkProject } from '@/global/types';
import React from 'react';

export default function Work({ title, role, from, location, to, projects, children }: {
    title: string;
    role: string;
    from: string;
    location: string;
    to?: string;
    projects?: WorkProject[];
    children?: React.ReactNode;
}) {
    return (
        <div>
            <div className='flex items-center pt-2'>
                <h1 className='text-lg font-medium'>{title}</h1>
                {!to && (
                    <span className='rounded-md px-2 bg-purple text-sm ml-auto'>Current</span>
                )}
            </div>
            <div>
                <p>{role}</p>
            </div>
            <div>
                <p className='text-white/70 text-sm'>{from} {!!to && (<span> - {to}</span>)}</p>
            </div>
        </div>
    );
}