import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import DOMPurify from 'dompurify';

const Education = () => {
  const data = useStaticQuery(graphql`
    query getEducationPosts {
      allWpHomePosts(filter: { slug: { eq: "education" } }) {
        nodes {
          homePosts {
            title
          }
        }
      }
      allWpEducation {
        nodes {
          education {
            accomplishmentStatements
            degree
            endDate
            institution
            programName
            startDate
          }
          id
        }
      }
    }
  `);

  const educationMeta = data.allWpHomePosts.nodes[0].homePosts;
  const educations = data.allWpEducation.nodes;

  return (
    <div className="education">
      <div className="education__header">
        <h2 className="education__title">{educationMeta.title}</h2>
        <div className="education__divider"></div>
      </div>
      <div className="education__wrapper">
        {educations.map((e) => (
          <div className="program" key={e.id}>
            <div className="program__top">
              <p className="program__degree">{e.education.degree}</p>
              <p className="program__program">{e.education.programName}</p>
              <p className="program__institution">{e.education.institution}</p>
              <div className="program__date">
                <p className="program__startdate">
                  {e.education.startDate}
                  {' - '}
                </p>

                <p className="program__enddate">
                  {e.education.endDate ? e.education.endDate : 'Present'}
                </p>
              </div>
            </div>
            <div
              className="program__statements"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(
                  e.education.accomplishmentStatements,
                  {
                    USE_PROFILES: { html: true },
                  }
                ),
              }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
