import React from 'react';
import { BiLinkExternal } from 'react-icons/bi';

export default function Project({title, href, tech=[], children}) {
    return (
        <div>
            <div className='flex items-center pt-2'>
                <h1 className='text-lg font-medium'>{title}</h1>
                {href !== null && (
                    <a target="blank" rel='noopener noreferrer' href={href} className='ml-auto'>
                        <span className='flex items-center gap-2 text-sm text-white/70'>
                            View
                            <BiLinkExternal />
                        </span>
                    </a>
                )}
            </div>
            <div className='flex flex-col gap-1 mt-1'>
                <p className='text-sm font-medium text-white/85'>DESCRIPTION</p>
                <p className='text-sm text-white/70'>{children}</p>
            </div>
            {tech.length > 0 && <div className='flex flex-col gap-1 mt-2'>
                <p className='text-sm font-medium text-white/85'>USES</p>
                <div className='flex gap-2'>
                    {tech.map(e => {
                        return (
                            <div key={`${title}-${e}`} className='text-sm font-medium px-2 rounded-sm bg-gr'>
                                {e}
                            </div>
                        );
                    })}
                </div>
            </div>}
        </div>
    );
}