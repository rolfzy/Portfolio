import "react";
import "./assets/style/Project.css";
import project1 from './assets/image/project1.png';  
import project2 from './assets/image/project2.png';  
// import project3 from './assets/image/project3.png';
import project4 from './assets/image/project4.png';
import project5 from './assets/image/project5.jpg';
import AnimationWrapper from "./Animation";


const Projects = () => {
    return(
        <section className="projects-section">
            <div className="content-wrapper">
                <div className="projects-container">
                    <h2 className="projects-title" id="project">PROJECT</h2>
                    <AnimationWrapper>
                    <p className="projects-subtitle">
                This is the result of some of the project app submissions that I worked on
                </p>

                <div className="projects-slider">
                    <div className="projects-card">
                    <img src={project1} alt="Project" className="projects-image" />
                    <h3 className="projects-name">Isyaratku</h3>

                   
                    
                </div>
                <div className="projects-card">
                    <img src={project5} alt="Project" className="projects-image" />
                    <h3 className="projects-name">Story App</h3>

                   
                    
                </div>
                <div className="projects-card">
                    <img src={project2} alt="Project" className="projects-image web-image" />
                    <h3 className="projects-name">Watch App</h3>

                   
                    
                </div>
                

                
                <div className="projects-card">
                    <img src={project4} alt="UI/UX Project" className="projects-image uiux-image" />
                    <h3 className="projects-name">UI/UX</h3>

                   
                    
                </div>

                </div>
                </AnimationWrapper>
                </div>
                
                
                
            </div>
        </section>
    )
}

export default Projects;