import * as React from 'react';
import DOMPurify from 'dompurify';

const CompanyStatements = ({ companyInfo }) => {
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
          __html: DOMPurify.sanitize(companyInfo.accomplishmentStatements, {
            USE_PROFILES: { html: true },
          }),
        }}
      ></div>
    </div>
  );
};

export default CompanyStatements;
