import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import Content from '@/components/Content';
import Socials from '@/components/Socials';
import { BiChevronDown} from 'react-icons/bi';
import Education from '@/components/sections/home/Education';

export default function Home() {

  const [scrollTop, setScrollTop] = useState<boolean>(false);

  const top = useRef<HTMLDivElement|null>(null);
  const bottom = useRef<HTMLDivElement|null>();

  function doScroll() {
    if (scrollTop){
      top.current?.scrollIntoView({ behavior: 'smooth' });
      setScrollTop(false);
    } else {
      bottom.current?.scrollIntoView({ behavior: "smooth" });
      setScrollTop(true);
    }
  }

  const handleScroll = () => {
    const scrollTo = document.body.scrollTop;
    const height = document.body.scrollHeight - document.body.clientHeight;
    if (scrollTo < height/2){
      setScrollTop(false);
      return;
    } 

    setScrollTop(true);
  };

  useEffect(() => {
      document.body.addEventListener('scroll', handleScroll, { passive: true });

      return () => {
          document.body.removeEventListener('scroll', handleScroll);
      };
  }, []);

  return (
    <Content padding={false} hiddenElement={false}>
      <div className='grid h-[200vh]'>
        
        <div className='w-full h-[1px]' ref={top}></div>
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

              <div className='bottom-0 right-0 fixed p-4 z-[9999]'>
                <div className={`p-3 bg-white rounded-full text-2xl --bg hover:bg-white/80 cursor-pointer`}
                  onClick={doScroll}>
                  <BiChevronDown className={`text-black scr ${scrollTop ? 'rotate-scr' : ''}`} />
                </div>
              </div>
            </div>

        </div>


        <div className='h-screen'>
        <div className='md:py-20 px-2 md:px-8 relative'>
            <div className="flex flex-col gap-4 card-main p-4 md:p-10">
              <div className='w-full h-[1px]' ref={bottom}></div>
              <div className=''>
                <p className="text-xl selected">Education</p>
              </div>
              <Education />
            </div>
          </div>
        </div>
      </div>
    </Content>
  )
}
