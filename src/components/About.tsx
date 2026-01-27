function About() {
  return (
    <section id="about">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>

      <div className="section-container">

        {/* LEFT */}
        <div className="section__pic-container">
          <img
            src="/assets/about-pic.jpeg"
            className="about-pic"
            alt="About Me Pic"
          />
        </div>

        {/* RIGHT */}
        <div className="about-details-container">

          {/* TOP ROW */}
          <div className="about-containers">
            <div className="details-container">
              <img src="/assets/experience.png" className="icon" />
              <h3>Experience</h3>
              <p>3+ years <br />Software Engineering</p>
            </div>

            <div className="details-container">
              <img src="/assets/education.png" className="icon" />
              <h3>Education</h3>
              <p>BSc (Hons) Computer Science <strong>First Class with Honours</strong></p>
            </div>
          </div>

          {/* BOTTOM ROW */}
          <div className="text-container">
            <p>
              Enthusiastic and dedicated Computer Science graduate with expertise in
              Software Engineering,
              Back-End Development, Machine Learning,
              and Deep Learning projects. I am seeking opportunities to
              leverage my programming skills, analytical abilities, and leadership
              experience in a dynamic and growth-oriented environment.
              I am open to work on innovative projects that challenge my skills
              and allow me to grow as a developer.
            </p>
          </div>

        </div>
      </div>

      <img
        src="/assets/arrow.png"
        className="icon arrow"
        onClick={() => window.location.href = "#experience"}
      />
    </section>
  )
}

export default About
