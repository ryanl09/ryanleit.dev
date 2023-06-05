import React from 'react';
import Content from '@/components/Content';
import HomeCard from '@/components/CardHome';
import { AiFillPhone } from 'react-icons/ai';
import { BiLinkExternal } from 'react-icons/bi';
import { BsLinkedin } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import Link from 'next/link';

export default function Contact() {
    return (
        <Content padding={false} hiddenElement={false}>
            <div className='h-screen flex flex-col gap-8 justify-center items-center'>
                <h1 className='text-3xl font-semibold selected'>Contact</h1>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
                    <div className='gradient'>
                        <HomeCard title="Phone" icons={[AiFillPhone]} solidBg={true}>
                            <span>(814) 659-7961</span>
                        </HomeCard>
                    </div>
                    <div className='gradient'>
                        <HomeCard title="Email" icons={[HiOutlineMail]} solidBg={true}>
                            <span>ryanleitenberger@yahoo.com</span>
                        </HomeCard>
                    </div>
                    <div className='gradient'>
                        <HomeCard title="LinkedIn" icons={[BsLinkedin]} solidBg={true}>
                            <a href="https://www.linkedin.com/in/ryan-leitenberger-40b479208/" rel="noopener noreferrer" target="_blank">
                                <span className='flex items-center gap-2'>Visit <BiLinkExternal className='ml-auto' /></span>
                            </a>
                        </HomeCard>
                    </div>
                </div>
            </div>
        </Content>
    );
}