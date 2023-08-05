import './Header.css';

const Header = () => {

  const scrollToAbout = () => {
    const about = document.getElementById('about');
    about.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  const scrollToProjects = () => {
    const projects = document.getElementById('projects');
    projects.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <div className='header-parent'>
      <div className='header-container'>
        <div className='header-content'>
          <div className='header-item'>
            <h2 className='header-item-text' onClick={() => { scrollToAbout() }}>About</h2>
          </div>
          <div className='header-name-content'>
            <h1 className='name'>Hi. I'm Shiloh Ballard.</h1>
            <div>
              <p>A web developer bringing beautiful visions to life.</p>
            </div>
          </div>
          <div className='header-item'>
            <h2 className='header-item-text' onClick={() => { scrollToProjects() }}>Projects</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;