import React from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { footerLinks } from '../constants';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Let's connect on some great platforms and colaborate.</p> 
        <h2 className={`${styles.sectionHeadText}`}>Connect Today.</h2> 
      </motion.div>
      <div className={`${styles.sectionSubText} flex flex-wrap justify-between text-center`}>
        <div>
          <ul className='flex gap-6'>
            <li>
              <a href="https://github.com/benjaminuwah" target="_blank">GitHub</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/benjamin-uwah-3a6621ab/" target="_blank">Linkedin</a>
            </li>
            <p><a href="mailto:uwah23@gmail.com">Send Email</a></p>
            <p><a href="tel:+2349161702603">Call me</a></p>
          </ul>
        </div>
      </div>


      

    </>
  );
};

export default SectionWrapper(Footer, "connect");