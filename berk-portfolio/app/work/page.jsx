"use client";

import {motion} from 'motion/react';
import React, {useState} from 'react';

import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css';

import {BsArrowUpRight, BsGithub} from "react-icons/bs";

import {Tooltip, TooltipContent,TooltipProvider, TooltipTrigger,} from '@/components/ui/tooltip';

import Link from "next/link";
import Image from 'next/image';
import { delay } from 'motion';
import WorkSliderBtns from '@/components/WorkSliderBtns';

const projects = [
  {
    num: '01',
    category: 'E-commerce',
    description: "Full Stack E-commerce project test user: bob@test.com password: Pa$$w0rd ",
    stack: [{ name:".NET"}, {name: "React"}, {name:"TypeScript"}, {name:"Redux"},{name:"Stripe"}],
    image: '/e_commerce.png',
    live: "https://restore-a7bycudbenbzb3d4.francecentral-01.azurewebsites.net/",
    github: "",
  },
  {
    num: '02',
    category: 'Landing Page Design',
    description: "Landing Page design with animations.",
   stack: [
      { name: "React" },
      { name: "Next.js"},
      { name: "Framer Motion"}
 
    ],
    image: '/landingpage.png',
    live: "https://landing-page-pied-ten-42.vercel.app",
    github: "",
  },

]

const Work = () => {
    const[ project, setProject ] = useState(projects[0]);

    const handleSlideChange = (swiper) => {
      //get current slide incdex
      const currentIndex = swiper.activeIndex;
      //update project state based on current slide index
      setProject(projects[currentIndex]);
    };

    return (
      <motion.section 
        initial ={{opacity: 0}}
        animate={{opacity: 1, transition: {delay:2.4, duration:0.4, ease: "easeIn" }}}
        className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
        >
          <div className='container mx-auto'>
            <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
              <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
                <div className='flex flex-col gap-[30px] h-[50%]'>
                  {/* outline num */}
                  <div 
                    className='text-8xl leading-none font-extrabold text-transparent
                    text-outline'>
                      {project.num}
                  </div>
                  {/* project category */}
                    <h2 
                      className='text-[42px] font-bold leading-none text-white
                      group-hover:text-accent transition-all duration-500 capitalize'>{project.category} project
                    </h2>
                  {/* project description */}
                    <p className='text-white/60 whitespace-pre-line'>{project.description}</p>
                    {/* stack */}
                    <ul className="flex flex-wrap gap-4">
                      {project.stack.map((item, index) => (
                        <React.Fragment key={index}>
                          
                          {/* Insert line break BEFORE index 3 */}
                          {index === 3 && (
                            <li key={`break-${index}`} className="basis-full h-0 p-0 m-0"></li>
                          )}

                          <li className="text-xl text-accent">
                            {item.name}
                            {index !== project.stack.length - 1 && ","}
                          </li>

                        </React.Fragment>
                      ))}
                    </ul>
                    {/* border */}
                    <div className="border border-white/20"></div>
                    {/* buttons */}
                    <div className='flex items-center gap-4'>
                      {/* live project button  */}
                      <Link target="_blank" 
                             href={project.live}>
                        <TooltipProvider delayDuration={100}> 
                          <Tooltip>
                            <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                              <BsArrowUpRight className='text-white text-3xl group-hover:text-accent' />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Live Project</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </Link>
                      {/* github project button  */}
                      <Link href={project.github}>
                        <TooltipProvider delayDuration={100}> 
                          <Tooltip>
                            <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                              <BsGithub className='text-white text-3xl group-hover:text-accent' />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Github repository</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </Link>
                    </div>
                </div>

              </div>
              <div className='w-full xl:w-[50%]'>
                <Swiper spaceBetween={30} slidesPerView={1} className='xl:h-[520px] mb-12' onSlideChange={handleSlideChange}>
                  {projects.map((project, index) => {
                    return(
                      <SwiperSlide key={index} className='w-full '>
                        <div className='h-[460px] relative group flex justify-center items-center bg-pink-50/20'>
                          {/* overlay */}
                          <div className='absolute top-0 bottom-0 w-full h-full bg-black 10 z-10'></div>
                          {/* image */}
                          <div className='relative w-full h-full'>
                            <Image src={project.image} fill className="object-cover z-20" alt="" />
                          </div>
                        </div>
                      </SwiperSlide>
                    )
                  })}
                  {/* slider buttons */}
                  <WorkSliderBtns 
                    containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                    btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] flex justify-center items-center transition-all " />
                </Swiper>
              </div>
            </div>
          </div>
          

      </motion.section>
    )
  }
  
  export default Work;