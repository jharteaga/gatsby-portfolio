import * as React from 'react';

const Company = ({ imageUrl, alt, status = '', onClick }) => {
  return (
    <div className="work-experience__company" onClick={onClick}>
      <img className={status} src={imageUrl} alt={alt} />
    </div>
  );
};

export default Company;
