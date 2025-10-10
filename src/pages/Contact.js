import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send this data to a server
    alert('Thank you for your message! This is a demo contact form.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="contact-page">
      <div className="container">
        <h1 className="section-title">Get In Touch</h1>

        <div className="contact-content">
          <div className="contact-info">
            <h2>Let's Connect</h2>
            <p>I'm always interested in discussing new opportunities, sharing ideas, or just having a chat about technology and programming.</p>

            <div className="contact-methods">
              <div className="contact-method">
                <i className="fas fa-envelope"></i>
                <div>
                  <h3>Email</h3>
                  <p>Almoonex@outlook.com</p>
                </div>
              </div>

              <div className="contact-method">
                <i className="fab fa-github"></i>
                <div>
                  <h3>GitHub</h3>
                  <p>github.com/A1motoro</p>
                </div>
              </div>

              <div className="contact-method">
                <i className="fas fa-blog"></i>
                <div>
                  <h3>Blog</h3>
                  <p>Read my latest posts and tutorials</p>
                </div>
              </div>
            </div>

            <div className="social-links">
              <a href="https://github.com/A1motoro" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="mailto:Almoonex@outlook.com">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>

          <div className="contact-form">
            <h2>Send a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn">
                <i className="fas fa-paper-plane"></i> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
