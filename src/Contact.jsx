import "react";
import "./Contact.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { useRef } from "react";
import emailjs from "emailjs-com";
import Swal from 'sweetalert2';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_44k2ln7', 'template_lh80fy7', form.current, 'yVLs2ViKdrCsGNMTS')
            .then((result) => {
                console.log(result.text);
                Swal.fire({
                    icon:'success',
                    title:'Email Berhasil Dikirimm!',
                    text:'Terimakasih Telah Menghubungi.',
                    confirmButtonText:'OK'
                });
            }, (error) => {
                console.log(error.text);
                Swal.fire({
                icon: 'error',
                title: 'Terjadi Kesalahan!',
                text: 'Silakan coba lagi.',
                confirmButtonText: 'OK'
            });
            });
    };

    return (
        <section className="contact-section" id="contact">
            <div className="contact-container">
                <div className="contact-info">
                    <h2 className="contact-title">Have Project To Discuss?</h2>
                    <h3 className="contact-subtitle">Get in Touch</h3>
                    <div className="contact-details">
                        <h4>Contact</h4>
                        <p className="contact-email">rofikadamnugraha@gmail.com</p>
                    </div>

                    <div className="social-media">
                        <h4>Social Media</h4>
                        <div className="social-icons">
                            <a href="https://www.linkedin.com/in/rofikadamnugraha" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin />
                            </a>
                            <a href="https://github.com/rolfzy" target="_blank" rel="noopener noreferrer">
                                <FaGithub />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="contact-form">
                    <form ref={form} onSubmit={sendEmail}>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" placeholder="Your Name" />
                        
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="Your Email" />
                        
                        <label htmlFor="message">Message</label>
                        <input type="text" id="message" name="message" placeholder="Your Message" />

                        <button type="submit" className="send-button">Send</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact;