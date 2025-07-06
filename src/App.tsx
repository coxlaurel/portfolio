import './index.css';
import NavBar from './components/NavBar';
import ProjectCard from './components/ProjectCard'
import About from './components/About';
import SocialLinks from './components/SocialLinks'
import Footer from './components/Footer';
import useScrollSpy from './hooks/useScrollSpy';
import Cursor2 from './components/Cursor2';

// import { useState } from 'react';

function App() {
  const {
    currentSection,
    aboutRef,
    experienceRef,
    projectsRef,
  } = useScrollSpy();

  // const [isActive, setIsActive] = useState(false);
  
  return <div>
    <Cursor2 /> 
    {/* isActive={isActive} */}
    <div className='nav-content-container'>
      <div className='left-bar-container'>
        <div>
          <NavBar currentSection={currentSection} />
        </div>
        <SocialLinks />
      </div>
      <div className='content-container'>
        <section ref={aboutRef} id="about">
          <About />
        </section>
        <section ref={experienceRef} id="experience"> {/*style={{height: "100vh"}} */}
          <ProjectCard heading="TTM Technologies" cardType={["experience", "May 2025 - Present"]} caption="Overhauling existing 4.0 dashboard to a Unified Namespace structure to improve manufacturing scalability and capabilities." tags={["Jython", "CSS", "SQL", "Ignition"]} />
          <ProjectCard heading="ORBITAL: Olin Assistive Tech Lab" cardType={["experience", "Jan 2025 - Present"]} caption="Delightful caption" tags={["Python", "Pillow Library", "BIBD"]} />
          <ProjectCard heading="Vending Machine" cardType={["experience", "Jan 2025 - Present"]} caption="Table top vending machine with touchscreen interface to vend all your favorite snacks. Made as a final project for Principles of Engineering course." tags={["Jython", "CSS", "SQL"]} />
        </section>
        <section ref={projectsRef} id="projects">
          <ProjectCard heading="Vending Machine" cardType={["project", "src/assets/vend_thumbnail.png"]} caption="Table top vending machine with touchscreen interface to vend all your favorite snacks. Made as a final project for Principles of Engineering course." tags={["Python", "Arduino", "Motor circuits", "RasPI"]} />
          <ProjectCard heading="Inkstory: Tattoo Museum" cardType={["project", "src/assets/inkstory_thumbnail.jpg"]} caption="Worked with 10+ tattoo artist to deeply understand their values and pain-points. Co-designed a mockup tattoo museum solution over the semester." tags={["Co-design", "User Research", "Stories"]}/>
          <ProjectCard heading="Cloudy With A Chance Of Pizza" cardType={["project", "src/assets/CWACOP_thumbnail.png"]} caption="Make pizza to your hearts delight. Play with pixel perfect collision." tags={["Python", "Pygame Lib", "Game Dev"]} />
          <ProjectCard heading="Spot-it: Discrete Math Version" cardType={["project", "src/assets/spot_it_thumbnail.png"]} caption="Delightful caption" tags={["Python", "Pillow Library", "BIBD"]} />
        </section>
        <section>
          <Footer />
          </section>
      </div>
    </div>
  </div>
}

export default App;