import React from 'react'
import { BallCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'
import { styles } from '../styles'

const Tech = () => {
  return (
    <>
    <div className={styles.heroSubText} style={{textAlign: 'center', paddingBottom: "40px"}}>
        <h3>Some technologies I've used</h3>
    </div>
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((tech) => (
        <div className='w-24 h-24' key={tech.name}>
          <BallCanvas 
            icon={tech.icon}
            />
        </div>
      ))}
    </div>
    </>
  )
}

export default SectionWrapper(Tech, '')