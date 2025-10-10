import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
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
    alert(t('contact.thankYou'));
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
        <h1 className="section-title">{t('contact.title')}</h1>

        <div className="contact-content">
          <div className="contact-info">
            <h2>{t('contact.subtitle')}</h2>
            <p>{t('contact.description')}</p>

            <div className="contact-methods">
              <div className="contact-method">
                <i className="fas fa-envelope"></i>
                <div>
                  <h3>{t('contact.email')}</h3>
                  <p>Almoonex@outlook.com</p>
                </div>
              </div>

              <div className="contact-method">
                <i className="fab fa-github"></i>
                <div>
                  <h3>{t('contact.github')}</h3>
                  <p>github.com/A1motoro</p>
                </div>
              </div>

              <div className="contact-method">
                <i className="fas fa-blog"></i>
                <div>
                  <h3>{t('contact.blog')}</h3>
                  <p>{t('contact.blogDesc')}</p>
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
            <h2>{t('contact.sendMessage')}</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">{t('contact.name')}</label>
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
                <label htmlFor="email">{t('contact.email')}</label>
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
                <label htmlFor="subject">{t('contact.subject')}</label>
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
                <label htmlFor="message">{t('contact.message')}</label>
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
                <i className="fas fa-paper-plane"></i> {t('contact.submit')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
