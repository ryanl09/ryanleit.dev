import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import Content from '@/components/Content';
import Socials from '@/components/Socials';
import { BiChevronDown} from 'react-icons/bi';
import Education from '@/components/sections/home/Education';
import SectionChess from '@/components/sections/home/SectionChess';
import SectionMusic from '@/components/sections/home/SectionMusic';

export default function Home() {

  return (
    <Content padding={false} hiddenElement={false}>
      <div className='w-full h-[1px]'></div>
      <div className='h-screen relative'>
        <div style={{
          backgroundImage: 'url(/img/test.jpg)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          filter: 'blur(4px) saturate(1.2)',
          opacity: '.2'
        }} className='absolute left-0 top-0 w-full h-screen z-[-1]'></div>

          <div className='flex flex-col gap-4 items-center justify-center h-full'>
            <div className="flex flex-col gap-4">
              <div className='flex justify-center items-center rounded-full'>
                <Image src='/img/self2.jpg' width='80' height='80' alt="Ryan" className='rounded-full avatar'/>
              </div>
              <div>
                <div className='grid grid-cols-1 text-2xl md:text-4xl font-semibold stack glowing text-[#ccc]'>
                  <span className="index-0">Ryan Leitenberger</span>
                  <span className="index-1">Ryan Leitenberger</span>
                  <span className="index-2">Ryan Leitenberger</span>
                </div>

                <div className='flex justify-center mt-8'>
                  <Socials />
                </div>
              </div>
            </div>
          </div>

      </div>


      <div className='md:py-20 px-2 md:px-8 relative'>
        <div className="flex flex-col gap-4 card-main p-4 md:p-10">
          <div className='w-full h-[1px]'></div>
          <div className='text-xl selected'>Education</div>
          <Education />
        </div>
      </div>

      <div className="md:pt-20 px-2 md:px-8">
        <div className='flex flex-col card-main p-4 md:p-10'>
          <div className='w-full h-[1px]'></div>
          <div className='text-xl selected'>Hobbies & Interests</div>
        </div>
      </div>

      <div className={`rounded-xl overflow-hidden mx-6 md:mx-[4.5rem]`}>
        <SectionChess />
      </div>

      <div className='grid grid-cols-12 gap-4 mx-6 md:mx-[4.5rem]'>
        <div className='rounded-xl overflow-hidden col-span-4'>
          <div></div>
        </div>
        <div className='rounded-xl overflow-hidden col-span-8'>
          
        </div>
      </div>
    </Content>
  )
}
