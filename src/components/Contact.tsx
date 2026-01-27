function Contact() {
    return (
        <section id="contact">
            <p className="section__text__p1">Get In Touch</p>
            <h1 className="title">Contact Me</h1>

            <div className="contact-info-upper-container">
                <div className="contact-info-container">
                    <img src="/assets/email.png" className="icon email-icon" />
                    <p>
                        <a href="mailto:petarattanasov@gmail.com">
                            petarattanasov@gmail.com
                        </a>
                    </p>
                </div>
                <div className="contact-info-container">
                    <img src="/assets/linkedin.png" className="icon linkedin-icon" />
                    <p>
                        <a href="https://www.linkedin.com/in/petar-atanasov-4a551a27b/">
                            LinkedIn
                        </a>
                    </p>
                </div>
            </div>
        </section>    
    )
}
export default Contact;