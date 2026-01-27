function Profile() {
    return(
        <section id="profile">
                <div className="section__pic-container">
                    <img src="/assets/profile-pic.png" alt="Profile Picture" className="about-pic"/>
                </div>

            <div className="section__text">
                <p className="section__text__p1">Hello I'm</p>
                <h1 className="title">Petar Atanasov</h1>
                <p className="section__text__p2">Graduate Software Engineer</p>

                <div className="btn-container">
                    <button
                        className="btn btn-color-2"
                        onClick={() => window.open('/assets/CV%20New%20Petar%20Atanasov.pdf')}
                        >
                        Download CV
                    </button>

                    <button
                        className="btn btn-color-1"
                        onClick={() => window.location.href = "#contact"}
                        >
                        Let's Connect
                    </button>
                </div>

                <div id="social-container">
                    <img 
                        src="/assets/linkedin.png" 
                        className="icon"
                        alt="LinkedIn" 
                        onClick={() =>
                            window.location.href=
                            "https://www.linkedin.com/in/petar-atanasov-4a551a27b/"
                        }
                    />
                    <img
                        src="/assets/github.png"
                        className="icon"
                        alt="GitHub"
                        onClick={() =>
                            window.location.href=
                            "https://github.com/petar-Atanasov"
                        }
                    />
                </div>
            </div>
        </section>
    )
}
export default Profile;