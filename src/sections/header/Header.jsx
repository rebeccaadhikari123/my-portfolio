import './header.css'
import HeaderImage  from '../../assets/header.jpg'
import data from './data'

const Header = () => {
  return (
    <header id="header">
       <div className="container header__container">
        <div className="header__profile">
          <img src={HeaderImage} alt="HeaderImage" />
        </div>
        <h5>Hello I'm</h5>
        <h1>Rebicca Adhikari</h1>
        <p>I am an energetic, ambitious person who has developed mature and responsible approach to any task that I undertake, or a situation that I am presented with. As a Frontend Developer i will give my excellent performance in working with a company to achieve a certain objective on time and excellence</p>
        <div className="header__cta">
           <a href="#contact" className='btn primary'>Let's talk</a>
           <a href="#portfolio" className='btn light'>My Work</a>
           
           </div>  
           <div className="header__socials"  >
            {
             
              data.map(item => <a key= {item.id} href= { item.link} target="_blank" rel="noopener noreferrer">{item.icon}</a>)
            }
          
            </div>   
        
       </div>
    </header>
  )
}

export default Header