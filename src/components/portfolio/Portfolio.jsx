import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/img1.png'
import IMG2 from '../../assets/img2.png'
import IMG3 from '../../assets/img3.png'
import IMG4 from '../../assets/img4.png'

const data = [
  {
    id: 1,
    image: IMG2,
    title: 'Spotify Uncovered',
    github: 'https://brendanpotter00.github.io/Spotify_Uncovered_v2/#',
  },
  {
    id: 2,
    image: IMG1,
    title: '2D Role Playing Game',
    github: 'https://github.com/ldang1/unityRPG',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Personal Portfolio Website',
    github: 'https://github.com',
  }, 
  {
    id: 4,
    image: IMG4,
    title: 'Android Gym App',
    github: 'https://github.com/ldang1/GymApp',
  }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank'>Link / Github</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio