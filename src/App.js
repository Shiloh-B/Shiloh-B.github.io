import About from './components/About/About';
import Header from './components/Header/Header';
import Projects from './components/Projects/Project';
import { useRef } from 'react';

const App = () => {

  const aboutRef = useRef(null);
  const projectsRef = useRef(null);

  return (
    <>
      <Header aboutRef={aboutRef} projectsRef={projectsRef} />
      <About aboutRef={aboutRef} />
      <Projects projectsRef={projectsRef} />
    </>
  )
}

export default App;