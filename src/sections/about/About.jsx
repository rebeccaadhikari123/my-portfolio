import './about.css'
import Me from '../../assets/me.jpg'

const About = () => {
  return (
    <section id="about">
      <div className='container about__container'>
        <div className='about__left'></div>
        <div className='about__portrait'>
          <img src={Me} alt='Me'/>
          </div>
        <div className='about__right'></div>
        <h2>About Me</h2>
        <div className='about__cards'></div>
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
      </div>
    </section>
  )
}

export default About

