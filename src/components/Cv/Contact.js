import React from "react";
import { iconNames, iconsMap } from "./../../utils/mapIconToName";

const Contact = (props) => {
  const { title, linkData, linkRef, textData, iconName } = props;

  const ContactIcon = iconsMap.get(iconNames[iconName]);

  return (
    <div className="cv-section-contact-deatils">
      {/* {title ? <h4>{title}</h4> : null} */}
      {iconName ? (
        <div className="cv-small-icon-wrapper">
          <ContactIcon />
        </div>
      ) : null}
      {linkData && linkRef ? <a href={linkRef}>{linkData}</a> : null}
      {textData ? <p>{textData}</p> : null}
    </div>
  );
};

export default Contact;
