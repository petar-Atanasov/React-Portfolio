function Projects() {
    return (
        <section id="projects">
            <p className="section__text__p1">Browse My Recent</p>
            <h1 className="title">Projects</h1>

            <div className="experience-details-container">
                <div className="about-containers">

                    <div className="details-container color-container">
                        <img src="/assets/project-1.jpg" className="project-img" />
                        <h2 className="experience-sub-title project-title">
                            Measuring Blood Pressure from CCA using NoIR Camera
                        </h2>
                        <button
                            className="btn btn-color-2"
                            onClick={() =>
                                window.location.href =
                                "https://github.com/petar-Atanasov/Biometrics-Measuring-Blood-Pressure-from-CCA-using-NoIR-Model-3-Camera"
                            }
                        >
                            View Project
                        </button>
                    </div>

                    <div className="details-container color-container">
                        <img src="/assets/project-2.jpg" className="project-img" />
                        <h2 className="experience-sub-title project-title">
                            ML System for Categorising UCI Digit with SVM
                        </h2>
                        <button
                            className="btn btn-color-2"
                            onClick={() =>
                                window.location.href =
                                "https://github.com/petar-Atanasov/ML-System-For-Categorising-UCI-Digit-with-SVM"
                            }
                        >
                            View Project
                        </button>
                    </div>

                    <div className="details-container color-container">
                        <img src="/assets/project-3.jpg" className="project-img" />
                        <h2 className="experience-sub-title project-title">
                            Classification System for IMDB Movie Review using NLP and RNN
                        </h2>
                        <button
                            className="btn btn-color-2"
                            onClick={() =>
                                window.location.href =
                                "https://github.com/petar-Atanasov/ReelFeel_NLP_RNN"
                            }
                        >
                            View Project
                        </button>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}
export default Projects;