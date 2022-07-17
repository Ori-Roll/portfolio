import React from 'react';
import { Link } from 'react-router-dom';

const Intro = () => {
  return (
    <div className="intro-page">
      <div className="intro-head">
        <h1 style={{ color: '#535e78' }}>Ori Roll</h1>
        <h2>PORTFOLIO & CV</h2>
      </div>
      <div className="intro-links">
        <Link
          className="intro-link"
          to="/portfolio"
          style={{ color: '#ad767d', borderColor: '#ad767d' }}
        >
          PORTFOLIO
        </Link>
        <Link
          className="intro-link"
          to="/cv"
          style={{ color: '#798eb0', borderColor: '#798eb0' }}
        >
          MY CV
        </Link>
        <Link
          className="intro-link"
          to="/contact"
          style={{ color: '#80ad76', borderColor: '#80ad76' }}
        >
          CONTACT ME
        </Link>
      </div>
    </div>
  );
};

export default Intro;
