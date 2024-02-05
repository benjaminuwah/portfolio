import React from "react";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { styles } from "../styles";



const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText}`}>My Tech Stack.</h2>        
        <p className={`${styles.sectionSubText} `}>Here are some of the technologies I employ when developing products and projects for my clients.</p> 
      </motion.div>
      <div className='flex flex-row flex-wrap justify-left gap-2 md:gap-10 mt-5'>
        {technologies.map((technology) => (
          <div className='w-16 h-16 md:w-20 md:h-20' key={technology.name}>
            <img src={technology.icon} className="bg-white rounded-xl p-2" />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");