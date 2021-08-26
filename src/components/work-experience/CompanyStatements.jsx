import React from 'react';

export const CompanyStatements = ({ companyInfo }) => {
  return (
    <div className="work-experience__metadata">
      <h2>{companyInfo.position}</h2>
      <p className="company">{companyInfo.company}</p>
      <div className="work-experience__dates">
        <p className="start-date">{companyInfo.startDate} -</p>
        <p className="end-date">
          &nbsp;
          {companyInfo.endDate ? companyInfo.endDate : 'Present'}
        </p>
      </div>
      <div
        dangerouslySetInnerHTML={{
          __html: companyInfo.accomplishmentStatements,
        }}
      />
    </div>
  );
};
