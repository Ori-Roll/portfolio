import React from 'react';

const Contact = (props) => {
  const { title, linkData, linkRef, textData } = props;
  console.log('props are ', props);

  return (
    <div>
      {title ? <h4>{title}</h4> : null}
      {linkData && linkRef ? <a href={linkRef}>{linkData}</a> : null}
      {textData ? <p>{textData}</p> : null}
    </div>
  );
};

export default Contact;
