import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Company from '../components/work-experience/Company';
import CompanyStatements from '../components/work-experience/CompanyStatements';

import '../sass/style.scss';

const WorkExperiencePage = () => {
  const [companyInfo, setCompanyInfo] = React.useState('');
  const [companyActive, setCompanyActive] = React.useState();

  const activateCompany = (company, index) => {
    setCompanyInfo(company);
    setCompanyActive(index);
  };

  const data = useStaticQuery(graphql`
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
  `);

  const companies = data.allWpWorkExperience.nodes;

  React.useEffect(() => {
    setCompanyInfo(companies[0].experience);
    setCompanyActive(0);
  }, []);

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
