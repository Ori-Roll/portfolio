import React from 'react';

const Contact = () => {
  return (
    <div className="contact-page">
      <h3 className="cv-section-header">CONTACT ME</h3>
      <div className="contact-section-contact-deatils">
        <div>
          <h4>Phone:</h4>
          <p className="contact-phone">054-4897787</p>
        </div>

        <div>
          <h4>Email:</h4>
          <a href="mailto:oriroll@gmail.com">oriroll@gmail.com</a>
        </div>

        <div className="cv-github-link">
          <h4>GitHub page:</h4>
          <a href="https://github.com/Ori-Roll">github.com/Ori-Roll</a>
        </div>

        <div>
          <h4>Portfolio:</h4>
          <a href="https://ori-roll.github.io/portfolio/#/">
            ori-roll.github.io/portfolio
          </a>
        </div>
        <div>
          <h4>Linkedin:</h4>
          <a href="https://www.linkedin.com/in/ori-roll-11152a1a7/">
            linkedin.com/ori-roll
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
