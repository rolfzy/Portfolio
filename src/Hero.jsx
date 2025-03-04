import "react";
import "./index.css";
import profileImage from './assets/image/image3.jpg';

const Hero = () => {
    return(
        <div className="hero-container">

            <nav className="navbar">
                <div className="navbar-logo" id="Home">Rofik Adam Nugraha</div>
                <ul className="navbar-links">
                    <li><a href="#Home">Home</a></li> 
                    <li><a href="#about">About</a></li> 
                    <li><a href="#project">Project</a></li> 
                    </ul>
                    <button className="contact-button" onClick={() => window.location.href = '#contact'} >Contact Me</button>
            </nav>



            <div className="hero-content">
                <div  className="hero-text" >
                    <h1 className="hero-title">Rofik Adam Nugraha</h1>
                    <h2 className="hero-title">Android Dev- Front End - UX/UI Design</h2>
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