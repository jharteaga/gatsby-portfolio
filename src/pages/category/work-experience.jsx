import React, { useState } from 'react';
import { graphql } from 'gatsby';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Company, CompanyStatements } from '../../components/work-experience';

import '../../sass/style.scss';

const WorkExperiencePage = ({ data }) => {
  const companies = data.allWpWorkExperience.nodes;

  const [companyInfo, setCompanyInfo] = useState(companies[0].experience);
  const [companyActive, setCompanyActive] = useState(0);

  const activateCompany = (company, index) => {
    setCompanyInfo(company);
    setCompanyActive(index);
  };

  return (
    <>
      <Header />
      <div className="work-experience">
        <h1>Work Experience</h1>
        <div className="work-experience__companies">
          {companies.map((company, index) => (
            <Company
              key={company.experience.company}
              imageUrl={company.experience.logo.sourceUrl}
              alt={company.experience.logo.sourceUrl}
              status={index === companyActive ? 'active' : ''}
              onClick={() => activateCompany(company.experience, index)}
            />
          ))}
        </div>
        <div className="work-experience__statements">
          <CompanyStatements companyInfo={companyInfo} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WorkExperiencePage;

export const data = graphql`
  query getCompanies {
    allWpWorkExperience(sort: { order: ASC, fields: date }) {
      nodes {
        experience {
          company
          logo {
            sourceUrl
            altText
          }
          accomplishmentStatements
          endDate
          position
          startDate
        }
      }
    }
  }
`;
