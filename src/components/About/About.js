import './About.css';
import resume from '../../assets/resume.pdf';

const About = () => {

  const aboutText = `
  I'm thrilled to have you here and share my passion for 
  crafting exceptional digital experiences. 
  I am a dedicated front-end software engineer, 
  proficient in creating user-friendly and visually appealing 
  web applications. With a keen eye for detail and a love for 
  clean code, I strive to deliver seamless and interactive websites 
  that leave a lasting impression on all stakeholders.`;
  
  const headText = 'Welcome to my Software Engineer Portfolio!';

  const resumeClickHandler = () => {
    window.open(resume);
  }

  return (
    <div id="about">
      <div className='about-container'>
        <div className='about-title-container'>
          <span className='top-bracket' />
          <h1 className='about-title'>Who am I?</h1>
          <span className='bottom-bracket' />
        </div>
      </div>

      <div className='about-content-container'>
        <p className='head-text'>{headText}</p>
        <span className='divider'></span>
        <p className='about-text'>{aboutText}</p>
        <div className='headshot'></div>
        <div className='resume-button' onClick={() => { resumeClickHandler() }}>Resume</div>
      </div>
    </div>

  )
}

export default About;