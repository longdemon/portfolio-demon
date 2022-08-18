import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'


const HeaserSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/long-demon/" target="_blank" rel="noopener noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/longdemon" target="_blank" rel="noopener noreferrer"><FaGithub/></a>
    </div>
  )
}

export default HeaserSocials