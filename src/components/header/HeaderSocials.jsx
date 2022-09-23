import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://www.linkedin.com/in/linh-dang-2001/" target="_blank"><BsLinkedin/></a>
            <a href="https://github.com/ldang1" target="_blank"><FaGithub/></a>
            <a href="https://www.instagram.com/damnlinh/" target="_blank"><BsInstagram/></a>
        </div>
    )
}

export default HeaderSocials