"use client"

import {BsArrowDownRight} from "react-icons/bs";
import Link from "next/link";
import {motion} from 'motion/react';


 export const services = [
    {
        num: '01',
        title: 'Front-End Development',
        description: ' Crafting visually appealing and responsive user interfaces with a focus on delivering seamless user experiences across devices.',
        href:"/contact",
        val: "frntend",
    },
    {
        num: '02',
        title: 'Back-End Development',
        description: 'Building robust server-side applications, APIs, and database systems to ensure functionality, scalability, and secure data handling.',
        href:"/contact",
        val: "bckend",
    },
    {
        num: '03',
        title: 'Web Servers / IOT',
        description: 'Setting up and maintaining web servers, and creating innovative IoT applications to connect and control devices remotely.',
        href:"/contact",
        val: "iot",
    },
    {
        num: '04',
        title: 'Embedded System Design',
        description: 'Developing custom embedded solutions, including firmware programming and PCB design, tailored to specific hardware applications (excluding mechanical design).',
        href:"/contact",
        val: "embedded",
    },
]



const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
        <div className="container mx-auto">
            <motion.div 
                initial={{opacity: 0}}
                animate={{
                    opacity: 1,
                    transition:{delay:2.4, duration:0.4, ease:'easeIn'}
                }}
                className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
            >
                {services.map((service, index)=>{
                    return(
                        <div key={index} className="flex-1 flex flex-col justify-center gap-6 group ">
                        {/* top */}
                            <div className="w-full flex justify-between items-center">
                                <div className="text-5xl font-extrabold text-outline text-transparent
                                group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                                <Link href={{
                                    pathname : "/contact",
                                    query: {service: encodeURIComponent(service.val)},
                                }} 
                                    className="w-[70px] h-[70px] rounded-full bg-white 
                                    group-hover:bg-accent transition-all duration-500 flex
                                    justify-center items-center hover:-rotate-45">
                                    <BsArrowDownRight className="text-primary text-3xl "/>
                                </Link>
                            </div>
                            {/* title */}
                            <h2 
                                className="text-[42px] font-bold leading-none text-white
                                group-hover:text-accent transition-all duration-500">
                                    {service.title}
                            </h2>
                            {/* description */}
                            <p>{service.description}</p>
                            {/* border */}
                            <div className="border-b border-white/20 w-full"></div>
                            
                        </div>
                    );
                })}
            </motion.div>
        </div>
    </section>
  )
}

export default Services;
