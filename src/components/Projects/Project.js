import './Project.css';
import projectArr from './projects.json';
import PlusTwo from '../../assets/plustwo.png';
import GuessThePrompt from '../../assets/guesstheprompt.png';

const Projects = () => {

  const getImage = (title) => {
    switch(title) {
      case 'Plus Two':
        return PlusTwo;
      case 'Guess the Prompt':
        return GuessThePrompt;
      default: return null;
    }
  }

  const getLink = (project) => {
    if(project.link) {
      return project.link;
    }

    return 'In Development...';
  }

  const projects = projectArr.map((project) => {
    return (
      <div className='project' >
        <h1 className='project-title'>{project.title}</h1>
        <img className='project-image' alt="project" src={getImage(project.title)}/>
        <p className='project-content'>{project.content}</p>
        <a href={project.link ? project.link : void(0)} 
          target='_blank' 
          rel='noreferrer'
          className={project.link ? 'project-link' : 'development-link'}>{getLink(project)}
        </a>
      </div>
    )
  });



  return (
    <div id="projects" className='projects-parent'>
      <div className='about-title-container'>
        <span className='top-bracket' />
        <h1 className='about-title'>Projects</h1>
        <span className='bottom-bracket' />
      </div>

      <div className='projects-container'>
        <div className='projects-list'>
          {projects}
        </div>
      </div>
    </div>
  )
}

export default Projects;