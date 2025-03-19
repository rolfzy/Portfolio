import "react";
import "./assets/style/index.css";
import profileImage from './assets/image/image3.jpg';
import WaveBackground from "./waves";
import ShinyText from "./ShinyText";

const Hero = () => {
    return(
        <div className="hero-container">
            <WaveBackground />
            <nav className="navbar">
                <div className="navbar-logo" id="Home" >
                    <ShinyText text="Rofik Adam Nugraha" speed={3} />
                </div>
                <ul className="navbar-links">
                    <li><a href="#Home">Home</a></li> 
                    <li><a href="#about">About</a></li> 
                    <li><a href="#project">Project</a></li> 
                    </ul>
                    <button className="contact-button" onClick={() => window.location.href = '#contact'} >Contact Me</button>
            </nav>


            <div className="hero-content">
                <div  className="hero-text" >
                    
                    <h1 className="hero-title">
                    <ShinyText text="Rofik Adam Nugraha" speed={3} />
                    </h1>
                    <h2 className="hero-title">
                        <ShinyText text="Android Dev- Front End - UX/UI Design" speed={3}/>
                    </h2>
                    <p className="hero-description">
                    I am a motivated and enthusiastic IT student specializing in mobile and web development. Currently pursuing a Bachelors degree in Computer Science at Stmik Amik Bandung, I have a strong foundation in programming languages and software development principles. My passion lies in creating efficient, user-friendly mobile applications and dynamic, responsive websites. I am always eager to learn new technologies and take on challenging projects.
                    </p>
                </div>
                <div className="hero-image">
                    <img src={profileImage} alt="Image me" />

                </div>
                
            </div>

        </div>
        
    )
}
export default Hero;