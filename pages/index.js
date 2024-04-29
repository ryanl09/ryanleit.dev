import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import Content from '@/components/Content';
import Socials from '@/components/Socials';
import HomeCard from '@/components/CardHome';
import { AiOutlineCalendar } from 'react-icons/ai';
import { BiChevronDown} from 'react-icons/bi';
import { FaBook, FaUniversity, FaGraduationCap } from 'react-icons/fa';
import { SiNextdotjs, SiCsharp, SiPhp,SiCss3,SiHtml5, SiReact, SiPostgresql, SiAmazonaws, SiWordpress, SiNeo4J, SiTailwindcss, SiNodedotjs, SiGit} from 'react-icons/si';
import { TbBrandMysql } from 'react-icons/tb';

export default function Home() {

  const [scrollTop, setScrollTop] = useState(false);

  const top = useRef();
  const bottom = useRef();

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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                <HomeCard title="University" icons={[FaUniversity]}>
                  <span>University of Pittsburgh at Johnstown</span>
                </HomeCard>
                <HomeCard title="Duration" icons={[AiOutlineCalendar]}>
                  <span>Aug 2019 - Apr 2023</span>
                </HomeCard>
                <HomeCard title="Major" icons={[FaBook]}>
                  <span>Computer Science</span>
                </HomeCard>
                <HomeCard title="GPA" icons={[FaGraduationCap]}>
                  <span>3.79</span>
                </HomeCard>
              </div>
              <div className=''>
                <p className="text-xl selected">Technology</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                <HomeCard title="AWS" icons={[SiAmazonaws]}>
                  <span>2 years</span>
                </HomeCard>
                <HomeCard title="CSS" icons={[SiCss3, SiTailwindcss]}>
                  <span>3 years</span>
                </HomeCard>
                <HomeCard title="C#" icons={[SiCsharp]}>
                  <span>1 year</span>
                </HomeCard>
                <HomeCard title="Git" icons={[SiGit]}>
                  <span>3 years</span>
                </HomeCard>
                <HomeCard title="HTML" icons={[SiHtml5]}>
                  <span>3 years</span>
                </HomeCard>
                <HomeCard title="Neo4J" icons={[SiNeo4J]}>
                  <span>1 year</span>
                </HomeCard>
                <HomeCard title="Next.js" icons={[SiNextdotjs]}>
                  <span>2 years</span>
                </HomeCard>
                <HomeCard title="Node.js" icons={[SiNodedotjs]}>
                  <span>3 years</span>
                </HomeCard>
                <HomeCard title="PHP" icons={[SiPhp]}>
                  <span>3 years</span>
                </HomeCard>
                <HomeCard title="React.js" icons={[SiReact]}>
                  <span>3 years</span>
                </HomeCard>
                <HomeCard title="SQL" icons={[TbBrandMysql, SiPostgresql]}>
                  <span>3 years</span>
                </HomeCard>
                <HomeCard title="WordPress" icons={[SiWordpress]}>
                  <span>3 years</span>
                </HomeCard>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Content>
  )
}
