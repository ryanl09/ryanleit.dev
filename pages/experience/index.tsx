import React from 'react';
import Bar from '@/components/Bar';
import Content from '@/components/Content';
import Project from '@/components/Project';
import Work from '@/components/Work';
import { AiOutlineCloudDownload } from 'react-icons/ai';
import { WorkProject } from '@/global/types';

const direcTecProjects: WorkProject[] = [{
    title: '',
    url: '',
}];

export default function Experience() {
    return (
        <Content padding={false} hiddenElement={false}>
            <div className='h-[60px] w-full'></div>
            <div className='flex items-center justify-center py-6'>
                <a href="/resume6-14-2023.pdf" target="_blank" rel="noopener noreferrer">
                    <span className='flex items-center gap-2 text-[#678cdb] font-medium underline'>
                        <AiOutlineCloudDownload />
                        View / Download Resume
                    </span>
                </a>
            </div>
            <div className='grid grid-cols-12 gap-6 px-4 md:px-8'>
                <div className='col-span-12 sm:col-span-6 md:col-span-4'>
                    <div className='selected font-medium text-lg'>Work Experience</div>
                    <Work
                        title="DirecTec LLC"
                        from="Jan 2024"
                        role="Systems Engineer"
                        location="Hollsopple, PA"
                        projects={[{
                            title: '',
                            url: '',
                        },{
                            title: '',
                            url: '',
                        }]}>
                    </Work>
                    <Bar />
                    <Work
                        title="The Esport Company"
                        from="June 2021"
                        role="Fullstack Developer"
                        location="Johnstown, PA"
                        projects={[{
                            title: '',
                            url: '',
                        }]}>
                    </Work>
                    <Bar />
                    <Work
                        title="Sourceree"
                        from="Jan 2023"
                        to="June 2023"
                        role="Software Engineer Intern"
                        location="Ebensburg, PA">
                    </Work>
                    <Bar />
                    <Work
                        title="General Cleaning Service"
                        from="May 2016"
                        to="May 2023"
                        role="Part Time Cleaner"
                        location="Johnstown, PA">
                    </Work>
                </div>
                <div className='col-span-12 sm:col-span-6 md:col-span-4'>
                    <div className='selected font-medium text-lg'>Personal Projects</div>
                    <Project
                        title="CollabRoom"
                        href="https://collabroom.app"
                        tech={['Next.js', 'React.js', 'Tailwind CSS', 'MySQL']}>
                            A website focused on allowing music producers, vocalists, and audio engineers to easily find each other based on artist types and the genres they make.
                    </Project>
                    <Bar />
                    <Project
                        title="GymSocial"
                        href={null}
                        tech={['Next.js', 'React.js', 'GraphQL', 'PostreSQL', 'Docker']}>
                            A website that allows fitness-enthusiasts to keep track of their workouts and find others.
                    </Project>
                </div>
                <div className='col-span-12 sm:col-span-6 md:col-span-4'>
                    <div className='selected font-medium text-lg'>Volunteer Experience</div>
                    
                    <Work
                        title="Richland AYSO"
                        from="July 2013"
                        role="Board Member / Referee / Coach"
                        location="Johnstown, PA">

                    </Work>
                </div>
            </div>
        </Content>
    );
}