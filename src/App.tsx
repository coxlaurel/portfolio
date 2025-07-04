import './index.css';
import NavBar from './components/NavBar';
import ProjectCard from './components/ProjectCard'
import About from './components/About';
import useScrollSpy from './hooks/useScrollSpy';

function App() {
  const {
    currentSection,
    aboutRef,
    experienceRef,
    projectsRef,
  } = useScrollSpy();
  
  return <div>
    <div className='nav-content-container'>
      <div className='nav-bar-container'>
        <NavBar currentSection={currentSection} />
      </div>
      <div className='content-container'>
        <section ref={aboutRef} id="about">
          <About />
        </section>
        <section ref={experienceRef} id="experience" style={{height: "100vh"}}>
          <h1>Experience Place holder</h1>
        </section>
        <section ref={projectsRef} id="projects" style={{height: "100vh"}}>
          <ProjectCard heading="Vending Machine" image="src/assets/Screenshot from 2024-06-25 19-14-40.png" caption="Snacking Delight"/>
          <ProjectCard heading="Heading 2" image="src/assets/Screenshot from 2024-06-25 19-14-40.png" caption="Delightful caption"/>
        </section>
      </div>
    </div>
  </div>
}

export default App;