import './portfolio.css'

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="contaner portfolio__container">
        <article className='portfolio__iteam'>
          <div className="portfolio__iteam-image"></div>
          <h3>This is a portfolio iteam title</h3>

          <a href="https://github.com" className='btn' target='_blank' rel="noreferrer">Github</a>
          <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>

        </article>
      </div>
      </section>
  )
}

export default Portfolio