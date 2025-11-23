"use client"


import CountUp from "react-countup";
import React, { useState } from "react";



const stats = [
    {
        num: 3,
        text: "Years of experience",
        isInfinity: false,
    },
    {
        num: 3,
        text: "Projects completed",
        isInfinity: false,
    },
    {
        num: 12,
        text: "Technologies mastered",
        isInfinity: false,
    },
    {
        num: 499,
        text: "Passion Level",
        isInfinity: true,
    },
    
];

const Stats = () => {
  
  const [isPassionInfinity, setIsPassionInfinity] = useState(false);
  

  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
        <div className="container mx-auto">
            <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
                {stats.map((item, index) => (
                <div key={index} className="flex-1 flex gap-4 items-center justify-center xl:justify-start text-center">
                    {item.isInfinity && isPassionInfinity ? (
                    <span className="text-4xl xl:text-6xl font-extrabold ">∞</span>
                    ) : (
                    <CountUp
                        end={item.num}
                        duration={5}
                        delay={2}
                        className="text-4xl xl:text-6xl font-extrabold"
                        onEnd={() => {
                        if (item.isInfinity) setIsPassionInfinity(true);
                        }}
                    />
                    )}
                    <p className={`${
                    item.text.length < 15 ? "max-w-[100px]": "max-w-[150px]" }  leading-snug text-white/80`} >
                       {item.text}
                    </p>
                </div>
                ))}
            </div>
    </div>
  </section>
 );
};

export default Stats;
