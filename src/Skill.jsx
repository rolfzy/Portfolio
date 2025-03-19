import "react";
import "./assets/style/Skill.css";
import AnimationWrapper from "./Animation";

const Skills = () =>{
    return(
        <section className="skills-section" >
            <div className="skills-container">
                <h2 className="skills-title" id="about">My Skills</h2>
                <AnimationWrapper>
                <div className="skills-content">
                    <div className="skills-card">
                        <h3>Mobile Development</h3>
                        <p>
                        I create robust and interactive mobile applications using the latest 
              technologies such as Kotlin, Jetpack Compose, and React Native. 
              I focus on performance, scalability, and intuitive user experience.
                        </p>
                    </div>
                    <div className="skills-card">
                    <h3>Front-End</h3>
                        <p>
                        I develop responsive, accessible, and visually appealing web 
              interfaces. Skilled in React, HTML, CSS, and JavaScript, React. I ensure 
              every pixel looks great on all devices.
                        </p>
                    </div>
                    <div className="skills-card">
                    <h3>UI-UX Design</h3>
                        <p>
                        I craft user-centric designs that are both aesthetically pleasing 
              and easy to navigate. My workflow includes wireframing, prototyping, 
              and user testing for continuous improvement.
                        </p>
                    </div>
                </div>
                </AnimationWrapper>
            </div>
        </section>
    )
}

export default Skills;