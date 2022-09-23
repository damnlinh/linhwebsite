import React from 'react'
import './about.css'
import ME from '../../assets/me.png'
import {FaAward} from 'react-icons/fa'
import {IoSchoolOutline} from 'react-icons/io5'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>Computer Science Major</small>
            </article>

            <article className='about__card'>
              <IoSchoolOutline className='about__icon'/>
              <h5>University</h5>
              <small>Trinity University</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>

          <p>
          I'm a senior Computer Science student at Trinity University expecting to graduate in May 2023. I have a passion for building software and different aspects of software engineering. Experience in working with Python, Java, JavaScript, C++, and Scala.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About