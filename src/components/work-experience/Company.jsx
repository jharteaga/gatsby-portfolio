import React from 'react';

export const Company = ({ imageUrl, alt, status = '', onClick }) => {
  return (
    <div className="work-experience__company" onClick={onClick} role="none">
      <img className={status} src={imageUrl} alt={alt} />
    </div>
  );
};
