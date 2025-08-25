import ContactDialog from "@/components/contact-dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiChevronRight, BiCodeAlt, BiFile, BiLinkExternal, BiLogoCss3, BiLogoGraphql, BiLogoHtml5, BiLogoJavascript, BiLogoPhp, BiLogoReact, BiLogoTailwindCss, BiLogoTypescript, BiLogoWix } from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import HobbiesTabs from "@/components/hobbies-tabs";

type TechStackItem = {
    title: string;
    years: number;
    icon: React.ElementType;
}

const stackItems: TechStackItem[] = [
    { title: 'HTML', years: 4, icon: BiLogoHtml5 },
    { title: 'CSS', years: 4, icon: BiLogoCss3 },
    { title: 'JavaScript', years: 4, icon: BiLogoJavascript },
    { title: 'MySQL', years: 4, icon: SiMysql },
    { title: 'TypeScript', years: 3, icon: BiLogoTypescript },
    { title: 'React', years: 3, icon: BiLogoReact },
    { title: 'Next.js', years: 3, icon: RiNextjsFill },
    { title: 'Tailwind CSS', years: 3, icon: BiLogoTailwindCss },
    { title: 'PHP', years: 2, icon: BiLogoPhp },
    { title: 'GraphQL', years: 1, icon: BiLogoGraphql },
]

type PortfolioItem = {
    title: string;
    description: string;
    href: string;
    img: string;
    stack: ProjectStackItem[];
    isWip?: boolean;
}

type ProjectStackItem = {
    title: string;
    Icon: React.ElementType;
}

const portfolioItems: PortfolioItem[] = [
    { 
        title: 'TEC Esports',
        href: 'https://tecesports.com',
        img: '/img/portfolio-tec.png',
        description: 'League management platform for high school & middle school esports teams.',
        stack: [
            { title: 'React', Icon: BiLogoReact },
            { title: 'Next.js', Icon: RiNextjsFill },
            { title: 'Tailwind CSS', Icon: BiLogoTailwindCss },
        ]
    },
    {
        title: 'Parlays App',
        href: 'https://github.com/ryanl09/parlays',
        img: '/img/portfolio-parlays.png',
        description: 'Platform for my friends and I to bet on each other doing things while on trips.',
        stack: [
            { title: 'React', Icon: BiLogoReact },
            { title: 'Next.js', Icon: RiNextjsFill },
            { title: 'Tailwind CSS', Icon: BiLogoTailwindCss },
        ]
    },
    {
        title: 'Podiatry Panther',
        href: 'https://podiatrypanther.com',
        img: '/img/portfolio-panther.png',
        description: 'Learning platform for students to study podiatry and other related subjects.',
        stack: [
            { title: 'React', Icon: BiLogoReact },
            { title: 'Next.js', Icon: RiNextjsFill },
            { title: 'Tailwind CSS', Icon: BiLogoTailwindCss },
        ],
        isWip: true,
    },
    {
        title: 'WorkStreame',
        href: 'https://workstrea.me',
        img: '/img/portfolio-workstreame.png',
        description: 'Scalable project management tools that allow teams to stay organized and customize everything.',
        stack: [
            { title: 'React', Icon: BiLogoReact },
            { title: 'Next.js', Icon: RiNextjsFill },
            { title: 'Tailwind CSS', Icon: BiLogoTailwindCss },
        ],
        isWip: true,
    }
]

export default async function HomePage() {
    const yoe = new Date().getFullYear() - 2021;

    return (
        <div className="space-y-8">
            <div className="border rounded-xl p-4 flex items-center gap-4" style={{
                background: `linear-gradient(to right, #add0ff50, #c896ff50)`
            }}>
                <div className="bg-gradient-to-tr from-indigo-500 to-fuchsia-500 p-2 rounded-lg w-fit">
                    <BiCodeAlt className="text-white text-lg" />
                </div>
                <h2 className="text-lg font-semibold">Ryan Leitenberger</h2>
                <Badge variant="default">Full Stack Developer</Badge>

                <div className="ml-auto">
                    <ThemeToggle />
                </div>
            </div>

            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 md:col-span-6 space-y-4">
                    <div className="mt-4 space-y-2">
                        <h2 className="text-2xl font-semibold">About Me</h2>
                        <p className="text-muted-foreground">I'm a software developer with a passion for building web applications that both work good and look good.</p>
                        <p className="text-muted-foreground">I studied computer science at the University of Pittsburgh at Johnstown from August 2019 - April 2023.</p>
                    </div>

                    <div className="flex items-center gap-4">
                        <ContactDialog />

                        <Link href="/Ryan%20Leitenberger%20Resume%2008-25.pdf" target="_blank" rel="noopener noreferrer">
                            <Button variant="outline">
                                <BiFile />
                                Resume
                            </Button>
                        </Link>
                    </div>

                    <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-12 sm:col-span-6 md:col-span-3 p-3 border rounded-lg text-center">
                            <div className="text-2xl font-bold text-blue-500">{yoe}</div>
                            <div className="text-xs text-muted-foreground">Years of Experience</div>
                        </div>
                        <div className="col-span-12 sm:col-span-6 md:col-span-3 p-3 border rounded-lg text-center">
                            <div className="text-2xl font-bold text-purple-500">∞</div>
                            <div className="text-xs text-muted-foreground">Monsters Drank</div>
                        </div>
                    </div>

                    <div className="col-span-12 grid grid-cols-12 gap-4">
                        <span className="text-lg font-semibold col-span-12">Toolkit</span>
                        {stackItems.map(item => (
                            <div key={item.title} className="col-span-12 sm:col-span-6 lg:col-span-4 p-4 border rounded-lg">
                                <div className="flex items-center gap-2">
                                    <item.icon className="text-2xl text-blue-500" />
                                    <div className="flex items-center gap-2 w-full">
                                        <h3 className="text-sm font-medium">{item.title}</h3>
                                        <Badge variant="outline" className="ml-auto">{item.years} yrs</Badge>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
                </div>

                <div className="col-span-12 md:col-span-6 shadow-lg rounded-lg overflow-hidden">
                    <div className="w-full h-full">
                        <Image 
                            src="/img/ryan.jpg" 
                            alt="Ryan" 
                            width={600} 
                            height={600} 
                            className="w-full h-full object-cover rounded-lg" 
                        />
                    </div>
                </div>
            </div>

            <h1 className="text-lg font-semibold">My Projects</h1>
            <div className="grid grid-cols-12 gap-4">
                {portfolioItems.map(item => (
                    <div key={item.title} className="col-span-12 sm:col-span-6 md:col-span-3">
                        <Link href={item.href} target="_blank" rel="noopener noreferrer">
                            <div className="group relative overflow-hidden rounded-xl border shadow-sm hover:shadow-lg transition-all duration-300">

                                <div className="relative aspect-video overflow-hidden">
                                    <img 
                                        src={item.img} 
                                        alt={item.title} 
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                                    />
                                    
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    
                                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
                                            <BiLinkExternal className="text-gray-700 text-sm " />
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <div className="font-semibold group-hover:text-blue-600 transition-colors duration-200">
                                                {item.title}
                                                {item.isWip && <Badge variant="default" className="text-xs ml-2">WIP</Badge>}
                                            </div>
                                            <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-2 mt-3">
                                        {item.stack.map((stackItem, index) => (
                                            <div key={stackItem.title} className="flex items-center gap-1">
                                                <stackItem.Icon className="text-blue-500 text-sm" />
                                                <span className="text-xs text-muted-foreground">{stackItem.title}</span>
                                                {index < item.stack.length - 1 && <span className="text-muted-foreground ml-2">•</span>}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>

            
            <h1 className="text-lg font-semibold">Hobbies & Interests</h1>
            <HobbiesTabs />
            
        </div>
    )
}