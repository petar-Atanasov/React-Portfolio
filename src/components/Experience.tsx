function Experience() {
    return (
        <section id="experience">
            <p className="section__text__p1">Explore My</p>
            <h1 className="title">Experience</h1>

            <div className="experience-details-container">
                <div className="about-containers">

                    <div className="details-container">
                        <h2 className="experience-sub-title">Software Engineering</h2>
                        <article>
                            <img src="/assets/checkmark.png" alt="Experience icon" className="icon"/>
                            <div>
                                <h3>Java</h3>
                                <p>Experienced</p>
                            </div>
                        </article>
                        <article>
                            <img src="/assets/checkmark.png" alt="Experience icon" className="icon"/>
                            <div>
                                <h3>C++</h3>
                                <p>Experienced</p>
                            </div>
                        </article>
                        <article>
                            <img src="/assets/checkmark.png" alt="Experience icon" className="icon"/>
                            <div>
                                <h3>C#</h3>
                                <p>Experienced</p>
                            </div>
                        </article>
                        <article>
                            <img src="/assets/checkmark.png" alt="Experience icon" className="icon"/>
                            <div>
                                <h3>Python</h3>
                                <p>Experienced</p>
                            </div>
                        </article>
                    </div>   

                    <div className="details-container">
                        <h2 className="experience-sub-title">Frontend Development</h2>
                        <article>
                            <img src="/assets/checkmark.png" alt="Experience icon" className="icon"/>
                            <div>
                                <h3>JavaScript</h3>
                                <p>Experienced</p>
                            </div>
                        </article>
                        <article>
                            <img src="/assets/checkmark.png" alt="Experience icon" className="icon"/>
                            <div>
                                <h3>React</h3>
                                <p>Experienced</p>
                            </div>
                        </article>
                        <article>
                            <img src="/assets/checkmark.png" alt="Experience icon" className="icon"/>
                            <div>
                                <h3>TypeScript</h3>
                                <p>Experienced</p>
                            </div>
                        </article>

                    </div>

                    <div className="details-container">
                        <h2 className="experience-sub-title">Backend Development</h2>
                        <article>
                            <img src="/assets/checkmark.png" alt="Experience icon" className="icon"/>
                            <div>
                                <h3>MySQL</h3>
                                <p>Experienced</p>
                            </div>
                        </article>
                        <article>
                            <img src="/assets/checkmark.png" alt="Experience icon" className="icon"/>
                            <div>
                                <h3>AWS</h3>
                                <p>Experienced</p>
                            </div>
                        </article>
                        <article>
                            <img src="/assets/checkmark.png" alt="Experience icon" className="icon"/>
                            <div>
                                <h3>MongoDB</h3>
                                <p>Experienced</p>
                            </div>
                        </article>
                    </div>
                </div>
            </div>

            <img 
                src="/assets/arrow.png"
                className="icon arrow" 
                onClick={() => window.location.href = "#projects"}
            />
        </section>
    )
}
export default Experience;