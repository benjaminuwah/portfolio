import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { Link } from "react-router-dom";
import { technologies } from "../constants";
import Feedbacks from "./Feedbacks";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute pt-36 md:pt-0 inset-0 items-center max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        {/* <div className='hidden md:flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div> */}

        <div>
          {/* <p className={styles.sectionSubText}>Software Engineer</p> */}
          <h1 className={`${styles.heroHeadText} text-white`}>Front-End Engineer and <span className='text-[#915EFF]'>User Experience Designer</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>Hi, I'm Ben Uwah. A passionate Frontend Developer and User Experience Designer based in Lagos, Nigeria.</p>
          {/* <p className={`text-ms md:text-xl mt-2 text-white-100 `}>I'm passionate about transforming innovative designs and  ideas into tangible soultions using modern technologies to deliver engaging and insightful user experiences.</p> */}
          
          <div className="mt-10">
            {/* <Link to='/' className="btn">Hire Me</Link> */}
          </div>

          <div className="my-10">
            <h2 className="text-lg">My Tech Stack</h2>
            <div className='flex flex-row flex-wrap justify-left gap-2 md:gap-10 mt-5'>
              {technologies.map((technology) => (
                <div className='w-16 h-16 md:w-20 md:h-20' key={technology.name}>
                  <img src={technology.icon} className="bg-white rounded-xl p-2" />
                </div>
              ))}
            </div>
          </div>
        </div>


      </div>
      {/* <ComputersCanvas /> */}
      {/* <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div> */}
    </section>
  );
};

export default Hero;
