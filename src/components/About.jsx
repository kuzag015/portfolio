import React from 'react'
import {Tilt} from 'react-tilt'
import {motion} from 'framer-motion'

import {styles} from '../styles'
import {services} from '../constants'
import {fadeIn, textVariant} from '../utils/motion'

import { SectionWrapper } from '../hoc'

const ServiceCard = ({index, title, icon}) => {
  return(
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)} className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt='title' className='w-16 h-16 object-contain'/>
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        As a web developer, I possess expertise in <span className='text-orange-200'>fullstack JavaScript</span> development using the MERN stack and <span className='text-orange-200'>fullstack Python</span> development with Flask. I have a strong command of <span className='text-orange-200'>SQL and NoSQL </span>databases, enabling me to create efficient and scalable web applications. Through my background as a <span className='text-orange-200'>visual artist</span>, I've fostered a keen eye for aesthetics, allowing me to craft visually captivating and intuitive user experiences. 
      </motion.p>
      <br />
      <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        In addition to my web development expertise, I have gained extensive hands-on experience as a <span className='text-orange-200'>music producer</span>, <span className='text-orange-200'>film composer</span>, and <span className='text-orange-200'>sound designer</span>, further enhancing my ability to collaborate closely with clients and achieve a cohesive end product. This experience has honed my communication and project management skills, allowing me to understand and meet the unique needs and visions of my clients, whether it's in the realm of music production or web development.
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service}/>
        ))
        }
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about')