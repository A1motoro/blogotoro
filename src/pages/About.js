import React from 'react';

const About = () => {
  return (
    <div className="about-page">
      <div className="container">
        <div className="about-content">
          <div className="about-image">
            <i className="fas fa-user"></i>
          </div>
          <div className="about-text">
            <h1>Hello, I'm A1m</h1>
            <p>I'm a passionate writer, developer, and lifelong learner who loves sharing knowledge and experiences through this blog. With a background in technology and a curiosity for the world around us, I write about everything from coding tutorials to personal reflections.</p>

            <h2>What I Write About</h2>
            <div className="interests-grid">
              <div className="interest-item">
                <i className="fas fa-code"></i>
                <h3>Programming</h3>
                <p>Algorithms, data structures, and software development practices.</p>
              </div>
              <div className="interest-item">
                <i className="fas fa-brain"></i>
                <h3>Mathematics</h3>
                <p>Mathematical concepts, proofs, and problem-solving techniques.</p>
              </div>
              <div className="interest-item">
                <i className="fas fa-lightbulb"></i>
                <h3>Technology</h3>
                <p>Latest trends, tools, and innovations in the tech world.</p>
              </div>
              <div className="interest-item">
                <i className="fas fa-user-graduate"></i>
                <h3>Learning</h3>
                <p>Continuous learning journey and educational experiences.</p>
              </div>
            </div>

            <h2>My Journey</h2>
            <p>When I'm not writing or coding, you can find me exploring new places, reading books, or experimenting with new technologies. I believe in continuous learning and sharing that knowledge with others.</p>

            <p>This blog is my way of contributing to the developer community and documenting my growth as a programmer and problem solver.</p>

            <div className="social-links">
              <a href="https://github.com/A1motoro" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="mailto:Almoonex@outlook.com">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
