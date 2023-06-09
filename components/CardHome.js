import React from 'react';

export default function HomeCard({title, icons, children, solidBg=false}){

    return (
        <div className={`p-3 rounded-md border border-gr ${solidBg ? 'bg-dg-100' : ''}`}>
            <div className='flex items-center'>
                <p className='font-medium'>{title}</p>
                <div className='flex items-center gap-1 ml-auto'>
                    {icons.map((E, index)=>{
                        return <E key={`${title}-${index}`} />
                    })}
                </div>
            </div>
            <div className='text-white/70'>
                {children}
            </div>
        </div>
    );
}