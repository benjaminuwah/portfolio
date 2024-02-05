import React from 'react'

import { SectionWrapper } from "../hoc";
import { clients } from '../constants';
import { fadeIn, textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { styles } from "../styles";


const Clients = () => {
    return (
        < >
            <motion.div variants={textVariant()} className="mt-20">
                {/* <p className={styles.sectionSubText}> I don’t like to brag, but I’m changing the game.</p> */}
                <h2 className={styles.sectionHeadText}>Clients I've worked with.</h2>
            </motion.div>

            <div className='flex flex-row flex-wrap justify-left gap-10 mt-10'>
                {clients.map((client) => (
                    <div className='w-20 h-20' key={client.name} >
                        <img src={client.icon} alt='clients logo' className='rounded-full' />
                    </div>
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Clients, "");
