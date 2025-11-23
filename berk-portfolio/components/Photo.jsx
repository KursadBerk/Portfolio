"use client"

import {motion} from 'motion/react';
import Image from 'next/image';



const Photo = () => {
  return (
    <div className='w-full h-full realative'>
      <motion.div 
        initial= {{opacity: 0}}
        animate={{
            opacity:1,
            transition:{delay:2, duration:0.3, ease: "easeIn"},
        }} >
        {/* image */}
        <motion.div 
            initial= {{opacity: 0}}
            animate={{
                opacity:1,
                transition:{delay:2.4, duration:0.4, ease: "easeInOut"},
            }}
            className="absolute w-[298px] xl:w-[498px] aspect-square mix-blend-lighten "
        >
            <Image
                src="/profile_pic.png"
                fill
                sizes='(max-width:298px)'
                priority
                quality={100}
                alt="A visually blended image"
                className="object-contain"
            />
        </motion.div>
        
        {/* circle */}
        <motion.svg 
            className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]" 
            fill="transparent"
            viewBox="0 0 506 506"
            xmlns="http://www.w3.orrg/2000.svg"
            >
            <motion.circle 
                cx="253" 
                cy="253" 
                r="250" 
                stroke="#00ff99" 
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{strokeDasharray: "24 10 0 0"}}  
                animate ={{
                    strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                    rotate: [120,360],
                }}
                transition ={{
                    duration: 20,
                    repeat: Infinity,
                    repeatType:"reverse",
                }}
            />
        </motion.svg>

      </motion.div>
    </div>
  );
};

export default Photo;
