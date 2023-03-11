import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from'react-icons/fa'
import {VscFolderLibrary} from'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-imageabout__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__card">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>Internship Completed</small>
            </article>

          

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Project</h5>
              <small>4 Project Completed</small>
            </article>
          </div>
          <p>I am a front-end developer.As an enthusiastic and creative technologist with hands-on skills
           in a wide range of software, 
           tools and programming languages, 
           I am well positioned to leverage my abilities and qualification to thrive as a Front-end Developer
          I am an energetic, ambitious person who has developed a mature and responsible approach to 
          any task that I undertake,
          or a situation that I am presented with.
          I am highly flexible and adaptable when it comes to different projects.
          My interest in frontend development sparked during pursuing degree.
          As a Frontend Developer i will give my excellent performance in working 
          with a company to achieve a certain objective on time and excellence.
          Beside technology,I love writing journals,reading books.I also have interest on history.
          Travelling is also mine hobby.I love facing an exciting challenges.</p>

          <a href="#contact" className='btn btn-primary'>Let's Talk </a>
        </div>
      </div>
      </section>

  )
}

export default About