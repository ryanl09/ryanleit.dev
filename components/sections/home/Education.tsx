import HomeCard from "@/components/CardHome"
import React from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import { FaBook, FaGraduationCap, FaUniversity } from "react-icons/fa"
import { SiAmazonaws, SiCsharp, SiCss3, SiGit, SiGraphql, SiHtml5, SiNeo4J, SiNextdotjs, SiNodedotjs, SiPhp, SiPostgresql, SiReact, SiTailwindcss, SiWordpress } from "react-icons/si";
import { TbBrandMysql } from "react-icons/tb";

const Education = () => {
    return (
        <>
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
                <p className="text-xl selected">Technology & Skills</p>
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
                  <span>2 years</span>
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
                <HomeCard title="GraphQL" icons={[SiGraphql]}>
                  <span>1 year</span>
                </HomeCard>
              </div>
        </>
    )
}

export default Education;