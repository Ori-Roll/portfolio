import React from "react";
import LevelBar from "./LevelBar.js";
import avatar from "../../assets/avatar.png";
import printIcon from "../../assets/print-icon.png";
import pdfIcon from "../../assets/pdf17.svg";
import pdfCv from "../../assets/Ori-Cv.pdf";
import { cvData } from "../../data/cvData";
import Contact from "./Contact.js";
import Episode from "./Episode.js";

const Cv = () => {
  function goPDF() {
    let newWindow = window.open(pdfCv);
  }

  function goPrint() {
    window.print();
  }

  const { work, contact, about, skills } = cvData;

  return (
    <div className="cv">
      <header className="cv-page-header">
        <img src={avatar} alt="-" />
        <h1>Ori Roll</h1>
        <p className="cv-header-sub">Front end developer</p>
      </header>

      <div className="cv-page-header-print">
        <img
          src={printIcon}
          alt="-"
          style={{ height: "2.3em" }}
          onClick={() => goPrint()}
        />
        <img
          src={pdfIcon}
          alt="-"
          style={{ height: "2.3em" }}
          onClick={() => goPDF()}
        />
      </div>

      <div className="cv-section-contact">
        <h3 className="cv-section-header">CONTACT ME</h3>
        {contact.map(({ id, ...rest }) => {
          return <Contact {...rest} />;
        })}
      </div>

      <div className="cv-section-about">
        <h3 className="cv-section-header">ABOUT ME</h3>
        <p>{about}</p>
      </div>

      <div className="cv-section-work">
        <h3 className="cv-section-header">WORK EXPERIENCE</h3>
        {work.map(({ id, commentHeader, ...rest }) =>
          commentHeader ? (
            <>
              <p />
              <h3 className="cv-section-header" key={id}>
                {commentHeader}
              </h3>
            </>
          ) : (
            <Episode key={id} {...rest} />
          )
        )}
      </div>

      {/* <div className="cv-section-education">
        <h3 className="cv-section-header">EDUCATION & BACKGROUND</h3>
        <div className="cv-episode">
          <h2>Academic qualifications</h2>
          <p>
            2013 - Bachelor's degree in architecture from Technion
            (B.Arc)
          </p>
        </div>
        <div className="cv-episode">
          <h2>IDF</h2>
          <h4>2000&#8202;-&#8202;2003</h4>
          <p>
            Medic in the Combat engineering corps (“Handasa kravit”)
          </p>
        </div>
      </div> */}
      <div className="cv-section-skills">
        <h3 className="cv-section-header">SKILLS</h3>
        <div className="cv-episode-skills-body">
          <div className="cv-skill-prog">
            {skills.map(({ id, ...rest }) => (
              <LevelBar key={id} {...rest} />
            ))}
          </div>
          {/* <div className="cv-skill-others"> */}
          {/* <h2>Other Skills</h2> */}
          {/* <p> */}
          {/* VSCode, npm, git. <br /> AutoCAD, Revit, 3ds-max, */}
          {/* Photoshop */}
          {/* </p> */}
          {/* </div> */}
          {/* <div className="cv-skill-languages"> */}
          {/* <h2>Languages</h2> */}
          {/* <p>Hebrew - native speaker</p> */}
          {/* <p>English - native speaker level</p> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Cv;
